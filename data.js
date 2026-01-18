// 所有地点坐标
const locations = {
    reykjavik: [64.1466, -21.9426],
    keflavik_airport: [63.9850, -22.6056],
    thingvellir: [64.2558, -21.1292],
    bruarfoss: [64.2639, -20.5167],
    geysir: [64.3107, -20.3014],
    gullfoss: [64.3271, -20.1211],
    seljalandsfoss: [63.6156, -19.9886],
    hotel_dranghlid: [63.5333, -19.5167],
    skogafoss: [63.5319, -19.5114],
    falljokull: [64.0167, -16.4167],
    hrifunes: [63.8333, -18.0833],
    jokulsarlon: [64.0784, -16.2306],
    diamond_beach: [64.0428, -16.1803],
    ice_cave: [63.95, -16.9],
    reynisfjara: [63.4028, -19.0456],
    ytri_tunga: [64.8611, -23.5000],
    budir: [64.8194, -23.7889],
    arnarstapi: [64.7583, -23.6167],
    djupalonssandur: [64.7458, -23.9361],
    londrangar: [64.7333, -23.7833],
    kirkjufell: [64.9439, -23.3125],
    fagradalsfjall: [63.8833, -22.2667],
    blue_lagoon: [63.8804, -22.4495]
};

// 每日详细信息
const dayDetails = {
    1: {
        title: "Day 1: 深夜抵达",
        date: "2月19日 周四",
        description: "从伦敦飞往雷克雅未克，深夜抵达后入住酒店休息",
        schedule: [
            {time: "20:35", activity: "伦敦希思罗T2起飞（FI455）"},
            {time: "23:55", activity: "抵达凯夫拉维克机场"},
            {time: "00:30", activity: "入境、提取行李"},
            {time: "01:00", activity: "乘Flybus或出租车前往市区"},
            {time: "02:00", activity: "办理酒店入住"},
            {time: "02:30", activity: "休息睡觉"}
        ],
        highlights: [
            "建议打出租车（¥990），深夜更安全快捷",
            "提前告知酒店深夜02:00入住",
            "Flybus车程45分钟，出租车35分钟"
        ],
        tips: [
            "飞机上尽量睡觉",
            "准备少量现金以防万一",
            "下载酒店地址离线地图"
        ]
    },
    2: {
        title: "Day 2: 市区观光休整",
        date: "2月20日 周五",
        description: "雷克雅未克市区观光，调整时差，为接下来的行程做准备",
        schedule: [
            {time: "09:00", activity: "哈尔格林姆教堂（登塔¥55）"},
            {time: "10:30", activity: "Laugavegur购物街闲逛"},
            {time: "12:30", activity: "午餐（推荐热狗摊¥30）"},
            {time: "14:00", activity: "老港口+Harpa音乐厅"},
            {time: "16:00", activity: "Bonus超市大采购"},
            {time: "18:00", activity: "晚餐"},
            {time: "21:00", activity: "早睡（明天8点出发）"}
        ],
        highlights: [
            "教堂登塔俯瞰全城彩色屋顶",
            "Bonus超市买接下来3天的零食水",
            "充足休息为3日团做准备"
        ],
        tips: [
            "购物清单：水、面包、火腿、奶酪、能量棒",
            "充好所有电子设备",
            "整理明天需要的装备"
        ]
    },
    3: {
        title: "Day 3: 黄金圈经典路线",
        date: "2月21日 周六",
        description: "冰岛最经典的黄金圈路线，包含5大必看景点，晚上住南海岸追极光",
        schedule: [
            {time: "08:00", activity: "酒店接送出发"},
            {time: "09:30", activity: "辛格韦德利国家公园（1小时）"},
            {time: "11:00", activity: "布鲁阿尔瀑布（30分钟）"},
            {time: "12:00", activity: "间歇泉区（45分钟）"},
            {time: "13:00", activity: "黄金瀑布（45分钟）"},
            {time: "15:30", activity: "塞里雅兰瀑布（45分钟）"},
            {time: "傍晚", activity: "入住南海岸酒店"},
            {time: "晚上", activity: "追极光（第一晚机会）"}
        ],
        highlights: [
            "辛格韦德利：两大板块交界处，世界遗产",
            "间歇泉：每5-10分钟喷发一次，高达35米",
            "黄金瀑布：双层瀑布，可见彩虹",
            "塞里雅兰：可走到瀑布后面（会湿身）",
            "夜晚追极光：远离光污染的乡村酒店"
        ],
        tips: [
            "塞里雅兰瀑布必备防水雨衣",
            "自备午餐或途中购买",
            "相机带三脚架（拍极光）",
            "保持电量充足"
        ],
        distance: "约300公里",
        accommodation: "Hotel Drangshlíð（南海岸）",
        meals: "含早餐，午晚餐自理"
    },
    4: {
        title: "Day 4: 冰川徒步探险",
        date: "2月22日 周日",
        description: "今天的重头戏是在Falljökull冰川上徒步2-3小时，高强度活动",
        schedule: [
            {time: "07:00", activity: "酒店早餐（吃饱！）"},
            {time: "08:30", activity: "斯科加瀑布（45分钟）"},
            {time: "10:00", activity: "⭐冰川徒步准备（穿装备）"},
            {time: "10:30", activity: "⭐冰川徒步（2-3小时）"},
            {time: "13:30", activity: "午餐休息"},
            {time: "下午", activity: "前往东部酒店"},
            {time: "晚上", activity: "追极光（第二晚机会）"}
        ],
        highlights: [
            "斯科加瀑布：60米高，可爬430级台阶到顶",
            "⭐冰川徒步：穿冰爪在冰川上行走",
            "探索冰缝、冰洞，欣赏蓝冰世界",
            "专业导游讲解冰川知识",
            "所有装备提供：冰爪、头盔、冰镐"
        ],
        tips: [
            "❗必须穿防水徒步鞋（有脚踝支撑）",
            "穿多层衣服，便于增减",
            "带手套保护双手",
            "戴墨镜防止雪盲",
            "听从导游指挥，注意安全"
        ],
        distance: "约200公里",
        accommodation: "Hrífunes Inn（南海岸东部）",
        meals: "含早餐，午晚餐自理",
        intensity: "高强度（冰川徒步2-3小时）"
    },
    5: {
        title: "Day 5: 冰河湖与蓝冰洞",
        date: "2月23日 周一",
        description: "今天到达行程最远点-冰河湖，探索蓝冰洞，下午返回雷克雅未克",
        schedule: [
            {time: "07:00", activity: "酒店早餐"},
            {time: "09:00", activity: "杰古沙龙冰河湖（1小时）"},
            {time: "10:15", activity: "钻石海滩（30分钟）"},
            {time: "11:00", activity: "⭐蓝冰洞探险（2-3小时）"},
            {time: "14:00", activity: "午餐"},
            {time: "15:30", activity: "雷尼斯黑沙滩（45分钟）"},
            {time: "返程", activity: "返回雷克雅未克"},
            {time: "20:00", activity: "到达市区酒店"}
        ],
        highlights: [
            "冰河湖：巨大冰山漂浮，可能看到海豹",
            "钻石海滩：冰块如钻石般闪耀在黑沙滩上",
            "⭐蓝冰洞：进入冰川内部，震撼蓝色冰墙",
            "黑沙滩：玄武岩柱，海中岩柱",
            "Super Jeep前往冰洞（刺激体验）"
        ],
        tips: [
            "❗黑沙滩危险海浪，绝不背对大海",
            "冰洞内更冷，多穿衣服",
            "相机做好防水保护",
            "今天返回较晚，晚餐自理"
        ],
        distance: "约450公里（全天最长）",
        accommodation: "雷克雅未克市区酒店",
        meals: "含早餐，午晚餐自理",
        intensity: "高强度（长途+冰洞探险）"
    },
    6: {
        title: "Day 6: 斯奈山半岛环游",
        date: "2月24日 周二",
        description: "被称为'冰岛缩影'的斯奈山半岛，中文导游全程讲解，轻松舒适",
        schedule: [
            {time: "08:00", activity: "酒店接送（中文导游）"},
            {time: "10:00", activity: "博尔加内斯休息站"},
            {time: "11:00", activity: "Ytri-Tunga观海豹"},
            {time: "12:15", activity: "Búðir黑教堂"},
            {time: "13:00", activity: "Arnarstapi渔村"},
            {time: "14:00", activity: "午餐（自费）"},
            {time: "15:15", activity: "Djúpalónssandur黑沙滩"},
            {time: "16:15", activity: "Lóndrangar玄武岩柱"},
            {time: "17:00", activity: "Ingjaldshóll教堂"},
            {time: "17:30", activity: "⭐教会山（1小时）"},
            {time: "20:00", activity: "返回雷克雅未克"}
        ],
        highlights: [
            "野生海豹栖息地（远距离观察）",
            "标志性黑教堂（网红打卡点）",
            "天然石拱门与海岸悬崖",
            "1948年沉船遗迹+古代举重石",
            "⭐教会山：冰岛最上镜地标，《权游》取景地"
        ],
        tips: [
            "海边风大，注意保暖",
            "教会山是摄影重点，多留时间",
            "最佳拍摄时间：下午3-4点",
            "午餐自费，建议自备或途中购买",
            "中文导游沟通无障碍"
        ],
        distance: "约400公里",
        accommodation: "雷克雅未克市区酒店",
        meals: "早晚餐自理，午餐自费",
        tour: "Troll中文导游团，12小时"
    },
    7: {
        title: "Day 7: 火山徒步+蓝湖温泉",
        date: "2月25日 周三",
        description: "先徒步火山熔岩地（高强度），然后在蓝湖温泉放松恢复，完美组合",
        schedule: [
            {time: "06:30", activity: "起床，吃饱早餐（重要！）"},
            {time: "08:00", activity: "酒店接送"},
            {time: "09:00", activity: "Lake Kleifarvatn"},
            {time: "10:00", activity: "⭐火山徒步（往返4小时）"},
            {time: "14:00", activity: "午餐"},
            {time: "14:30", activity: "⭐蓝湖温泉（2.5小时）"},
            {time: "17:00", activity: "返回市区"},
            {time: "18:00", activity: "到达酒店"},
            {time: "晚上", activity: "❗必须打包行李（明天离境）"}
        ],
        highlights: [
            "⭐活火山徒步：2021-2023年喷发遗址",
            "崎岖熔岩地形，震撼地貌",
            "往返最多4小时，体力挑战",
            "⭐蓝湖温泉：地热矿物质温泉",
            "免费硅泥面膜+首杯饮品",
            "完美放松舒缓徒步疲劳"
        ],
        tips: [
            "❗❗❗严格装备要求：",
            "✓ 防水冲锋衣（必须）",
            "✓ 防水裤（❌禁穿牛仔裤！失温危险！）",
            "✓ 防水徒步鞋（脚踝支撑）",
            "✓ 登山杖（强烈建议租）",
            "✓ 水1L+高热量零食",
            "✓ 泳衣（蓝湖用）",
            "今晚必须打包行李！"
        ],
        distance: "约100公里",
        accommodation: "雷克雅未克市区酒店",
        meals: "早晚餐自理",
        intensity: "高强度（徒步4小时）",
        price: "¥1,326（用优惠码NY20）"
    },
    8: {
        title: "Day 8: 购物离境",
        date: "2月26日 周四",
        description: "上午3小时自由活动购物，下午16:20飞回伦敦",
        schedule: [
            {time: "08:30", activity: "酒店早餐"},
            {time: "09:30", activity: "最后购物（3小时）"},
            {time: "12:30", activity: "返回酒店，最后检查"},
            {time: "13:00", activity: "出发去机场（Flybus/出租车）"},
            {time: "13:45", activity: "到达机场"},
            {time: "14:00", activity: "办理登机、托运"},
            {time: "14:30", activity: "退税（如有）"},
            {time: "15:00", activity: "安检"},
            {time: "15:30", activity: "免税店+候机"},
            {time: "16:20", activity: "✈️ FI454起飞"},
            {time: "19:30", activity: "抵达伦敦希思罗T2"}
        ],
        highlights: [
            "Laugavegur主街最后购物",
            "补漏的冰岛纪念品",
            "机场免税店（巧克力、酒更便宜）",
            "退税领钱（如购物超ISK 6,000）",
            "充裕时间不赶"
        ],
        tips: [
            "前一晚必须打包好行李",
            "退房前检查所有角落（充电器！）",
            "保留一些ISK作纪念",
            "提前2.5小时到机场",
            "托运行李注意限重"
        ]
    }
};

