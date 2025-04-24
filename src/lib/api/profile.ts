export interface Profile {
  name: {
    en: string;
    zh: string;
  };
  title: {
    en: string;
    zh: string;
  };
  currentPosition: {
    en: string;
    zh: string;
  };
  previousPosition: {
    en: string;
    zh: string;
  };
  email: string;
  //phone: string;
  bio: {
    en: string;
    zh: string;
  };
  skills: {
    category: {
      en: string;
      zh: string;
    };
    items: {
      name: {
        en: string;
        zh: string;
      };
      level: {
        en: string;
        zh: string;
      };
      projects: number[];
      description: {
        en: string;
        zh: string;
      };
    }[];
  }[];
  education: {
    degree: {
      en: string;
      zh: string;
    };
    major: {
      en: string;
      zh: string;
    };
    school: {
      en: string;
      zh: string;
    };
    year: string;
  }[];
  certifications: {
    name: {
      en: string;
      zh: string;
    };
    issuer: {
      en: string;
      zh: string;
    };
    year: string;
  }[];
}

const profile: Profile = {
  name: {
    en: "Lichen Dai (Eric)",
    zh: "代立晨（木酱）"
  },
  title: {
    en: "Senior Professional Title, Pilot",
    zh: "副高级职称、飞行员"
  },
  currentPosition: {
    en: "Engineering Technology Teacher & Educational Technology Consultant at Hangzhou Yungu School",
    zh: "杭州云谷学校工程技术老师 & 教育科技技术顾问"
  },
  previousPosition: {
    en: "Committee Member of China Organ Transplant Foundation - Easy Access Special Fund",
    zh: "中国器官移植基金会-易捷通专项基金委员"
  },
  email: "formateric@gmail.com",
  // phone: "+86 153 5544 2280",
  bio: {
    en: "Former Alibaba Cloud Aviation Industry Technical Director, filled multiple gaps in China's digital apron industry. Former head of Alibaba Cloud IoT Innovation Lab, designed smart home systems for special populations that were widely featured on CCTV-2's 'Secret Makeover' and Zhejiang TV's 'Made in China'. Former Alibaba Group Rural Revitalization Technology Officer, documented in the documentary 'Above the Fields' produced by China Foreign Languages Publishing Administration. Science popularization blogger, featured in a 13-minute special report by CCTV News. Three-time winner of Alibaba Group's Annual Top 10 Public Welfare Projects Award. 2021 Alibaba Technology Person of the Year.",
    zh: "原阿里云航空行业技术总监，填补了多项国内数字机坪行业空白。原阿里云 IoT 创新实验室负责人，针对特殊人群设计的智能家居系统曾在 CCTV-2《秘密大改造》、浙江卫视《智造中国》节目中广泛传播。原阿里巴巴集团乡村振兴技术官，记录在中国外文局出品的纪录片《田野之上》。科普博主，曾被央视新闻13分钟专题报道。三次获得阿里巴巴集团公益年度十佳项目奖。2021年阿里技术人年度个人。"
  },
  skills: [
    {
      category: {
        en: "Artificial Intelligence",
        zh: "人工智能"
      },
      items: [
        {
          name: {
            en: "Machine Learning",
            zh: "机器学习"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design and implement machine learning models, including supervised learning, unsupervised learning, and reinforcement learning.",
            zh: "设计和实现机器学习模型，包括监督学习、无监督学习和强化学习。"
          }
        },
        {
          name: {
            en: "Deep Learning",
            zh: "深度学习"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Develop complex neural network models using deep learning frameworks.",
            zh: "使用深度学习框架开发复杂的神经网络模型。"
          }
        },
        {
          name: {
            en: "Natural Language Processing",
            zh: "自然语言处理"
          },
          level: {
            en: "Advanced",
            zh: "高级"
          },
          projects: [2, 3],
          description: {
            en: "Develop text analysis and processing systems, including sentiment analysis, text classification, etc.",
            zh: "开发文本分析和处理系统，包括情感分析、文本分类等。"
          }
        }
      ]
    },
    {
      category: {
        en: "Big Data",
        zh: "大数据"
      },
      items: [
        {
          name: {
            en: "Distributed Computing",
            zh: "分布式计算"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design and implement large-scale distributed computing systems.",
            zh: "设计和实现大规模分布式计算系统。"
          }
        },
        {
          name: {
            en: "Real-time Computing",
            zh: "实时计算"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Develop real-time data processing and analysis systems.",
            zh: "开发实时数据处理和分析系统。"
          }
        },
        {
          name: {
            en: "Data Warehouse",
            zh: "数据仓库"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design and optimize data warehouse architecture.",
            zh: "设计和优化数据仓库架构。"
          }
        }
      ]
    },
    {
      category: {
        en: "System Architecture",
        zh: "系统架构"
      },
      items: [
        {
          name: {
            en: "Microservices Architecture",
            zh: "微服务架构"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design and implement microservices architecture systems.",
            zh: "设计和实现微服务架构系统。"
          }
        },
        {
          name: {
            en: "High Availability Architecture",
            zh: "高可用架构"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design high-availability system architecture to ensure system stability.",
            zh: "设计高可用系统架构，确保系统稳定性。"
          }
        },
        {
          name: {
            en: "Cloud Native Architecture",
            zh: "云原生架构"
          },
          level: {
            en: "Expert",
            zh: "专家"
          },
          projects: [1, 2, 3],
          description: {
            en: "Design and implement cloud-native application architecture.",
            zh: "设计和实现云原生应用架构。"
          }
        }
      ]
    }
  ],
  education: [
    {
      degree: {
        en: "Master's Degree",
        zh: "硕士"
      },
      major: {
        en: "Computer Science",
        zh: "计算机科学"
      },
      school: {
        en: "Zhejiang University",
        zh: "浙江大学"
      },
      year: "2007-2010"
    },
    {
      degree: {
        en: "Bachelor's Degree",
        zh: "学士"
      },
      major: {
        en: "Computer Science",
        zh: "计算机科学"
      },
      school: {
        en: "Zhejiang University",
        zh: "浙江大学"
      },
      year: "2003-2007"
    }
  ],
  certifications: [
    {
      name: {
        en: "AWS Solutions Architect",
        zh: "AWS 解决方案架构师"
      },
      issuer: {
        en: "Amazon Web Services",
        zh: "Amazon Web Services"
      },
      year: "2023"
    },
    {
      name: {
        en: "Google Cloud Professional Data Engineer",
        zh: "Google Cloud 专业数据工程师"
      },
      issuer: {
        en: "Google Cloud",
        zh: "Google Cloud"
      },
      year: "2022"
    }
  ]
};

export async function getProfile() {
  return profile;
} 