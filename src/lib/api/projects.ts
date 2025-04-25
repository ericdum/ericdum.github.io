export interface Project {
  id: number;
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technicalDetails: string[];
  technologies: string[];
  impact: string;
  relatedSkills: string[];
  images?: string[];
  videos?: string[];
  newsLinks?: { title: string; url: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "基于 HMVC 架构的多语言社交网络平台",
    company: "MatchMove Games Pte Ltd",
    role: "PHP 工程师",
    period: "2011-2012",
    description: "在 2011 年，多语言社交网站和 NoSQL 数据库的应用还处于早期阶段。本项目通过创新的架构设计，实现了高可扩展性和可维护性的系统架构。",
    technicalDetails: [
      "设计并实现了基于 RTL 布局的多语言系统，解决了阿拉伯语等特殊语言的显示问题，这在 2011 年是一个具有挑战性的技术难题",
      "基于 Cassandra 实现了数据分片策略，优化了大规模数据存储和查询性能，这在 NoSQL 数据库应用早期是一个创新性的尝试",
      "应用 HMVC 架构实现了网站模板化，显著提高了开发效率和代码复用率，为快速建站提供了技术基础",
      "开发了基于 base 站的快速建站系统，实现了数据隔离和独立运营，支持快速定制化开发"
    ],
    technologies: ["PHP", "MySQL", "Cassandra", "JavaScript", "HTML/CSS", "Redis", "WebSocket"],
    impact: "系统部署时间从原来的 2 周缩短到 3 天，服务了超过 50 个客户。",
    relatedSkills: [
      "PHP",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "多语言支持",
      "模板化开发"
    ]
  },
  {
    id: 2,
    title: "基于 Chrome Extension 的广告效果实时监测系统",
    company: "心动游戏",
    role: "资深工程师",
    period: "2012",
    description: "在 2012 年，广告平台普遍不提供实时 API 接口。本项目通过创新的技术方案，实现了广告效果的精准监测和优化。",
    technicalDetails: [
      "设计并实现了基于 Chrome Extension 的多平台数据采集方案，在广告平台不提供实时 API 的情况下，实现了广告数据的实时获取",
      "开发了基于 D3.js 的数据可视化系统，支持复杂数据展示，提升了数据分析效率",
      "实现了基于 A/B 测试的广告效果评估模型，加速了广告素材的迭代速度",
      "设计了基于规则引擎的实时监控系统，支持自定义告警规则和通知方式"
    ],
    technologies: ["JavaScript", "Chrome Extension API", "Python", "MySQL", "Redis", "D3.js", "Vue.js"],
    impact: "系统上线后广告成本降低 50%，广告转化率提升 30%，ROI 提升 40%。每年为公司节省了数亿成本。",
    relatedSkills: [
      "JavaScript",
      "Python",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "实时计算",
      "数据可视化"
    ]
  },
  {
    id: 3,
    title: "基于 Puppet 的服务器自动化管理系统",
    company: "心动游戏",
    role: "资深工程师",
    period: "2013",
    description: "在 2013 年，多地机房的高可用部署是一个具有挑战性的技术难题。本项目通过创新的技术方案，实现了服务器的高效管理和运维。",
    technicalDetails: [
      "实现了基于 Puppet 的配置管理，支持配置版本控制和回滚机制",
      "设计了基于分库分表的 MySQL 高可用方案，实现了数据高可用和负载均衡",
      "开发了基于哨兵模式的 Redis 高可用方案，实现了自动故障转移",
      "实现了多级故障检测和自动切换机制，确保了业务连续性"
    ],
    technologies: ["Puppet", "MySQL", "Redis", "Shell", "Python", "Zabbix", "ELK Stack"],
    impact: "系统可用性达到 99.99%，运维效率提升 50%。在一次机房故障中成功实现自动切换，仅损失部分 Redis 缓存数据，对业务无实质影响。",
    relatedSkills: [
      "自动化部署",
      "监控系统",
      "高可用架构",
      "数据备份",
      "SQL",
      "Python"
    ]
  },
  {
    id: 4,
    title: "基于组件化的页面生成器",
    company: "心动游戏",
    role: "资深工程师",
    period: "2012",
    description: "在 2012 年，游戏公司需要大量不同的 landing page。本项目通过创新的技术方案，实现了页面的快速生成和定制。",
    technicalDetails: [
      "实现了基于弹性布局的响应式设计，支持多种页面布局",
      "设计了基于多种认证方式的用户系统，支持手机号、邮箱和第三方登录",
      "开发了基于数据监控的页面效果分析系统，支持转化率分析和用户行为分析",
      "实现了基于拖拽的页面编辑方法，支持组件化系统"
    ],
    technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "Redis", "Vue.js", "Element UI"],
    impact: "设计师可以独立完成页面开发，页面开发周期从原来的 3 天缩短到 1 天。",
    relatedSkills: [
      "PHP",
      "JavaScript",
      "前端开发",
      "后端开发",
      "数据库设计",
      "模板化开发"
    ]
  },
  {
    id: 5,
    title: "基于规则引擎的客服系统",
    company: "心动游戏",
    role: "资深工程师",
    period: "2013",
    description: "在 2013 年，客服系统的智能化是一个重要研究方向。本项目通过创新的技术方案，实现了客服工作的高效管理。",
    technicalDetails: [
      "实现了基于多级工单的流转方法，优化了客服工作流程",
      "设计了基于优先级和 SLA 的工单管理方案，提高了处理效率",
      "开发了基于用户画像的账号关联系统，支持关键信息提取",
      "实现了基于规则引擎的智能分类方法，提高了问题解决速度"
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Redis", "Elasticsearch", "Vue.js", "WebSocket"],
    impact: "工单处理时间平均缩短 30%，客户满意度提升 20%。",
    relatedSkills: [
      "PHP",
      "JavaScript",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "规则引擎"
    ]
  },
  {
    id: 6,
    title: "基于 Node.js 的多人在线互动游戏",
    company: "心动游戏",
    role: "资深工程师",
    period: "2013",
    description: "在 2013 年，Node.js 在游戏开发中的应用还处于早期阶段。本项目通过创新的技术方案，在 24 小时内完成了游戏开发。",
    technicalDetails: [
      "实现了基于 Node.js 的游戏后端，支持高性能的游戏服务器",
      "设计了基于 WebSocket 的实时通讯方案，实现了多人在线互动",
      "开发了基于 HTML5 的游戏前端，实现了流畅的游戏交互",
      "实现了基于 Redis 的游戏数据存储方案，确保了数据安全"
    ],
    technologies: ["Node.js", "WebSocket", "HTML5", "JavaScript", "Canvas", "Redis", "WebRTC"],
    impact: "在 24 小时内完成了游戏开发，展示了快速开发能力。",
    relatedSkills: [
      "Node.js",
      "JavaScript",
      "前端开发",
      "后端开发",
      "实时通讯",
      "游戏开发"
    ]
  },
  {
    id: 7,
    title: "基于 Elasticsearch 的游戏数据分析系统",
    company: "心动游戏",
    role: "资深工程师",
    period: "2013",
    description: "在 2013 年，游戏数据分析是一个重要研究方向。本项目通过创新的技术方案，实现了游戏数据的深度分析。",
    technicalDetails: [
      "实现了基于多源数据的数据采集，确保了数据完整性",
      "设计了基于 Elasticsearch 的数据存储方案，支持海量数据存储和快速查询",
      "开发了基于多维度数据的数据可视化系统，支持自定义报表",
      "实现了基于规则引擎的实时监控方法，支持自定义告警"
    ],
    technologies: ["Elasticsearch", "Python", "JavaScript", "MySQL", "Redis", "D3.js", "Vue.js"],
    impact: "游戏留存率提升 15%，付费转化率提升 20%。",
    relatedSkills: [
      "Python",
      "JavaScript",
      "SQL",
      "数据分析",
      "数据可视化",
      "实时计算"
    ]
  },
  {
    id: 8,
    title: "基于函数计算的高性能流量控制系统",
    company: "阿里巴巴",
    role: "资深开发工程师",
    period: "2014",
    description: "在 2014 年，千万级并发请求的处理是一个具有挑战性的技术难题。本项目通过创新的技术方案，实现了高性能的流量控制系统。",
    technicalDetails: [
      "实现了基于函数计算的服务架构，支持算法代码的快速部署和调用",
      "设计了基于内存的流量控制方案，避免了数据库查询带来的延迟",
      "开发了基于 Zookeeper 的分布式数据同步机制，实现了上百台主机的数据一致性",
      "实现了基于共享内存的进程间通信方法，优化了单机多进程的资源利用"
    ],
    technologies: ["Java", "Zookeeper", "分布式系统", "高并发", "函数计算", "共享内存", "实时计算"],
    impact: "系统成功处理了千万级并发请求，为数据研发和算法研发工程师提供了高效的计算服务。",
    relatedSkills: [
      "Java",
      "分布式系统",
      "高并发",
      "实时计算",
      "系统架构",
      "性能优化"
    ]
  },
  {
    id: 9,
    title: "全景洞察产品优化",
    company: "阿里巴巴",
    role: "资深开发工程师",
    period: "2015",
    description: "全景洞察作为阿里巴巴官方大数据产品，专注于消费者研究。本项目通过创新的技术方案，显著提升了系统性能和用户体验。",
    technicalDetails: [
      "实现了基于全网标签的用户画像生成方法，构建了完整的消费者画像体系",
      "设计了基于细粒度标签的采集方案，支持对消费者人口特征进行精准分析",
      "开发了基于动态加载的数据处理系统，实现了多维度数据展示",
      "实现了基于快速画像的筛选优化方法，支持按 TGI 值对消费者偏好进行排序和筛选"
    ],
    technologies: ["Java", "JavaScript", "大数据", "机器学习", "数据可视化", "用户画像", "实时计算", "D3.js", "Vue.js"],
    impact: "系统用户跳出率显著降低，操作流程更加顺畅。经过 3 个月的优化，系统性能和用户体验得到显著提升。",
    relatedSkills: [
      "Java",
      "JavaScript",
      "大数据",
      "机器学习",
      "数据可视化",
      "用户画像",
      "实时计算",
      "数据分析",
      "营销策略"
    ],
    images:["/images/projects/9/qjdc.png"]
  },
  {
    id: 10,
    title: "DataV 组件开发框架",
    company: "阿里巴巴",
    role: "技术专家",
    period: "2015-2017",
    description: "在 2015-2017 年，大数据可视化是一个重要研究方向。为了简化数据可视化组件的开发过程，我定义了一个新的配置描述语言，通过这个配置描述语言可以生成让前端代码可以识别的组件配置，也可以生成让编辑器可以用于生成编辑控件的配置。",
    technicalDetails: [
      "实现了基于 layout、component、data 三层结构的配置化方案，支持零代码开发",
      "设计了基于配置描述语言的组件开发框架，支持组件配置的自动生成",
      "开发了基于状态机的实时通讯协议，实现了分布式客户端的消息广播和点对点通讯，获得了专利：消息发布方法、装置以及电子设备（CN 201710006699.6），显著提升了多屏联动性能",
      "实现了基于数据代理协议的安全访问方案，支持第三方客户的安全接入。获得了专利：数据代理方法、装置以及电子设备（CN 201710089684.0），实现了数据访问的安全控制。",
      "开发了基于 ETL 的数据处理系统，支持数据格式转换和预处理",
      "实现了基于蓝图的可视化编程系统，支持复杂数据处理流程的配置",
    ],
    technologies: ["JavaScript", "Vue.js", "TypeScript", "Webpack", "Node.js"],
    impact: "显著降低了组件开发门槛，提高了组件开发效率，支持了平台组件的快速扩展。",
    relatedSkills: [
      "JavaScript",
      "前端开发",
      "组件开发",
      "配置系统",
      "编辑器开发"
    ],
    images:["/images/projects/10.1/1.webp","/images/projects/10.1/2.webp","/images/projects/10.1/3.webp"]
  },
  {
    id: 11,
    title: "DataV 数据可视化平台",
    company: "阿里巴巴",
    role: "技术专家",
    period: "2015-2017",
    description: "一方面支持了2015、2016、2017年双11大屏的快速开发，另一方面也成为了阿里巴巴官方大数据产品，专注于消费者研究。",
    technicalDetails: [
      "实现了基于数据可视化的3D地球和高性能的地球渲染",
      "实现了基于地图的\"飞线\"可视化交互和高性能的飞线渲染",
      "实现了城市规模的建筑群三维建模",
      "实现了基于事件的数据可视化大瓶交互，从交易平台落单起全链路数据延迟小于1秒"
    ],
    technologies: ["Java", "JavaScript", "大数据", "数据可视化", "实时通讯", "ETL", "Node.js", "Vue.js"],
    impact: "系统显著提升了数据可视化开发效率，支持了集团大量数据大屏的快速开发。相关技术方案产生了多项专利。",
    relatedSkills: [
      "Java",
      "JavaScript",
      "大数据",
      "数据可视化",
      "实时通讯",
      "ETL",
      "系统架构",
      "性能优化"
    ],
    videos:["/images/projects/datav/IMG_2152.MOV", "/images/projects/datav/IMG_5068.MOV"],
    images:["/images/projects/datav/IMG_5064.JPG","/images/projects/datav/IMG_5069.JPG","/images/projects/datav/IMG_5070.JPG"]
  },
  {
    id: 12,
    title: "物联网设备远程管理平台",
    company: "阿里巴巴",
    role: "架构师 & Moja实验室负责人",
    period: "2017-2019",
    description: "在 2017-2019 年，物联网设备管理是一个重要研究方向。本项目通过创新的技术方案，实现了 Link Market 平台的构建。",
    technicalDetails: [
      "实现了基于一键部署的设备监控方案，支持监控采集服务的快速部署",
      "设计了基于远程连接的服务架构，支持设备的远程 shell 操作",
      "基于 Websocket 的 shell 隧道",
      "实现了基于安全认证的远程访问方案，确保了设备访问安全"
    ],
    technologies: ["Java", "Linux", "物联网", "远程运维", "设备管理", "实时监控", "安全认证"],
    impact: "系统显著提升了设备管理效率，支持了 Link Market 平台的广泛使用。相关技术方案被多个智能家居品牌商和制造厂采用。",
    relatedSkills: [
      "Java",
      "Linux",
      "物联网",
      "远程运维",
      "设备管理",
      "实时监控",
      "安全认证",
      "系统架构"
    ],
    videos:["/images/projects/12/GXIC.m4v","/images/projects/12/IMG_2658.m4v"],
    images:["/images/projects/12/IMG_9430.jpg"]
  },
  {
    id: 13,
    title: "基于多模态融合感知技术和大数据平台的数字机坪管理系统",
    company: "阿里巴巴",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    period: "2019-2023",
    description: "为了弥补现有场面监视系统昂贵、覆盖率不够高、功能单一的问题，我提出使用摄像头作为通用传感器，识别飞机位置、车辆位置、障碍物、桩桶摆放、人员着装规范等对象，结合对于航空器过站保障流程的理解，设计出了数字机坪产品。",
    technicalDetails: [
      "通过CV进行目标分类、目标跟踪，并将所有目标进行id对齐和坐标转换进行跨摄像头跟踪",
      "实现了异构设备的融合跟踪，对飞机起降、滑行和停机保障过程的全面路径跟踪",
      "支持视频关联查询，在停机过程中识别行李车、餐车、推车、传送带车等特种车辆",
      "实现了对轮档、桩桶、人员等小目标的识别，进行对保障过程的数字化",
      "通过大数据平台进行实时ETL，将视频流数据转换为结构化数据，将多平台数据融合起来大幅提高了交互效率"
    ],
    technologies: ["计算机视觉", "目标跟踪", "多源数据融合", "实时计算", "视频分析", "物联网"],
    impact: "实现了各个阶段的监控和预警，降低了管理人员的工作量，提升了工作体验，支持了对于保障过程更好的质量控制和管理。",
    relatedSkills: [
      "计算机视觉",
      "目标跟踪",
      "多源数据融合",
      "实时计算",
      "视频分析",
      "物联网",
      "系统架构"
    ],
    images: ["/images/projects/13/cover.jpg", "/images/projects/13/team.jpg"],
    videos: ["/images/projects/13/demo.mov"]
  },
  {
    id: 14,
    title: "基于流数据平台和融合感知的停机入位系统",
    company: "阿里巴巴",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    period: "2019-2023",
    description: "通过对飞机的跟踪，解决了传统停机设备需要人操作的问题（因为激光雷达不能一直开机）。在广州白云机场部署了全国第一个基于视觉的停机入位、出位识别以及联动服务车道红绿灯的系统。",
    technicalDetails: [
      "实现了基于视觉的停机入位和出位识别系统，区别于放置在停机位的专用感知设备",
      "基于CV的跨摄像头目标跟踪",
      "通过消息中间件转发到物联网服务",
      "实现了通过PLC控制红绿灯的自动化系统"
    ],
    technologies: ["计算机视觉", "物联网", "消息中间件", "PLC控制", "实时计算"],
    impact: "在广州白云机场成功部署了全国第一个基于视觉的停机入位系统，实现了人工智能、大数据、物联网的复杂应用。",
    relatedSkills: [
      "计算机视觉",
      "物联网",
      "消息中间件",
      "PLC控制",
      "实时计算",
      "系统集成"
    ],
    newsLinks: [
      {
        title: "白云机场推出国内首个飞机泊位警示系统",
        url: "http://zn.caac.gov.cn/ZN_XXGK/ZN_HYDT/202110/t20211014_209614.html"
      }
    ],
    videos: ["/images/projects/14/cover.mov"],
    images: [
      "/images/projects/14/cover.png",
      "/images/projects/14/cover2.jpg",
    ]
  },
  {
    id: 15,
    title: "基于AR技术的虚拟远程塔台空中交通管制系统",
    company: "阿里巴巴",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    period: "2019-2023",
    description: "通过对AR技术的融合、结合对机场管制语音通话的识别，我们实现了基于 hololens 面向空中交通管制人员的虚拟远程塔台服务。",
    technicalDetails: [
      "实现了基于AR技术的虚拟远程塔台服务",
      "基于航空器仿真计算实现训练模拟",
      "通过视觉、雷达等多模态数据进行位置融合实现数字孪生",
      "通过预测算法进行数据修正"
    ],
    technologies: ["AR技术", "语音识别", "计算机视觉", "实时计算", "3D建模", "仿真系统"],
    impact: "为空中交通管制人员提供了更直观、高效的管制工具，支持了机场运营的智能化升级。",
    relatedSkills: [
      "AR技术",
      "语音识别",
      "计算机视觉",
      "实时计算",
      "3D建模",
      "仿真系统",
      "系统架构"
    ],
    videos: ["/images/projects/15/ar.mov", "/images/projects/15/tower2.mov"]
  },
  {
    id: 16,
    title: "基于航班仿真系统和TTS的智能空中交通管制训练系统",
    company: "阿里巴巴",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    period: "2019-2023",
    description: "通过对管制技术的业务洞察，发现对管制进行识别是不必要的，反而可以突破思维惯性，改变管制员通过语音进行管制的交互模式，而改用便捷、准确的计算机交互操作。",
    technicalDetails: [
      "开发了基于点击机位、滑行道的交互系统",
      "实现了模糊和路径规划算法来预测最可能的指挥线路",
      "TTS生成指挥指令和语音指令",
      "基于航班仿真的航班运行"
    ],
    technologies: ["路径规划", "语音合成", "实时计算", "人机交互", "数据通信"],
    impact: "避免了因为口语而发生的各类问题，提高了管制效率和准确性。",
    relatedSkills: [
      "路径规划",
      "语音合成",
      "实时计算",
      "人机交互",
      "数据通信",
      "系统架构"
    ],
    images: ["/images/projects/16/cover.png","/images/projects/16/show.jpg"],
  },
  {
    id: 17,
    title: "基于搜索数据和航班排班数据的航空公司业务预测服务",
    company: "阿里巴巴",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    period: "2019-2023",
    description: "在新冠疫情期间，航空公司损失惨重，从公益事业的角度出发，为了帮助航空公司度过难关。我与飞猪合作，基于他们的旅行搜索数据与成交数据训练的算法预测出行热度。",
    technicalDetails: [
      "基于飞猪旅行搜索数据与成交数据训练算法",
      "实现了出行热度预测模型",
      "为航空公司提供业务和排班的预测管理服务",
      "支持航空公司进行业务决策"
    ],
    technologies: ["机器学习", "数据分析", "预测模型", "实时计算", "数据可视化"],
    impact: "帮助航空公司在疫情期间更好地进行业务规划和排班管理，降低了运营风险。",
    relatedSkills: [
      "机器学习",
      "数据分析",
      "预测模型",
      "实时计算",
      "数据可视化",
      "系统架构"
    ],
    newsLinks: [
      {
        title: "科技抗疫 阿里云、千方科技助力民航疫情防控",
        url: "http://caacnews.com.cn/1/4/202003/t20200304_1294451.html"
      }
    ],
    images: [
      "/images/projects/recovery/1.png",
      "/images/projects/recovery/2.png",
      "/images/projects/recovery/3.png",
      "/images/projects/recovery/4.png",
      "/images/projects/recovery/5.png",
      "/images/projects/recovery/6.png",
      "/images/projects/recovery/7.png"
    ]
  }
];

export async function getProjects() {
  return projects;
} 