// 路线和标记配置
const itineraries = {
    0: {
        routes: [
            {coords: [locations.reykjavik, locations.thingvellir, locations.bruarfoss, locations.geysir, locations.gullfoss, locations.seljalandsfoss, locations.hotel_dranghlid], color: '#FF6B6B', weight: 3},
            {coords: [locations.hotel_dranghlid, locations.skogafoss, locations.falljokull, locations.hrifunes, locations.jokulsarlon, locations.diamond_beach, locations.reynisfjara, locations.reykjavik], color: '#4ECDC4', weight: 3},
            {coords: [locations.reykjavik, locations.ytri_tunga, locations.budir, locations.arnarstapi, locations.djupalonssandur, locations.londrangar, locations.kirkjufell, locations.reykjavik], color: '#95E1D3', weight: 3},
            {coords: [locations.reykjavik, locations.fagradalsfjall, locations.blue_lagoon, locations.reykjavik], color: '#F38181', weight: 3}
        ],
        markers: [],
        onShow: () => closeInfoPanel()
    },
    1: {
        routes: [
            {coords: [locations.keflavik_airport, locations.reykjavik], color: '#667eea', weight: 4, dash: '10, 10'}
        ],
        markers: [
            {pos: locations.keflavik_airport, icon: attractionIcon, popup: '<div class="popup-header">✈️ 凯夫拉维克机场</div><div class="popup-body"><p><strong>⏰ 到达：</strong>23:55</p><p><strong>🚌 前往市区：</strong>Flybus 45分钟 或 出租车35分钟</p><p><strong>💰 交通：</strong>¥270（Flybus）或 ¥990（出租车，推荐）</p><div class="popup-highlight">💡 深夜建议打出租车，更安全快捷</div></div>'},
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏨 雷克雅未克</div><div class="popup-body"><p><strong>⏰ 入住：</strong>约02:00</p><p><strong>💤 休息：</strong>早点睡觉</p><div class="popup-highlight">⚠️ 提前告知酒店深夜入住时间</div></div>'}
        ],
        onShow: () => showInfoPanel(1)
    },
    2: {
        routes: [],
        markers: [
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏙️ 雷克雅未克市区观光</div><div class="popup-body"><p><strong>⛪ 哈尔格林姆教堂</strong><br/>登塔¥55，俯瞰全城</p><p><strong>🛍️ Laugavegur购物街</strong><br/>咖啡馆、纪念品</p><p><strong>🌊 老港口</strong><br/>Harpa音乐厅</p><p><strong>🛒 Bonus超市</strong><br/>采购3天零食水</p><div class="popup-highlight">💡 今晚早睡，明天8:00出发3日团</div></div>'}
        ],
        onShow: () => showInfoPanel(2)
    },
    3: {
        routes: [
            {coords: [locations.reykjavik, locations.thingvellir, locations.bruarfoss, locations.geysir, locations.gullfoss, locations.seljalandsfoss, locations.hotel_dranghlid], color: '#FF6B6B', weight: 4}
        ],
        markers: [
            {pos: locations.thingvellir, icon: attractionIcon, popup: '<div class="popup-header">🌍 辛格韦德利国家公园</div><div class="popup-body"><p><strong>亮点：</strong>世界遗产，两大板块交界</p><p><strong>时间：</strong>09:30-10:30（1小时）</p><p><strong>活动：</strong>步道徒步，观看板块裂缝</p></div>'},
            {pos: locations.bruarfoss, icon: attractionIcon, popup: '<div class="popup-header">💙 布鲁阿尔瀑布</div><div class="popup-body"><p><strong>亮点：</strong>冰岛最蓝的瀑布</p><p><strong>时间：</strong>11:00-11:30（30分钟）</p><p><strong>特色：</strong>宝石蓝色水流</p></div>'},
            {pos: locations.geysir, icon: attractionIcon, popup: '<div class="popup-header">💨 间歇泉区</div><div class="popup-body"><p><strong>亮点：</strong>Strokkur间歇泉</p><p><strong>时间：</strong>12:00-12:45（45分钟）</p><p><strong>喷发：</strong>每5-10分钟，高达35米</p><div class="popup-highlight">📸 拍照时注意安全距离</div></div>'},
            {pos: locations.gullfoss, icon: starIcon, popup: '<div class="popup-header">⭐ 黄金瀑布</div><div class="popup-body"><p><strong>亮点：</strong>双层瀑布，震撼壮观</p><p><strong>时间：</strong>13:00-14:00（1小时）</p><p><strong>特色：</strong>阳光下可见彩虹</p><p><strong>落差：</strong>11米+21米</p></div>'},
            {pos: locations.seljalandsfoss, icon: starIcon, popup: '<div class="popup-header">⭐ 塞里雅兰瀑布</div><div class="popup-body"><p><strong>亮点：</strong>可走到瀑布后面</p><p><strong>时间：</strong>15:30-16:30（1小时）</p><p><strong>特色：</strong>独特拍摄角度</p><div class="popup-highlight">⚠️ 必备防水雨衣，会全身湿透</div></div>'},
            {pos: locations.hotel_dranghlid, icon: hotelIcon, popup: '<div class="popup-header">🏨 南海岸酒店</div><div class="popup-body"><p><strong>酒店：</strong>Hotel Drangshlíð</p><p><strong>位置：</strong>南海岸乡村</p><p><strong>晚餐：</strong>部分包含或自费</p><p><strong>晚上：</strong>🌌 追极光（第一晚）</p><div class="popup-highlight">💡 远离光污染，极光观测绝佳地</div></div>'}
        ],
        onShow: () => showInfoPanel(3)
    },
    4: {
        routes: [
            {coords: [locations.hotel_dranghlid, locations.skogafoss, locations.falljokull, locations.hrifunes], color: '#4ECDC4', weight: 4}
        ],
        markers: [
            {pos: locations.skogafoss, icon: attractionIcon, popup: '<div class="popup-header">💦 斯科加瀑布</div><div class="popup-body"><p><strong>高度：</strong>60米</p><p><strong>时间：</strong>08:30-09:30（1小时）</p><p><strong>特色：</strong>可爬430级台阶到顶</p><p><strong>拍摄：</strong>常见彩虹</p></div>'},
            {pos: locations.falljokull, icon: starIcon, popup: '<div class="popup-header">⭐🧊 冰川徒步（核心活动）</div><div class="popup-body"><p><strong>冰川：</strong>Falljökull</p><p><strong>时长：</strong>2-3小时</p><p><strong>装备：</strong>冰爪、头盔、冰镐（提供）</p><p><strong>活动：</strong>冰川行走、探索冰缝</p><div class="popup-highlight">⚠️ 必须穿防水徒步鞋（脚踝支撑）<br/>❄️ 体验蓝冰世界，专业导游讲解</div></div>'},
            {pos: locations.hrifunes, icon: hotelIcon, popup: '<div class="popup-header">🏨 南海岸东部酒店</div><div class="popup-body"><p><strong>酒店：</strong>Hrífunes Inn</p><p><strong>位置：</strong>南海岸东部</p><p><strong>晚上：</strong>🌌 追极光（第二晚）</p><div class="popup-highlight">💡 今天冰川徒步很累，早点休息</div></div>'}
        ],
        onShow: () => showInfoPanel(4)
    },
    5: {
        routes: [
            {coords: [locations.hrifunes, locations.jokulsarlon, locations.diamond_beach, locations.reynisfjara, locations.reykjavik], color: '#4ECDC4', weight: 4}
        ],
        markers: [
            {pos: locations.jokulsarlon, icon: starIcon, popup: '<div class="popup-header">⭐🧊 杰古沙龙冰河湖</div><div class="popup-body"><p><strong>特色：</strong>欧洲最大冰河湖</p><p><strong>时间：</strong>09:00-10:00（1小时）</p><p><strong>景观：</strong>巨大冰山漂浮</p><p><strong>野生动物：</strong>可能看到海豹</p><div class="popup-highlight">📸 摄影天堂，绝美景色</div></div>'},
            {pos: locations.diamond_beach, icon: attractionIcon, popup: '<div class="popup-header">💎 钻石海滩</div><div class="popup-body"><p><strong>特色：</strong>冰块如钻石</p><p><strong>时间：</strong>10:15-10:45（30分钟）</p><p><strong>景观：</strong>冰块散落黑沙滩</p><p><strong>拍摄：</strong>阳光下闪闪发光</p></div>'},
            {pos: locations.ice_cave, icon: starIcon, popup: '<div class="popup-header">⭐❄️ 蓝冰洞（核心活动）</div><div class="popup-body"><p><strong>冰川：</strong>Vatnajökull内部</p><p><strong>时长：</strong>2-3小时</p><p><strong>交通：</strong>Super Jeep前往</p><p><strong>装备：</strong>头盔、冰爪（提供）</p><p><strong>景观：</strong>震撼蓝色冰墙</p><div class="popup-highlight">❄️ 冬季限定（10-3月）<br/>💙 进入冰川内部，水晶般的蓝冰</div></div>'},
            {pos: locations.reynisfjara, icon: attractionIcon, popup: '<div class="popup-header">🖤 雷尼斯黑沙滩</div><div class="popup-body"><p><strong>特色：</strong>黑色火山沙</p><p><strong>时间：</strong>15:30-16:30（1小时）</p><p><strong>景观：</strong>六角玄武岩柱、海中岩柱</p><div class="popup-highlight">⚠️ 危险！Sneaker waves（偷袭浪）<br/>❌ 绝对不能背对大海</div></div>'},
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏨 返回雷克雅未克</div><div class="popup-body"><p><strong>到达时间：</strong>约20:00</p><p><strong>住宿：</strong>市区酒店</p><p><strong>晚餐：</strong>自理</p><div class="popup-highlight">💡 今天行程最长，晚餐建议外卖或超市</div></div>'}
        ],
        onShow: () => showInfoPanel(5)
    },
    6: {
        routes: [
            {coords: [locations.reykjavik, locations.ytri_tunga, locations.budir, locations.arnarstapi, locations.djupalonssandur, locations.londrangar, locations.kirkjufell, locations.reykjavik], color: '#95E1D3', weight: 4}
        ],
        markers: [
            {pos: locations.ytri_tunga, icon: attractionIcon, popup: '<div class="popup-header">🦭 Ytri-Tunga海滩</div><div class="popup-body"><p><strong>特色：</strong>野生海豹栖息地</p><p><strong>时间：</strong>11:00-11:45（45分钟）</p><p><strong>观察：</strong>远距离观看海豹</p><div class="popup-highlight">⚠️ 不要靠近打扰海豹</div></div>'},
            {pos: locations.budir, icon: attractionIcon, popup: '<div class="popup-header">⛪ Búðir黑教堂</div><div class="popup-body"><p><strong>特色：</strong>标志性黑色木教堂</p><p><strong>时间：</strong>12:15-12:45（30分钟）</p><p><strong>背景：</strong>熔岩地和雪山</p><p><strong>拍摄：</strong>网红打卡点</p></div>'},
            {pos: locations.arnarstapi, icon: attractionIcon, popup: '<div class="popup-header">🌊 Arnarstapi渔村</div><div class="popup-body"><p><strong>特色：</strong>天然石拱门</p><p><strong>时间：</strong>13:00-14:00（1小时）</p><p><strong>活动：</strong>海岸步道徒步</p><p><strong>景观：</strong>壮观悬崖，海浪拍岸</p></div>'},
            {pos: locations.djupalonssandur, icon: attractionIcon, popup: '<div class="popup-header">🖤 Djúpalónssandur</div><div class="popup-body"><p><strong>特色：</strong>黑色卵石海滩</p><p><strong>时间：</strong>15:15-16:00（45分钟）</p><p><strong>历史：</strong>1948年沉船遗迹</p><p><strong>文化：</strong>古代举重石（测试渔民力量）</p></div>'},
            {pos: locations.londrangar, icon: attractionIcon, popup: '<div class="popup-header">🗿 Lóndrangar玄武岩柱</div><div class="popup-body"><p><strong>特色：</strong>75米高玄武岩塞</p><p><strong>时间：</strong>16:15-16:45（30分钟）</p><p><strong>地质：</strong>古火山口遗迹</p><p><strong>野生动物：</strong>海鸟栖息地</p></div>'},
            {pos: locations.kirkjufell, icon: starIcon, popup: '<div class="popup-header">⭐🏔️ 教会山（最上镜地标）</div><div class="popup-body"><p><strong>特色：</strong>冰岛地标，最上镜</p><p><strong>时间：</strong>17:30-18:30（1小时）</p><p><strong>著名：</strong>《权力的游戏》取景地</p><p><strong>构图：</strong>瀑布+教会山经典组合</p><div class="popup-highlight">📸 最佳拍摄：下午3-4点（日落前）<br/>💡 多留时间拍照</div></div>'},
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏨 返回雷克雅未克</div><div class="popup-body"><p><strong>到达：</strong>约20:00</p><p><strong>导游：</strong>🗣️ 中文全程讲解</p><p><strong>时长：</strong>12小时</p><div class="popup-highlight">💡 沟通无障碍，体验更佳</div></div>'}
        ],
        onShow: () => showInfoPanel(6)
    },
    7: {
        routes: [
            {coords: [locations.reykjavik, locations.fagradalsfjall, locations.blue_lagoon, locations.reykjavik], color: '#F38181', weight: 4}
        ],
        markers: [
            {pos: locations.fagradalsfjall, icon: starIcon, popup: '<div class="popup-header">⭐🌋 活火山徒步（核心活动）</div><div class="popup-body"><p><strong>火山：</strong>Fagradalsfjall区域</p><p><strong>时长：</strong>往返最多4小时</p><p><strong>地形：</strong>崎岖熔岩地，有坡度</p><p><strong>难度：</strong>中等（需合理体能）</p><p><strong>景观：</strong>2021-2023喷发遗址</p><div class="popup-highlight">❗❗❗严格装备要求：<br/>✓ 防水裤（❌禁穿牛仔裤！）<br/>✓ 防水徒步鞋<br/>✓ 登山杖<br/>✓ 水1L+零食</div></div>'},
            {pos: locations.blue_lagoon, icon: starIcon, popup: '<div class="popup-header">⭐♨️ 蓝湖温泉（核心活动）</div><div class="popup-body"><p><strong>特色：</strong>地热矿物质温泉</p><p><strong>时长：</strong>2.5小时</p><p><strong>套餐：</strong>Comfort（包含）</p><p><strong>包含：</strong>毛巾、硅泥面膜、首杯饮品</p><p><strong>水温：</strong>37-40°C</p><div class="popup-highlight">♨️ 完美放松舒缓徒步疲劳<br/>💙 乳蓝色泉水，对皮肤好<br/>✓ 需自备泳衣</div></div>'},
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏨 返回雷克雅未克</div><div class="popup-body"><p><strong>到达：</strong>约18:00</p><p><strong>今晚任务：</strong>❗打包行李</p><p><strong>明天：</strong>16:20离境</p><div class="popup-highlight">⚠️ 必须今晚打包好所有行李！<br/>💡 检查护照、机票、贵重物品</div></div>'}
        ],
        onShow: () => showInfoPanel(7)
    },
    8: {
        routes: [
            {coords: [locations.reykjavik, locations.keflavik_airport], color: '#667eea', weight: 4, dash: '10, 10'}
        ],
        markers: [
            {pos: locations.reykjavik, icon: hotelIcon, popup: '<div class="popup-header">🏨 雷克雅未克</div><div class="popup-body"><p><strong>上午：</strong>🛍️ 3小时自由购物</p><p><strong>12:30：</strong>返回酒店</p><p><strong>13:00：</strong>出发机场</p><div class="popup-highlight">💡 最后购物机会<br/>⚠️ 退房前检查所有物品</div></div>'},
            {pos: locations.keflavik_airport, icon: attractionIcon, popup: '<div class="popup-header">✈️ 凯夫拉维克机场</div><div class="popup-body"><p><strong>到达：</strong>13:45</p><p><strong>起飞：</strong>16:20（FI454）</p><p><strong>抵达伦敦：</strong>19:30</p><p><strong>免税店：</strong>巧克力、酒更便宜</p><div class="popup-highlight">💰 退税：购物超ISK 6,000可退税<br/>⏰ 提前2.5小时到机场</div></div>'}
        ],
        onShow: () => showInfoPanel(8)
    }
};
