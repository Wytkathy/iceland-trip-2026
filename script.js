// 初始化地图
const map = L.map('map', {
    center: [64.9631, -19.0208],
    zoom: 7,
    minZoom: 6,
    maxZoom: 13
});

// 添加地图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 自定义图标
const hotelIcon = L.divIcon({
    className: 'custom-icon',
    html: '<div style="background: #667eea; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

const attractionIcon = L.divIcon({
    className: 'custom-icon',
    html: '<div style="background: #FFA500; width: 18px; height: 18px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
});

const starIcon = L.divIcon({
    className: 'custom-icon',
    html: '<div style="background: #FFD700; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 12px;">⭐</div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// 创建图层组
let currentLayers = L.layerGroup().addTo(map);

// 关闭信息面板
function closeInfoPanel() {
    document.getElementById('infoPanel').classList.remove('active');
}

// 显示信息面板
function showInfoPanel(day) {
    const details = dayDetails[day];
    if (!details) return;
    
    let scheduleHTML = details.schedule.map(item => 
        `<div class="timeline-item">
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">${item.activity}</div>
        </div>`
    ).join('');
    
    let highlightsHTML = details.highlights ? 
        `<div class="info-panel-section">
            <div class="info-panel-section-title">✨ 行程亮点</div>
            <ul class="info-panel-list">
                ${details.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>` : '';
    
    let tipsHTML = details.tips ? 
        `<div class="info-panel-section">
            <div class="info-panel-section-title">💡 注意事项</div>
            <ul class="info-panel-list">
                ${details.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>` : '';
    
    let extraInfo = '';
    if (details.distance) extraInfo += `<p><strong>📏 里程：</strong>${details.distance}</p>`;
    if (details.accommodation) extraInfo += `<p><strong>🏨 住宿：</strong>${details.accommodation}</p>`;
    if (details.meals) extraInfo += `<p><strong>🍽️ 餐食：</strong>${details.meals}</p>`;
    if (details.intensity) extraInfo += `<p><strong>💪 强度：</strong>${details.intensity}</p>`;
    if (details.tour) extraInfo += `<p><strong>👥 旅行团：</strong>${details.tour}</p>`;
    if (details.price) extraInfo += `<p><strong>💰 价格：</strong>${details.price}</p>`;
    
    document.getElementById('infoPanelContent').innerHTML = `
        <div class="info-panel-header">${details.title}</div>
        <div class="info-panel-content">
            <div class="info-panel-section">
                <div class="info-panel-section-title">📅 ${details.date}</div>
                <p>${details.description}</p>
                ${extraInfo}
            </div>
            <div class="info-panel-section">
                <div class="info-panel-section-title">⏰ 时间安排</div>
                ${scheduleHTML}
            </div>
            ${highlightsHTML}
            ${tipsHTML}
        </div>
    `;
    
    document.getElementById('infoPanel').classList.add('active');
}

// 显示特定天数的路线
function showDay(day) {
    currentLayers.clearLayers();
    
    const itinerary = itineraries[day];
    
    // 绘制路线
    itinerary.routes.forEach(route => {
        const polyline = L.polyline(route.coords, {
            color: route.color,
            weight: route.weight,
            opacity: 0.8,
            dashArray: route.dash || null
        });
        currentLayers.addLayer(polyline);
    });
    
    // 添加标记
    itinerary.markers.forEach(marker => {
        const m = L.marker(marker.pos, {icon: marker.icon})
            .bindPopup(marker.popup, {maxWidth: 300});
        currentLayers.addLayer(m);
    });
    
    // 自动调整视图
    if (itinerary.routes.length > 0) {
        const allCoords = itinerary.routes.flatMap(r => r.coords);
        if (allCoords.length > 0) {
            map.fitBounds(L.latLngBounds(allCoords), {padding: [50, 50]});
        }
    } else if (itinerary.markers.length > 0) {
        const markerCoords = itinerary.markers.map(m => m.pos);
        map.fitBounds(L.latLngBounds(markerCoords), {padding: [50, 50]});
    }
    
    // 更新侧边栏
    document.querySelectorAll('.day-section').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-day="${day}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // 显示信息面板
    if (itinerary.onShow) {
        itinerary.onShow();
    }
}

// 分享功能
function shareMap() {
    if (navigator.share) {
        navigator.share({
            title: '冰岛8天7夜详细行程地图',
            text: '查看我的冰岛旅行计划！2026年2月19-26日',
            url: window.location.href
        }).catch(err => console.log('分享失败:', err));
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('✅ 链接已复制到剪贴板！\n\n您可以通过微信、邮件等方式分享给朋友。');
        }).catch(() => {
            alert('📋 请复制以下链接分享：\n\n' + window.location.href);
        });
    }
}

// 初始化侧边栏
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    const sidebarData = [
        {day: 0, badge: '📍', title: '行程总览', intensity: null, info: '点击查看完整8天路线图', stats: [{text: '📏 总里程：约1,800公里'}]},
        {day: 1, badge: '1', title: '2月19日 周四', intensity: 'easy', info: '📍 伦敦 → 雷克雅未克（深夜23:55抵达）', stats: [{text: '✈️ 飞行3h20m'}, {text: '🚌 交通45分钟'}]},
        {day: 2, badge: '2', title: '2月20日 周五', intensity: 'easy', info: '📍 雷克雅未克市区观光', stats: [{text: '⛪ 4个景点'}, {text: '🛒 超市采购'}]},
        {day: 3, badge: '3', title: '2月21日 周六', intensity: 'moderate', info: '📍 黄金圈 → 南海岸', stats: [{text: '📏 约300km'}, {text: '⭐ 5大景点'}, {text: '🌌 极光'}]},
        {day: 4, badge: '4', title: '2月22日 周日', intensity: 'hard', info: '📍 南海岸 → 冰川徒步', stats: [{text: '📏 约200km'}, {text: '🧊 冰川3小时'}, {text: '🌌 极光'}]},
        {day: 5, badge: '5', title: '2月23日 周一', intensity: 'hard', info: '📍 冰河湖 → 雷克雅未克', stats: [{text: '📏 约450km'}, {text: '❄️ 冰洞3小时'}, {text: '⏰ 20:00返回'}]},
        {day: 6, badge: '6', title: '2月24日 周二', intensity: 'moderate', info: '📍 斯奈山半岛环游', stats: [{text: '📏 约400km'}, {text: '⭐ 7大景点'}, {text: '🗣️ 中文导游'}]},
        {day: 7, badge: '7', title: '2月25日 周三', intensity: 'hard', info: '📍 火山徒步 + 蓝湖温泉', stats: [{text: '📏 约100km'}, {text: '🌋 徒步4小时'}, {text: '♨️ 温泉2.5小时'}]},
        {day: 8, badge: '8', title: '2月26日 周四', intensity: 'easy', info: '📍 雷克雅未克 → 伦敦（16:20离境）', stats: [{text: '🛍️ 3小时购物'}, {text: '✈️ 飞行3h10m'}]}
    ];
    
    sidebarData.forEach(item => {
        const section = document.createElement('div');
        section.className = 'day-section';
        section.setAttribute('data-day', item.day);
        
        const intensityBadge = item.intensity ? 
            `<span class="intensity-badge intensity-${item.intensity}">${
                item.intensity === 'easy' ? '轻松' : 
                item.intensity === 'moderate' ? '中等' : '高强度'
            }</span>` : '';
        
        const statsHTML = item.stats.map(s => 
            `<div class="stat-item">${s.text}</div>`
        ).join('');
        
        section.innerHTML = `
            <div class="day-title">
                <div class="day-title-left">
                    <span class="day-badge">${item.badge}</span>
                    <span>${item.title}</span>
                </div>
                ${intensityBadge}
            </div>
            <div class="day-info">${item.info}</div>
            <div class="day-stats">${statsHTML}</div>
        `;
        
        section.addEventListener('click', () => showDay(item.day));
        sidebar.appendChild(section);
    });
    
    // 添加图例
    sidebar.innerHTML += `
        <div class="legend">
            <div class="legend-title">🗺️ 图例说明</div>
            <div class="legend-item">
                <div class="legend-color" style="background: #FF6B6B;"></div>
                <span>Day 3: 黄金圈路线</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #4ECDC4;"></div>
                <span>Day 4-5: 南海岸路线</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #95E1D3;"></div>
                <span>Day 6: 斯奈山半岛</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #F38181;"></div>
                <span>Day 7: 火山+蓝湖</span>
            </div>
            <div class="legend-item">
                <div class="legend-marker" style="background: #667eea;"></div>
                <span>住宿地点</span>
            </div>
            <div class="legend-item">
                <div class="legend-marker" style="background: #FFA500;"></div>
                <span>景点</span>
            </div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #ddd; font-size: 11px; color: #666;">
                💡 提示：点击景点标记查看详细信息
            </div>
        </div>
        <div class="footer">
            <p>🇮🇸 冰岛8天7夜行程地图</p>
            <p style="margin-top: 5px;">由 Claude 制作 | 2026年2月</p>
        </div>
    `;
}

// 页面加载完成后
window.addEventListener('load', function() {
    initSidebar();
    showDay(3); // 默认显示Day 3
    
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 500);
});
