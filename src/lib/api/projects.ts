export interface Project {
  id: number;
  title: string;
  titleEn: string;
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  period: string;
  description: string;
  descriptionEn: string;
  technicalDetails: string[];
  technicalDetailsEn: string[];
  technologies: string[];
  technologiesEn: string[];
  impact: string;
  impactEn: string;
  relatedSkills: string[];
  relatedSkillsEn: string[];
  images?: string[];
  videos?: string[];
  newsLinks?: { title: string; titleEn: string; url: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "基于 HMVC 架构的多语言社交网络平台",
    titleEn: "Multi-language Social Network Platform Based on HMVC Architecture",
    company: "MatchMove Games Pte Ltd",
    companyEn: "MatchMove Games Pte Ltd",
    role: "PHP 工程师",
    roleEn: "PHP Engineer",
    period: "2011-2012",
    description: "在 2011 年，多语言社交网站和 NoSQL 数据库的应用还处于早期阶段。本项目通过创新的架构设计，实现了高可扩展性和可维护性的系统架构。",
    descriptionEn: "In 2011, multi-language social websites and NoSQL database applications were in their early stages. This project achieved a highly scalable and maintainable system architecture through innovative design.",
    technicalDetails: [
      "设计并实现了基于 RTL 布局的多语言系统，解决了阿拉伯语等特殊语言的显示问题，这在 2011 年是一个具有挑战性的技术难题",
      "基于 Cassandra 实现了数据分片策略，优化了大规模数据存储和查询性能，这在 NoSQL 数据库应用早期是一个创新性的尝试",
      "应用 HMVC 架构实现了网站模板化，显著提高了开发效率和代码复用率，为快速建站提供了技术基础",
      "开发了基于 base 站的快速建站系统，实现了数据隔离和独立运营，支持快速定制化开发"
    ],
    technicalDetailsEn: [
      "Designed and implemented a multi-language system based on RTL layout, solving display issues for special languages like Arabic, which was a challenging technical problem in 2011",
      "Implemented data sharding strategy based on Cassandra, optimizing large-scale data storage and query performance, an innovative attempt in early NoSQL database applications",
      "Applied HMVC architecture to achieve website templating, significantly improving development efficiency and code reusability, providing technical foundation for rapid site building",
      "Developed a rapid site building system based on base stations, achieving data isolation and independent operation, supporting rapid customization"
    ],
    technologies: ["PHP", "MySQL", "Cassandra", "JavaScript", "HTML/CSS", "Redis", "WebSocket"],
    technologiesEn: ["PHP", "MySQL", "Cassandra", "JavaScript", "HTML/CSS", "Redis", "WebSocket"],
    impact: "系统部署时间从原来的 2 周缩短到 3 天，服务了超过 50 个客户。",
    impactEn: "System deployment time was reduced from 2 weeks to 3 days, serving over 50 clients.",
    relatedSkills: [
      "PHP",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "多语言支持",
      "模板化开发"
    ],
    relatedSkillsEn: [
      "PHP",
      "SQL",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Multi-language Support",
      "Templating Development"
    ]
  },
  {
    id: 2,
    title: "基于 Chrome Extension 的广告效果实时监测系统",
    titleEn: "Real-time Advertising Effect Monitoring System Based on Chrome Extension",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2012",
    description: "在 2012 年，广告平台普遍不提供实时 API 接口。本项目通过创新的技术方案，实现了广告效果的精准监测和优化。",
    descriptionEn: "In 2012, advertising platforms generally did not provide real-time API interfaces. This project achieved precise monitoring and optimization of advertising effects through innovative technical solutions.",
    technicalDetails: [
      "设计并实现了基于 Chrome Extension 的多平台数据采集方案，在广告平台不提供实时 API 的情况下，实现了广告数据的实时获取",
      "开发了基于 D3.js 的数据可视化系统，支持复杂数据展示，提升了数据分析效率",
      "实现了基于 A/B 测试的广告效果评估模型，加速了广告素材的迭代速度",
      "设计了基于规则引擎的实时监控系统，支持自定义告警规则和通知方式"
    ],
    technicalDetailsEn: [
      "Designed and implemented a multi-platform data collection solution based on Chrome Extension, achieving real-time advertising data acquisition without real-time API support",
      "Developed a data visualization system based on D3.js, supporting complex data display and improving data analysis efficiency",
      "Implemented an advertising effect evaluation model based on A/B testing, accelerating the iteration speed of advertising materials",
      "Designed a real-time monitoring system based on rule engine, supporting customizable alert rules and notification methods"
    ],
    technologies: ["JavaScript", "Chrome Extension API", "Python", "MySQL", "Redis", "D3.js", "Vue.js"],
    technologiesEn: ["JavaScript", "Chrome Extension API", "Python", "MySQL", "Redis", "D3.js", "Vue.js"],
    impact: "系统上线后广告成本降低 50%，广告转化率提升 30%，ROI 提升 40%。每年为公司节省了数亿成本。",
    impactEn: "After system launch, advertising costs decreased by 50%, conversion rate increased by 30%, and ROI improved by 40%. Saved hundreds of millions in costs annually for the company.",
    relatedSkills: [
      "JavaScript",
      "Python",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "实时计算",
      "数据可视化"
    ],
    relatedSkillsEn: [
      "JavaScript",
      "Python",
      "SQL",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Real-time Computing",
      "Data Visualization"
    ]
  },
  {
    id: 3,
    title: "基于 Puppet 的服务器自动化管理系统",
    titleEn: "Server Automation Management System Based on Puppet",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2013",
    description: "在 2013 年，多地机房的高可用部署是一个具有挑战性的技术难题。本项目通过创新的技术方案，实现了服务器的高效管理和运维。",
    descriptionEn: "In 2013, high-availability deployment across multiple data centers was a challenging technical problem. This project achieved efficient server management and operations through innovative technical solutions.",
    technicalDetails: [
      "实现了基于 Puppet 的配置管理，支持配置版本控制和回滚机制",
      "设计了基于分库分表的 MySQL 高可用方案，实现了数据高可用和负载均衡",
      "开发了基于哨兵模式的 Redis 高可用方案，实现了自动故障转移",
      "实现了多级故障检测和自动切换机制，确保了业务连续性"
    ],
    technicalDetailsEn: [
      "Implemented configuration management based on Puppet, supporting version control and rollback mechanisms",
      "Designed a MySQL high-availability solution based on database and table sharding, achieving data high availability and load balancing",
      "Developed a Redis high-availability solution based on sentinel mode, achieving automatic failover",
      "Implemented multi-level fault detection and automatic switching mechanisms, ensuring business continuity"
    ],
    technologies: ["Puppet", "MySQL", "Redis", "Shell", "Python", "Zabbix", "ELK Stack"],
    technologiesEn: ["Puppet", "MySQL", "Redis", "Shell", "Python", "Zabbix", "ELK Stack"],
    impact: "系统可用性达到 99.99%，运维效率提升 50%。在一次机房故障中成功实现自动切换，仅损失部分 Redis 缓存数据，对业务无实质影响。",
    impactEn: "System availability reached 99.99%, operational efficiency improved by 50%. Successfully achieved automatic switching during a data center failure, with only partial Redis cache data loss and no substantial impact on business.",
    relatedSkills: [
      "自动化部署",
      "监控系统",
      "高可用架构",
      "数据备份",
      "SQL",
      "Python"
    ],
    relatedSkillsEn: [
      "Automated Deployment",
      "Monitoring Systems",
      "High Availability Architecture",
      "Data Backup",
      "SQL",
      "Python"
    ]
  },
  {
    id: 4,
    title: "基于组件化的页面生成器",
    titleEn: "Component-based Page Generator",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2012",
    description: "在 2012 年，游戏公司需要大量不同的 landing page。本项目通过创新的技术方案，实现了页面的快速生成和定制。",
    descriptionEn: "In 2012, game companies needed numerous different landing pages. This project achieved rapid page generation and customization through innovative technical solutions.",
    technicalDetails: [
      "实现了基于弹性布局的响应式设计，支持多种页面布局",
      "设计了基于多种认证方式的用户系统，支持手机号、邮箱和第三方登录",
      "开发了基于数据监控的页面效果分析系统，支持转化率分析和用户行为分析",
      "实现了基于拖拽的页面编辑方法，支持组件化系统"
    ],
    technicalDetailsEn: [
      "Implemented responsive design based on flexible layout, supporting multiple page layouts",
      "Designed a user system based on multiple authentication methods, supporting phone number, email, and third-party login",
      "Developed a page effect analysis system based on data monitoring, supporting conversion rate analysis and user behavior analysis",
      "Implemented drag-and-drop page editing method, supporting component-based system"
    ],
    technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "Redis", "Vue.js", "Element UI"],
    technologiesEn: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "Redis", "Vue.js", "Element UI"],
    impact: "设计师可以独立完成页面开发，页面开发周期从原来的 3 天缩短到 1 天。",
    impactEn: "Designers could independently complete page development, reducing the development cycle from 3 days to 1 day.",
    relatedSkills: [
      "PHP",
      "JavaScript",
      "前端开发",
      "后端开发",
      "数据库设计",
      "模板化开发"
    ],
    relatedSkillsEn: [
      "PHP",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Templating Development"
    ]
  },
  {
    id: 5,
    title: "基于规则引擎的客服系统",
    titleEn: "Customer Service System Based on Rule Engine",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2013",
    description: "在 2013 年，客服系统的智能化是一个重要研究方向。本项目通过创新的技术方案，实现了客服工作的高效管理。",
    descriptionEn: "In 2013, intelligent customer service systems were an important research direction. This project achieved efficient management of customer service work through innovative technical solutions.",
    technicalDetails: [
      "实现了基于多级工单的流转方法，优化了客服工作流程",
      "设计了基于优先级和 SLA 的工单管理方案，提高了处理效率",
      "开发了基于用户画像的账号关联系统，支持关键信息提取",
      "实现了基于规则引擎的智能分类方法，提高了问题解决速度"
    ],
    technicalDetailsEn: [
      "Implemented a workflow method based on multi-level tickets, optimizing customer service workflow",
      "Designed a ticket management solution based on priority and SLA, improving processing efficiency",
      "Developed an account association system based on user profiles, supporting key information extraction",
      "Implemented intelligent classification method based on rule engine, improving problem resolution speed"
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Redis", "Elasticsearch", "Vue.js", "WebSocket"],
    technologiesEn: ["PHP", "JavaScript", "MySQL", "Redis", "Elasticsearch", "Vue.js", "WebSocket"],
    impact: "工单处理时间平均缩短 30%，客户满意度提升 20%。",
    impactEn: "Ticket processing time was reduced by 30% on average, and customer satisfaction increased by 20%.",
    relatedSkills: [
      "PHP",
      "JavaScript",
      "SQL",
      "前端开发",
      "后端开发",
      "数据库设计",
      "规则引擎"
    ],
    relatedSkillsEn: [
      "PHP",
      "JavaScript",
      "SQL",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Rule Engine"
    ]
  },
  {
    id: 6,
    title: "基于 Node.js 的多人在线互动游戏",
    titleEn: "Multiplayer Online Interactive Game Based on Node.js",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2013",
    description: "在 2013 年，Node.js 在游戏开发中的应用还处于早期阶段。本项目通过创新的技术方案，在 24 小时内完成了游戏开发。",
    descriptionEn: "In 2013, Node.js applications in game development were in their early stages. This project completed game development within 24 hours through innovative technical solutions.",
    technicalDetails: [
      "实现了基于 Node.js 的游戏后端，支持高性能的游戏服务器",
      "设计了基于 WebSocket 的实时通讯方案，实现了多人在线互动",
      "开发了基于 HTML5 的游戏前端，实现了流畅的游戏交互",
      "实现了基于 Redis 的游戏数据存储方案，确保了数据安全"
    ],
    technicalDetailsEn: [
      "Implemented game backend based on Node.js, supporting high-performance game servers",
      "Designed real-time communication solution based on WebSocket, achieving multiplayer online interaction",
      "Developed game frontend based on HTML5, achieving smooth game interaction",
      "Implemented game data storage solution based on Redis, ensuring data security"
    ],
    technologies: ["Node.js", "WebSocket", "HTML5", "JavaScript", "Canvas", "Redis", "WebRTC"],
    technologiesEn: ["Node.js", "WebSocket", "HTML5", "JavaScript", "Canvas", "Redis", "WebRTC"],
    impact: "在 24 小时内完成了游戏开发，展示了快速开发能力。",
    impactEn: "Completed game development within 24 hours, demonstrating rapid development capabilities.",
    relatedSkills: [
      "Node.js",
      "JavaScript",
      "前端开发",
      "后端开发",
      "实时通讯",
      "游戏开发"
    ],
    relatedSkillsEn: [
      "Node.js",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "Real-time Communication",
      "Game Development"
    ]
  },
  {
    id: 7,
    title: "基于 Elasticsearch 的游戏数据分析系统",
    titleEn: "Game Data Analysis System Based on Elasticsearch",
    company: "心动游戏",
    companyEn: "XD Company",
    role: "资深工程师",
    roleEn: "Senior Engineer",
    period: "2013",
    description: "在 2013 年，游戏数据分析是一个重要研究方向。本项目通过创新的技术方案，实现了游戏数据的深度分析。",
    descriptionEn: "In 2013, game data analysis was an important research direction. This project achieved in-depth analysis of game data through innovative technical solutions.",
    technicalDetails: [
      "实现了基于多源数据的数据采集，确保了数据完整性",
      "设计了基于 Elasticsearch 的数据存储方案，支持海量数据存储和快速查询",
      "开发了基于多维度数据的数据可视化系统，支持自定义报表",
      "实现了基于规则引擎的实时监控方法，支持自定义告警"
    ],
    technicalDetailsEn: [
      "Implemented data collection based on multiple sources, ensuring data completeness",
      "Designed data storage solution based on Elasticsearch, supporting massive data storage and fast querying",
      "Developed data visualization system based on multi-dimensional data, supporting custom reports",
      "Implemented real-time monitoring method based on rule engine, supporting custom alerts"
    ],
    technologies: ["Elasticsearch", "Python", "JavaScript", "MySQL", "Redis", "D3.js", "Vue.js"],
    technologiesEn: ["Elasticsearch", "Python", "JavaScript", "MySQL", "Redis", "D3.js", "Vue.js"],
    impact: "游戏留存率提升 15%，付费转化率提升 20%。",
    impactEn: "Game retention rate increased by 15%, and payment conversion rate increased by 20%.",
    relatedSkills: [
      "Python",
      "JavaScript",
      "SQL",
      "数据分析",
      "数据可视化",
      "实时计算"
    ],
    relatedSkillsEn: [
      "Python",
      "JavaScript",
      "SQL",
      "Data Analysis",
      "Data Visualization",
      "Real-time Computing"
    ]
  },
  {
    id: 8,
    title: "基于函数计算的高性能流量控制系统",
    titleEn: "High-performance Traffic Control System Based on Function Computing",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "资深开发工程师",
    roleEn: "Senior Development Engineer",
    period: "2014",
    description: "在 2014 年，千万级并发请求的处理是一个具有挑战性的技术难题。本项目通过创新的技术方案，实现了高性能的流量控制系统。",
    descriptionEn: "In 2014, handling millions of concurrent requests was a challenging technical problem. This project achieved a high-performance traffic control system through innovative technical solutions.",
    technicalDetails: [
      "实现了基于函数计算的服务架构，支持算法代码的快速部署和调用",
      "设计了基于内存的流量控制方案，避免了数据库查询带来的延迟",
      "开发了基于 Zookeeper 的分布式数据同步机制，实现了上百台主机的数据一致性",
      "实现了基于共享内存的进程间通信方法，优化了单机多进程的资源利用"
    ],
    technicalDetailsEn: [
      "Implemented service architecture based on function computing, supporting rapid deployment and invocation of algorithm code",
      "Designed traffic control solution based on memory, avoiding delays from database queries",
      "Developed distributed data synchronization mechanism based on Zookeeper, achieving data consistency across hundreds of hosts",
      "Implemented inter-process communication method based on shared memory, optimizing resource utilization for multi-process single machine"
    ],
    technologies: ["Java", "Zookeeper", "分布式系统", "高并发", "函数计算", "共享内存", "实时计算"],
    technologiesEn: ["Java", "Zookeeper", "Distributed Systems", "High Concurrency", "Function Computing", "Shared Memory", "Real-time Computing"],
    impact: "系统成功处理了千万级并发请求，为数据研发和算法研发工程师提供了高效的计算服务。",
    impactEn: "The system successfully handled millions of concurrent requests, providing efficient computing services for data and algorithm development engineers.",
    relatedSkills: [
      "Java",
      "分布式系统",
      "高并发",
      "实时计算",
      "系统架构",
      "性能优化"
    ],
    relatedSkillsEn: [
      "Java",
      "Distributed Systems",
      "High Concurrency",
      "Real-time Computing",
      "System Architecture",
      "Performance Optimization"
    ]
  },
  {
    id: 9,
    title: "全景洞察产品优化",
    titleEn: "Panoramic Insight Product Optimization",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "资深开发工程师",
    roleEn: "Senior Development Engineer",
    period: "2015",
    description: "全景洞察作为阿里巴巴官方大数据产品，专注于消费者研究。本项目通过创新的技术方案，显著提升了系统性能和用户体验。",
    descriptionEn: "As Alibaba's official big data product, Panoramic Insight focuses on consumer research. This project significantly improved system performance and user experience through innovative technical solutions.",
    technicalDetails: [
      "实现了基于全网标签的用户画像生成方法，构建了完整的消费者画像体系",
      "设计了基于细粒度标签的采集方案，支持对消费者人口特征进行精准分析",
      "开发了基于动态加载的数据处理系统，实现了多维度数据展示",
      "实现了基于快速画像的筛选优化方法，支持按 TGI 值对消费者偏好进行排序和筛选"
    ],
    technicalDetailsEn: [
      "Implemented user profile generation method based on network-wide tags, building a complete consumer profile system",
      "Designed collection solution based on fine-grained tags, supporting precise analysis of consumer demographic characteristics",
      "Developed data processing system based on dynamic loading, achieving multi-dimensional data display",
      "Implemented screening optimization method based on rapid profiling, supporting sorting and filtering of consumer preferences by TGI value"
    ],
    technologies: ["Java", "JavaScript", "大数据", "机器学习", "数据可视化", "用户画像", "实时计算", "D3.js", "Vue.js"],
    technologiesEn: ["Java", "JavaScript", "Big Data", "Machine Learning", "Data Visualization", "User Profiling", "Real-time Computing", "D3.js", "Vue.js"],
    impact: "系统用户跳出率显著降低，操作流程更加顺畅。经过 3 个月的优化，系统性能和用户体验得到显著提升。",
    impactEn: "System user bounce rate significantly decreased, and operation process became smoother. After 3 months of optimization, system performance and user experience were significantly improved.",
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
    relatedSkillsEn: [
      "Java",
      "JavaScript",
      "Big Data",
      "Machine Learning",
      "Data Visualization",
      "User Profiling",
      "Real-time Computing",
      "Data Analysis",
      "Marketing Strategy"
    ],
    images:["https://res.mojalab.cn/images/projects/9/qjdc.png"]
  },
  {
    id: 10,
    title: "DataV 数据可视化平台",
    titleEn: "DataV Data Visualization Platform",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "技术专家",
    roleEn: "Technical Expert",
    period: "2015-2017",
    description: "在 2015-2017 年，大数据可视化是一个重要研究方向。为了简化数据可视化组件的开发过程，我定义了一个新的配置描述语言，通过这个配置描述语言可以生成让前端代码可以识别的组件配置，也可以生成让编辑器可以用于生成编辑控件的配置。",
    descriptionEn: "In 2015-2017, big data visualization was an important research direction. To simplify the development process of data visualization components, I defined a new configuration description language that could generate component configurations recognizable by frontend code and configurations for editors to generate editing controls.",
    technicalDetails: [
      "实现了基于 layout、component、data 三层结构的配置化方案，支持零代码开发",
      "设计了基于配置描述语言的组件开发框架，支持组件配置的自动生成",
      "开发了基于状态机的实时通讯协议，实现了分布式客户端的消息广播和点对点通讯，获得了专利：消息发布方法、装置以及电子设备（CN 201710006699.6），显著提升了多屏联动性能",
      "实现了基于数据代理协议的安全访问方案，支持第三方客户的安全接入。获得了专利：数据代理方法、装置以及电子设备（CN 201710089684.0），实现了数据访问的安全控制。",
      "开发了基于 ETL 的数据处理系统，支持数据格式转换和预处理",
      "实现了基于蓝图的可视化编程系统，支持复杂数据处理流程的配置",
    ],
    technicalDetailsEn: [
      "Implemented configuration solution based on three-layer structure of layout, component, and data, supporting zero-code development",
      "Designed component development framework based on configuration description language, supporting automatic generation of component configurations",
      "Developed real-time communication protocol based on state machine, achieving message broadcasting and point-to-point communication for distributed clients, obtained patent: Message Publishing Method, Device and Electronic Equipment (CN 201710006699.6), significantly improving multi-screen linkage performance",
      "Implemented secure access solution based on data proxy protocol, supporting secure access for third-party clients. Obtained patent: Data Proxy Method, Device and Electronic Equipment (CN 201710089684.0), achieving secure control of data access.",
      "Developed data processing system based on ETL, supporting data format conversion and preprocessing",
      "Implemented visual programming system based on blueprints, supporting configuration of complex data processing workflows",
    ],
    technologies: ["JavaScript", "Vue.js", "TypeScript", "Webpack", "Node.js"],
    technologiesEn: ["JavaScript", "Vue.js", "TypeScript", "Webpack", "Node.js"],
    impact: "显著降低了组件开发门槛，提高了组件开发效率，支持了平台组件的快速扩展。",
    impactEn: "Significantly lowered the threshold for component development, improved component development efficiency, and supported rapid expansion of platform components.",
    relatedSkills: [
      "JavaScript",
      "前端开发",
      "组件开发",
      "配置系统",
      "编辑器开发"
    ],
    relatedSkillsEn: [
      "JavaScript",
      "Frontend Development",
      "Component Development",
      "Configuration System",
      "Editor Development"
    ],
    images:["https://res.mojalab.cn/images/projects/10.1/1.webp","https://res.mojalab.cn/images/projects/10.1/2.webp","https://res.mojalab.cn/images/projects/10.1/3.webp"]
  },
  {
    id: 11,
    title: "基于 DataV 的阿里巴巴集团双十一数据大屏项目",
    titleEn: "Based on DataV, Alibaba Group's Double 11 Data Screen Projects",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "技术专家",
    roleEn: "Technical Expert",
    period: "2015-2017",
    description: "一方面支持了2015、2016、2017年双11大屏的快速开发，另一方面也成为了阿里巴巴官方大数据产品，专注于消费者研究。",
    descriptionEn: "On one hand, it supported the rapid development of Double 11 big screens in 2015, 2016, and 2017, and on the other hand, it became Alibaba's official big data product, focusing on consumer research.",
    technicalDetails: [
      "实现了基于数据可视化的3D地球和高性能的地球渲染",
      "实现了基于地图的\"飞线\"可视化交互和高性能的飞线渲染",
      "实现了城市规模的建筑群三维建模",
      "实现了基于事件的数据可视化大瓶交互，从交易平台落单起全链路数据延迟小于1秒"
    ],
    technicalDetailsEn: [
      "Implemented 3D Earth and high-performance Earth rendering based on data visualization",
      "Implemented map-based \"flight line\" visualization interaction and high-performance flight line rendering",
      "Implemented three-dimensional modeling of city-scale building clusters",
      "Implemented event-based data visualization big screen interaction, with end-to-end data delay less than 1 second from transaction platform order placement"
    ],
    technologies: ["Java", "JavaScript", "大数据", "数据可视化", "实时通讯", "ETL", "Node.js", "Vue.js"],
    technologiesEn: ["Java", "JavaScript", "Big Data", "Data Visualization", "Real-time Communication", "ETL", "Node.js", "Vue.js"],
    impact: "系统显著提升了数据可视化开发效率，支持了集团大量数据大屏的快速开发。相关技术方案产生了多项专利。",
    impactEn: "The system significantly improved data visualization development efficiency, supporting rapid development of numerous data screens for the group. Related technical solutions generated multiple patents.",
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
    relatedSkillsEn: [
      "Java",
      "JavaScript",
      "Big Data",
      "Data Visualization",
      "Real-time Communication",
      "ETL",
      "System Architecture",
      "Performance Optimization"
    ],
    videos:["https://res.mojalab.cn/images/projects/datav/IMG_2152.mp4", "https://res.mojalab.cn/images/projects/datav/IMG_5068.mp4"],
    images:["https://res.mojalab.cn/images/projects/datav/IMG_5064.JPG","https://res.mojalab.cn/images/projects/datav/IMG_5069.JPG","https://res.mojalab.cn/images/projects/datav/IMG_5070.JPG"]
  },
  {
    id: 12,
    title: "物联网设备远程管理平台",
    titleEn: "IoT Device Remote Management Platform",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "架构师 & Moja实验室负责人",
    roleEn: "Architect & Moja Lab Director",
    period: "2017-2019",
    description: "在 2017-2019 年，物联网设备管理是一个重要研究方向。本项目通过创新的技术方案，实现了 Link Market 平台的构建。",
    descriptionEn: "In 2017-2019, IoT device management was an important research direction. This project achieved the construction of the Link Market platform through innovative technical solutions.",
    technicalDetails: [
      "实现了基于一键部署的设备监控方案，支持监控采集服务的快速部署",
      "设计了基于远程连接的服务架构，支持设备的远程 shell 操作",
      "基于 Websocket 的 shell 隧道",
      "实现了基于安全认证的远程访问方案，确保了设备访问安全"
    ],
    technicalDetailsEn: [
      "Implemented device monitoring solution based on one-click deployment, supporting rapid deployment of monitoring collection services",
      "Designed service architecture based on remote connection, supporting remote shell operations for devices",
      "Shell tunnel based on Websocket",
      "Implemented remote access solution based on security authentication, ensuring device access security"
    ],
    technologies: ["Java", "Linux", "物联网", "远程运维", "设备管理", "实时监控", "安全认证"],
    technologiesEn: ["Java", "Linux", "IoT", "Remote Operations", "Device Management", "Real-time Monitoring", "Security Authentication"],
    impact: "系统显著提升了设备管理效率，支持了 Link Market 平台的广泛使用。相关技术方案被多个智能家居品牌商和制造厂采用。",
    impactEn: "The system significantly improved device management efficiency, supporting widespread use of the Link Market platform. Related technical solutions were adopted by multiple smart home brands and manufacturers.",
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
    relatedSkillsEn: [
      "Java",
      "Linux",
      "IoT",
      "Remote Operations",
      "Device Management",
      "Real-time Monitoring",
      "Security Authentication",
      "System Architecture"
    ],
    videos:["https://res.mojalab.cn/images/projects/12/GXIC.mp4","https://res.mojalab.cn/images/projects/12/IMG_2658.mp4"],
    images:["https://res.mojalab.cn/images/projects/12/IMG_9430.jpg"]
  },
  {
    id: 13,
    title: "基于多模态融合感知技术和大数据平台的数字机坪管理系统",
    titleEn: "Digital Apron Management System Based on Multi-modal Fusion Perception Technology and Big Data Platform",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2019-2023",
    description: "为了弥补现有场面监视系统昂贵、覆盖率不够高、功能单一的问题，我提出使用摄像头作为通用传感器，识别飞机位置、车辆位置、障碍物、桩桶摆放、人员着装规范等对象，结合对于航空器过站保障流程的理解，设计出了数字机坪产品。",
    descriptionEn: "To address the issues of expensive existing surface surveillance systems, insufficient coverage, and limited functionality, I proposed using cameras as universal sensors to identify aircraft positions, vehicle positions, obstacles, cone placement, personnel dress code compliance, and other objects, combined with understanding of aircraft transit support processes, to design the digital apron product.",
    technicalDetails: [
      "定义结构化机场路网，实现基于航图和CAD的快速机场路网构建",
      "解决定位覆盖率差的问题，利用卷积神经网络和卡尔曼+匈牙利算法进行目标跟踪",
      "解决定位频率不稳定的问题，利用隐马尔可夫模型和局部异常因子因子模型进行修正",
      "解决定位误差问题，利用特征工程和数据融合进行修正",
    ],
    technicalDetailsEn: [
      "Defined structured airport networks, implemented rapid airport network construction based on chart and CAD",
      "Solved the problem of low positioning coverage rate, used convolutional neural networks and Kalman+Hungarian algorithm for target tracking",
      "Solved the problem of unstable positioning frequency, used hidden Markov model and local outlier factor model for correction",
      "Solved the problem of positioning error, used feature engineering and data fusion for correction",
    ],
    technologies: ["计算机视觉", "目标跟踪", "多源数据融合", "实时计算", "视频分析", "物联网"],
    technologiesEn: ["Computer Vision", "Target Tracking", "Multi-source Data Fusion", "Real-time Computing", "Video Analysis", "IoT"],
    impact: "实现了各个阶段的监控和预警，降低了管理人员的工作量，提升了工作体验，支持了对于保障过程更好的质量控制和管理。",
    impactEn: "Achieved monitoring and early warning at various stages, reduced management staff workload, improved work experience, and supported better quality control and management of the support process.",
    relatedSkills: [
      "计算机视觉",
      "目标跟踪",
      "多源数据融合",
      "实时计算",
      "视频分析",
      "物联网",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Computer Vision",
      "Target Tracking",
      "Multi-source Data Fusion",
      "Real-time Computing",
      "Video Analysis",
      "IoT",
      "System Architecture"
    ],
    images: ["https://res.mojalab.cn/images/projects/13/cover.jpg"
      , "https://res.mojalab.cn/images/projects/13/team.jpg"
      , "https://res.mojalab.cn/images/projects/13/1.png"
      , "https://res.mojalab.cn/images/projects/13/2.png"
      , "https://res.mojalab.cn/images/projects/13/3.png"
      , "https://res.mojalab.cn/images/projects/13/4.jpg"
      , "https://res.mojalab.cn/images/projects/13/5.png"
    ],
    videos: [ "https://res.mojalab.cn/images/projects/15/IMG_2355.mp4"]
  },
  {
    id: 14,
    title: "基于流数据平台和融合感知的停机入位系统",
    titleEn: "Parking Position System Based on Stream Data Platform and Fusion Perception",
    company: "阿里巴巴",  
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2019-2023",
    description: "通过对飞机的跟踪，解决了传统停机设备需要人操作的问题（因为激光雷达不能一直开机）。在广州白云机场部署了全国第一个基于视觉的停机入位、出位识别以及联动服务车道红绿灯的系统。",
    descriptionEn: "Through aircraft tracking, solved the problem of traditional parking equipment requiring manual operation (because lidar cannot be kept on all the time). Deployed the first vision-based parking position, exit recognition, and service lane traffic light linkage system in China at Guangzhou Baiyun Airport.",
    technicalDetails: [
      "实现了基于视觉的停机入位和出位识别系统，区别于放置在停机位的专用感知设备",
      "基于CV的跨摄像头目标跟踪",
      "通过消息中间件转发到物联网服务",
      "实现了通过PLC控制红绿灯的自动化系统"
    ],
    technicalDetailsEn: [
      "Implemented vision-based parking position and exit recognition system, different from dedicated sensing devices placed at parking positions",
      "Cross-camera target tracking based on CV",
      "Forwarded to IoT services through message middleware",
      "Implemented automated system for traffic light control through PLC"
    ],
    technologies: ["计算机视觉", "物联网", "消息中间件", "PLC控制", "实时计算"],
    technologiesEn: ["Computer Vision", "IoT", "Message Middleware", "PLC Control", "Real-time Computing"],
    impact: "在广州白云机场成功部署了全国第一个基于视觉的停机入位系统，实现了人工智能、大数据、物联网的复杂应用。",
    impactEn: "Successfully deployed the first vision-based parking position system in China at Guangzhou Baiyun Airport, achieving complex applications of artificial intelligence, big data, and IoT.",
    relatedSkills: [
      "计算机视觉",
      "物联网",
      "消息中间件",
      "PLC控制",
      "实时计算",
      "系统集成"
    ],
    relatedSkillsEn: [
      "Computer Vision",
      "IoT",
      "Message Middleware",
      "PLC Control",
      "Real-time Computing",
      "System Integration"
    ],
    newsLinks: [
      {
        title: "白云机场推出国内首个飞机泊位警示系统",
        titleEn: "Baiyun Airport Launches China's First Aircraft Parking Position Warning System",
        url: "/news/1"
      }
    ],
    videos: ["https://res.mojalab.cn/images/projects/14/cover.mp4"],
    images: [
      "https://res.mojalab.cn/images/projects/14/cover.png",
      "https://res.mojalab.cn/images/projects/14/cover2.jpg",
    ]
  },
  {
    id: 15,
    title: "基于AR技术的虚拟远程塔台空中交通管制系统",
    titleEn: "Virtual Remote Tower Air Traffic Control System Based on AR Technology",
    company: "阿里巴巴",  
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2019-2023",
    description: "通过对AR技术的融合、结合对机场管制语音通话的识别，我们实现了基于 hololens 面向空中交通管制人员的虚拟远程塔台服务。",
    descriptionEn: "Through the integration of AR technology and airport control voice call recognition, we implemented a virtual remote tower service based on Hololens for air traffic controllers.",
    technicalDetails: [
      "实现了基于AR技术的虚拟远程塔台服务",
      "基于航空器仿真计算实现训练模拟",
      "通过视觉、雷达等多模态数据进行位置融合实现数字孪生",
      "通过预测算法进行数据修正"
    ],
    technicalDetailsEn: [
      "Implemented virtual remote tower service based on AR technology",
      "Achieved training simulation based on aircraft simulation calculation",
      "Implemented digital twin through position fusion of visual, radar, and other multi-modal data",
      "Conducted data correction through prediction algorithms"
    ],
    technologies: ["AR技术", "语音识别", "计算机视觉", "实时计算", "3D建模", "仿真系统"],
    technologiesEn: ["AR Technology", "Speech Recognition", "Computer Vision", "Real-time Computing", "3D Modeling", "Simulation System"],
    impact: "为空中交通管制人员提供了更直观、高效的管制工具，支持了机场运营的智能化升级。",
    impactEn: "Provided more intuitive and efficient control tools for air traffic controllers, supporting intelligent upgrade of airport operations.",
    relatedSkills: [
      "AR技术",
      "语音识别",
      "计算机视觉",
      "实时计算",
      "3D建模",
      "仿真系统",
      "系统架构"
    ],
    relatedSkillsEn: [
      "AR Technology",
      "Speech Recognition",
      "Computer Vision",
      "Real-time Computing",
      "3D Modeling",
      "Simulation System",
      "System Architecture"
    ],
    videos: ["https://res.mojalab.cn/images/projects/15/ar.mp4", "https://res.mojalab.cn/images/projects/15/tower2.mp4"]
  },
  {
    id: 16,
    title: "基于航班仿真系统和TTS的智能空中交通管制训练系统",
    titleEn: "Intelligent Air Traffic Control Training System Based on Flight Simulation System and TTS",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2021",
    description: "通过对管制技术的业务洞察，发现对管制进行识别是不必要的，反而可以突破思维惯性，改变管制员通过语音进行管制的交互模式，而改用便捷、准确的计算机交互操作。",
    descriptionEn: "Through business insights into control technology, discovered that control recognition was unnecessary, and instead could break through thinking inertia, changing the interaction mode of controllers from voice-based control to convenient and accurate computer interaction.",
    technicalDetails: [
      "开发了基于点击机位、滑行道的交互系统",
      "实现了模糊和路径规划算法来预测最可能的指挥线路",
      "TTS生成指挥指令和语音指令",
      "基于航班仿真的航班运行"
    ],
    technicalDetailsEn: [
      "Developed interaction system based on clicking parking positions and taxiways",
      "Implemented fuzzy and path planning algorithms to predict most likely command routes",
      "TTS generation of command instructions and voice instructions",
      "Flight operation based on flight simulation"
    ],
    technologies: ["路径规划", "语音合成", "实时计算", "人机交互", "数据通信"],
    technologiesEn: ["Path Planning", "Speech Synthesis", "Real-time Computing", "Human-Computer Interaction", "Data Communication"],
    impact: "避免了因为口语而发生的各类问题，提高了管制效率和准确性。",
    impactEn: "Avoided various problems caused by spoken language, improving control efficiency and accuracy.",
    relatedSkills: [
      "路径规划",
      "语音合成",
      "实时计算",
      "人机交互",
      "数据通信",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Path Planning",
      "Speech Synthesis",
      "Real-time Computing",
      "Human-Computer Interaction",
      "Data Communication",
      "System Architecture"
    ],
    images: ["https://res.mojalab.cn/images/projects/16/cover.png","https://res.mojalab.cn/images/projects/16/show.jpg"],
  },
  {
    id: 17,
    title: "基于搜索数据和航班排班数据的航空公司业务预测服务",
    titleEn: "Airline Business Prediction Service Based on Search Data and Flight Schedule Data",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2020",
    description: "在新冠疫情期间，航空公司损失惨重，从公益事业的角度出发，为了帮助航空公司度过难关。我与飞猪合作，基于他们的旅行搜索数据与成交数据训练的算法预测出行热度。",
    descriptionEn: "During the COVID-19 pandemic, airlines suffered heavy losses. From a public welfare perspective, to help airlines overcome difficulties, I collaborated with Fliggy to predict travel popularity based on algorithms trained on their travel search data and transaction data.",
    technicalDetails: [
      "基于飞猪旅行搜索数据与成交数据训练算法",
      "实现了出行热度预测模型",
      "为航空公司提供业务和排班的预测管理服务",
      "支持航空公司进行业务决策"
    ],
    technicalDetailsEn: [
      "Trained algorithms based on Fliggy travel search data and transaction data",
      "Implemented travel popularity prediction model",
      "Provided airlines with business and scheduling prediction management services",
      "Supported airlines in business decision-making"
    ],
    technologies: ["机器学习", "数据分析", "预测模型", "实时计算", "数据可视化"],
    technologiesEn: ["Machine Learning", "Data Analysis", "Prediction Models", "Real-time Computing", "Data Visualization"],
    impact: "帮助航空公司在疫情期间更好地进行业务规划和排班管理，降低了运营风险。",
    impactEn: "Helped airlines better conduct business planning and scheduling management during the pandemic, reducing operational risks.",
    relatedSkills: [
      "机器学习",
      "数据分析",
      "预测模型",
      "实时计算",
      "数据可视化",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Machine Learning",
      "Data Analysis",
      "Prediction Models",
      "Real-time Computing",
      "Data Visualization",
      "System Architecture"
    ],
    newsLinks: [
      {
        title: "科技抗疫 阿里云、千方科技助力民航疫情防控",
        titleEn: "Technology Fights Epidemic: Alibaba Cloud and Qianfang Technology Help Civil Aviation Epidemic Prevention",
        url: "/news/4"
      }
    ],
    images: [
      "https://res.mojalab.cn/images/projects/recovery/1.png",
      "https://res.mojalab.cn/images/projects/recovery/2.png",
      "https://res.mojalab.cn/images/projects/recovery/3.png",
      "https://res.mojalab.cn/images/projects/recovery/4.png",
      "https://res.mojalab.cn/images/projects/recovery/5.png",
      "https://res.mojalab.cn/images/projects/recovery/6.png",
      "https://res.mojalab.cn/images/projects/recovery/7.png"
    ]
  },
  {
    id: 18,
    title: "结构化机场路网研究和基于航图的路网标注工具",
    titleEn: "Structured Airport Road Network Research and Road Network Labeling Tool Based on Chart",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2020",
    description: "为了解决机场路网建模和打标的问题，我们设计了一套完整的结构化路网标准，实现了路网的快速建模和自动化打标。",
    descriptionEn: "To solve the problem of airport road network modeling and labeling, we designed a complete set of structured road network standards, achieving rapid modeling and automated labeling of road networks.",
    technicalDetails: [
      "设计了结构化路网标准，支持跑滑位置、停机位位置、滑行道拓补关系、滑行方向限制、转弯方向限制等完整表达",
      "实现了前端路网构建工具，支持快速路网建模和编辑",
      "开发了基于AI的路网打标工具，实现了标注工作量的90%减少",
      "实现了基于路网的飞机位置关联、路径识别、AI飞机自动滑行等功能",
      "实现了基于路网数据直接生成3D机场场面模型",
    ],
    technicalDetailsEn: [
      "Designed structured road network standards, supporting complete expression of runway positions, parking positions, taxiway topology relationships, taxiing direction restrictions, turning direction restrictions, etc.",
      "Implemented frontend road network construction tools, supporting rapid road network modeling and editing",
      "Developed AI-based road network labeling tools, achieving 90% reduction in labeling workload",
      "Implemented road network-based aircraft position association, path recognition, AI aircraft automatic taxiing and other functions",
      "Implemented 3D airport surface model generation based on road network data",
    ],
    technologies: ["数据结构", "交互", "前端", "3D建模"],
    technologiesEn: ["Data Structure", "Interaction", "Frontend", "3D Modeling"],
    impact: "标注工作量减少90%，交叉点漏标率为0，标注时间从1周缩短到半天，培训工作从困难变为简单。",
    impactEn: "Labeling workload reduced by 90%, intersection labeling omission rate is 0, labeling time reduced from 1 week to half a day, training work changed from difficult to simple.",
    relatedSkills: [
      "数据结构",
      "交互",
      "前端",
      "3D建模",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Data Structure",
      "Interaction",
      "Frontend",
      "3D Modeling",
      "System Architecture"
    ],
    images: ["https://res.mojalab.cn/images/projects/18/1.jpg"
    , "https://res.mojalab.cn/images/projects/18/2.jpg"
    , "https://res.mojalab.cn/images/projects/18/3.jpg"
    , "https://res.mojalab.cn/images/projects/18/4.jpg"
    ]
  },
  {
    id: 19,
    title: "基于融合感知和实时数据平台的冲突预警系统",
    titleEn: "Conflict Warning System Based on Fusion Perception and Real-time Data Platform",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2020-2023",
    description: "通过融合数据平台中的空管指令、飞机位置、车辆位置数据，实现了全面的场面冲突预警系统，显著提升了机场运行安全性。",
    descriptionEn: "By integrating air traffic control instructions, aircraft positions, and vehicle positions from the data platform, we implemented a comprehensive surface conflict warning system, significantly improving airport operational safety.",
    technicalDetails: [
      "实现了基于语音识别的空管指令识别系统，支持实时指令解析和意图理解",
      "开发了基于多源数据的滑行意图预测模型，准确预测飞机和车辆的运行轨迹",
      "设计了基于路径规划的冲突检测算法，实现了指令冲突和滑行冲突的实时识别",
      "构建了多级预警机制，包括指挥系统预警、监控系统预警、红绿灯预警和服务车辆预警",
      "实现了基于实时数据的预警信息推送系统，确保相关人员及时获取预警信息"
    ],
    technicalDetailsEn: [
      "Implemented air traffic control instruction recognition system based on speech recognition, supporting real-time instruction parsing and intent understanding",
      "Developed taxiing intent prediction model based on multi-source data, accurately predicting aircraft and vehicle trajectories",
      "Designed conflict detection algorithm based on path planning, achieving real-time identification of instruction conflicts and taxiing conflicts",
      "Built multi-level warning mechanism, including command system warning, monitoring system warning, traffic light warning, and service vehicle warning",
      "Implemented warning information push system based on real-time data, ensuring timely warning information delivery to relevant personnel"
    ],
    technologies: ["语音识别", "路径规划", "实时计算", "数据融合", "预警系统", "物联网"],
    technologiesEn: ["Speech Recognition", "Path Planning", "Real-time Computing", "Data Fusion", "Warning System", "IoT"],
    impact: "系统显著提升了机场运行安全性，减少了潜在冲突，提高了机场运行效率。预警系统覆盖了从指挥到执行的全流程，实现了全方位的安全保障。",
    impactEn: "The system significantly improved airport operational safety, reduced potential conflicts, and enhanced airport operational efficiency. The warning system covered the entire process from command to execution, achieving comprehensive safety protection.",
    relatedSkills: [
      "语音识别",
      "路径规划",
      "实时计算",
      "数据融合",
      "预警系统",
      "物联网",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Speech Recognition",
      "Path Planning",
      "Real-time Computing",
      "Data Fusion",
      "Warning System",
      "IoT",
      "System Architecture"
    ],
    images: [
      "https://res.mojalab.cn/images/projects/19/1.jpg",
      "https://res.mojalab.cn/images/projects/19/2.jpg"
    ]
  },
  {
    id: 20,
    title: "基于多源数据融合的定位修正研究",
    titleEn: "Research on Location Correction Based on Multi-source Data Fusion",
    company: "阿里巴巴",
    companyEn: "Alibaba Group",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2021",
    description: "为了解决机场场面定位数据不准确的问题，我们开发了一套基于多源数据融合的定位修正系统，通过三步修正策略显著提升了定位精度。",
    descriptionEn: "To solve the problem of inaccurate airport surface positioning data, we developed a positioning correction system based on multi-source data fusion, significantly improving positioning accuracy through a three-step correction strategy.",
    technicalDetails: [
      "实现了基于局部异常因子的第一步修正，有效识别和修正异常定位点",
      "开发了基于隐马路网匹配的第二步修正，利用机场路网结构进行位置优化",
      "构建了完整的评估体系，实现了98%的定位准确率",
    ],
    technicalDetailsEn: [
      "Implemented first-step correction based on local outlier factor, effectively identifying and correcting abnormal positioning points",
      "Developed second-step correction based on hidden road network matching, optimizing positions using airport road network structure",
      "Built comprehensive evaluation system, achieving 98% positioning accuracy",
    ],
    technologies: ["数据融合", "异常检测", "路网匹配", "实时计算"],
    technologiesEn: ["Data Fusion", "Anomaly Detection", "Road Network Matching", "Real-time Computing"],
    impact: "系统显著提升了机场场面定位精度，为机场运行提供了更准确的位置数据支持。98%的定位准确率和30Hz的更新频率，为机场场面监控和冲突预警提供了可靠的数据基础。",
    impactEn: "The system significantly improved airport surface positioning accuracy, providing more accurate position data support for airport operations. 98% positioning accuracy and 30Hz update frequency provided reliable data foundation for airport surface monitoring and conflict warning.",
    relatedSkills: [
      "数据融合",
      "异常检测",
      "路网匹配",
      "实时计算",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Data Fusion",
      "Anomaly Detection",
      "Road Network Matching",
      "Real-time Computing",
      "System Architecture"
    ],
    images: [
      "https://res.mojalab.cn/images/projects/20/1.jpg",
      "https://res.mojalab.cn/images/projects/20/2.jpg"
    ]
  },
  {
    id: 21,
    title: "基于多交通方式融合的智能出行规划系统",
    titleEn: "Intelligent Travel Planning System Based on Multi-modal Transportation Integration",
    company: "中国器官移植基金会",
    companyEn: "China Organ Transplant Foundation",
    role: "高级数据技术专家 & 智慧航空行业技术总监",
    roleEn: "Senior Data Technology Expert & Smart Aviation Industry Technical Director",
    period: "2023",
    description: "为了解决多交通方式融合的出行规划问题，我们开发了一套创新的智能出行规划系统。该系统通过特殊的数据预处理和网络构建方法，实现了基于时间、价格等多维权重的路径规划优化。",
    descriptionEn: "To solve the problem of multi-modal transportation integration for travel planning, we developed an innovative intelligent travel planning system. Through special data preprocessing and network construction methods, the system achieved path planning optimization based on multi-dimensional weights such as time and price.",
    technicalDetails: [
      "设计了基于时空网络的多交通方式融合模型，支持航班、高铁、私人飞机、Evotl、救护车等多种交通方式的统一表示",
      "实现了基于实时数据的动态网络构建方法，支持交通网络的实时更新和优化",
      "开发了多维权重的路径规划算法，支持时间、价格、舒适度等多维度的优化目标",
      "构建了基于机器学习的交通方式推荐系统，根据用户偏好和历史数据提供个性化出行方案",
      "实现了基于分布式计算的实时路径规划引擎，支持大规模并发查询和毫秒级响应"
    ],
    technicalDetailsEn: [
      "Designed a multi-modal transportation integration model based on spatiotemporal networks, supporting unified representation of various transportation modes including flights, high-speed rail, private jets, Evotl, and ambulances",
      "Implemented dynamic network construction method based on real-time data, supporting real-time updates and optimization of transportation networks",
      "Developed multi-dimensional weight path planning algorithm, supporting optimization objectives in multiple dimensions such as time, price, and comfort",
      "Built transportation mode recommendation system based on machine learning, providing personalized travel solutions based on user preferences and historical data",
      "Implemented real-time path planning engine based on distributed computing, supporting large-scale concurrent queries and millisecond-level response"
    ],
    technologies: ["时空网络", "实时计算", "分布式系统", "路径规划", "数据融合"],
    technologiesEn: ["Spatiotemporal Networks", "Real-time Computing", "Distributed Systems", "Path Planning", "Data Fusion"],
    impact: "系统显著提升了出行规划的效率和质量，平均规划时间从原来的分钟级缩短到秒级，用户满意度提升40%。通过多交通方式的融合，为用户提供了更多样化的出行选择，同时实现了更优的出行体验。",
    impactEn: "The system significantly improved the efficiency and quality of travel planning, reducing average planning time from minutes to seconds, and increasing user satisfaction by 40%. Through multi-modal transportation integration, it provided users with more diverse travel options while achieving better travel experience.",
    relatedSkills: [
      "时空网络",
      "实时计算",
      "分布式系统",
      "路径规划",
      "数据融合",
      "系统架构"
    ],
    relatedSkillsEn: [
      "Spatiotemporal Networks",
      "Real-time Computing",
      "Distributed Systems",
      "Path Planning",
      "Data Fusion",
      "System Architecture"
    ],
    images: [
      "https://res.mojalab.cn/images/projects/21/1.jpg",
      "https://res.mojalab.cn/images/projects/21/2.jpg",
      "https://res.mojalab.cn/images/projects/21/3.jpg",
      
    ]
  }
];

export async function getProjects() {
  // 按结束时间正序排列项目
  return projects.sort((a, b) => {
    // 从period字符串中提取结束年份
    const getYear = (period: string) => {
      const years = period.match(/\d{4}/g);
      // 如果找到多个年份，返回最后一个（结束年份）
      // 如果只有一个年份，返回该年份
      // 如果没有找到年份，返回0
      return years ? parseInt(years[years.length - 1]) : 0;
    };
    return getYear(a.period) - getYear(b.period);  // 改为a-b，实现正序排列
  });
} 