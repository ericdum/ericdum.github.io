'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Experience {
  company: {
    zh: string;
    en: string;
  };
  period: string;
  positions: {
    title: {
      zh: string;
      en: string;
    };
    department?: {
      zh: string;
      en: string;
    };
    period: string;
    responsibilities: {
      zh: string[];
      en: string[];
    };
  }[];
}

interface Education {
  school: {
    zh: string;
    en: string;
  };
  degree: {
    zh: string;
    en: string;
  };
}

interface SocialPosition {
  organization: {
    zh: string;
    en: string;
  };
  position: {
    zh: string;
    en: string;
  };
}

interface Award {
  title: {
    zh: string;
    en: string;
  };
  issuer: {
    zh: string;
    en: string;
  };
  date: string;
  role: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
}

const experiences: Experience[] = [
  {
    company: {
      zh: "阿里巴巴集团",
      en: "Alibaba Group"
    },
    period: "2014-2023",
    positions: [
      {
        title: {
          zh: "高级数据技术专家 & 智慧航空行业技术总监",
          en: "Senior Data Technology Expert & Smart Aviation Industry Technical Director"
        },
        department: {
          zh: "阿里云行业解决方案研发部",
          en: "Alibaba Cloud Industry Solutions Development Department"
        },
        period: "2019-2023",
        responsibilities: {
          zh: [
            "负责智慧航空行业技术战略规划和技术架构设计",
            "支持多个重大项目的技术方案设计和实施",
            "推动技术创新和产品落地"
          ],
          en: [
            "Responsible for technical strategy planning and architecture design in smart aviation industry",
            "Supported multiple major projects' technical solution design and implementation",
            "Promoted technological innovation and product development"
          ]
        }
      },
      {
        title: {
          zh: "技术专家",
          en: "Technical Expert"
        },
        department: {
          zh: "数据平台事业部和阿里云IoT事业部",
          en: "Data Platform Department and IoT Department"
        },
        period: "2016-2019",
        responsibilities: {
          zh: [
            "领导数据可视化平台的技术架构设计",
            "支持双十一数据大屏项目的技术实现",
            "负责物联网实验室推动智能家居和设备管理和运维平台"
          ],
          en: [
            "Led technical architecture design of data visualization platform",
            "Supported the technical implementation of Double 11 data screen project",
            "Responsible for the promotion of IoT laboratory and the development of smart home and device management and maintenance platform"
          ]
        }
      },
      {
        title: {
          zh: "资深开发工程师",
          en: "Senior Development Engineer"
        },
        department: {
          zh: "数据平台事业部",
          en: "Data Platform Department"
        },
        period: "2014-2015",
        responsibilities: {
          zh: [
            "负责高性能流量控制系统的开发",
            "参与全景洞察产品的优化"
          ],
          en: [
            "Responsible for high-performance traffic control system development",
            "Participated in Panoramic Insight product optimization"
          ]
        }
      }
    ]
  },
  {
    company: {
      zh: "心动游戏",
      en: "XD Company"
    },
    period: "2012-2014",
    positions: [
      {
        title: {
          zh: "资深工程师",
          en: "Senior Engineer"
        },
        department: {
          zh: "平台研发部",
          en: "Platform Development Department"
        },
        period: "2012-2014",
        responsibilities: {
          zh: [
            "负责广告效果监测系统的开发",
            "负责游戏平台的研发工作",
            "参与客服系统的技术方案设计"
          ],
          en: [
            "Responsible for advertising effect monitoring system development",
            "Responsible for game platform development",
            "Participated in customer service system technical solution design"
          ]
        }
      }
    ]
  },
  {
    company: {
      zh: "MatchMove Games Pte Ltd",
      en: "MatchMove Games Pte Ltd"
    },
    period: "2011-2012",
    positions: [
      {
        title: {
          zh: "PHP 工程师",
          en: "PHP Engineer"
        },
        department: {
          zh: "成都研发中心",
          en: "Chengdu Research and Development Center"
        },
        period: "2011-2012",
        responsibilities: {
          zh: [
            "负责多语言社交网络平台的开发，并支持模板化复制以支持三方游戏平台"
          ],
          en: [
            "Responsible for multi-language social network platform development, and supported template-based replication to support third-party game platforms"
          ]
        }
      }
    ]
  }
];

const education: Education[] = [
  {
    school: {
      zh: "Arizona State University",
      en: "Arizona State University"
    },
    degree: {
      zh: "Master of Engineering with distinction",
      en: "Master of Engineering with distinction"
    }
  },
  {
    school: {
      zh: "厦门大学",
      en: "Xiamen University"
    },
    degree: {
      zh: "经济学学士",
      en: "Bachelor of Economics"
    }
  }
];

const socialPositions: SocialPosition[] = [
    {
      organization: {
        zh: "中国器官移植发展基金会易捷通专项基金",
        en: "China Organ Transplant Development Foundation Yijietong Special Fund"
      },
      position: {
        zh: "委员",
        en: "Committee Member"
      }
    },
  {
    organization: {
      zh: "浙江省科学技术协会",
      en: "Zhejiang Association for Science and Technology"
    },
    position: {
      zh: "科学传播专家",
      en: "Science Communication Expert"
    }
  },
  {
    organization: {
      zh: "阿里巴巴集团",
      en: "Alibaba Group"
    },
    position: {
      zh: "乡村振兴技术官",
      en: "Rural Revitalization Technology Officer"
    }
  },
];

const awards: Award[] = [
  {
    title: {
      zh: "FY22 集团十佳公益项目",
      en: "FY22 Top 10 Public Welfare Projects"
    },
    issuer: {
      zh: "阿里巴巴集团",
      en: "Alibaba Group"
    },
    date: "2022-02",
    role: {
      zh: "项目发起人之一",
      en: "Project Initiator"
    }
  },
  {
    title: {
      zh: "FY21 卓越产品奖",
      en: "FY21 Excellence Product Award"
    },
    issuer: {
      zh: "数据智能",
      en: "Data Intelligence"
    },
    date: "2020-01",
    role: {
      zh: "产研负责人",
      en: "Product Development Lead"
    }
  },
  {
    title: {
      zh: "FY21 自证预言奖",
      en: "FY21 Self-fulfilling Prophecy Award"
    },
    issuer: {
      zh: "数字产业产研部",
      en: "Digital Industry R&D Department"
    },
    date: "2020-01",
    role: {
      zh: "AR 机坪产研负责人",
      en: "AR Apron R&D Lead"
    }
  },
  {
    title: {
      zh: "阿里巴巴2019年度最受欢迎项目——《橙点公益奖》",
      en: "Alibaba 2019 Most Popular Project - Orange Point Public Welfare Award"
    },
    issuer: {
      zh: "阿里巴巴集团",
      en: "Alibaba Group"
    },
    date: "2020-01",
    role: {
      zh: "项目负责人",
      en: "Project Lead"
    }
  },
  {
    title: {
      zh: "阿里巴巴集团党委星火燎原奖（一等奖）",
      en: "Alibaba Party Committee Spark Award (First Prize)"
    },
    issuer: {
      zh: "阿里巴巴党委",
      en: "Alibaba Party Committee"
    },
    date: "2019-06",
    role: {
      zh: "项目发起人，管理人",
      en: "Project Initiator and Manager"
    }
  },
  {
    title: {
      zh: "阿里巴巴2018年度十佳公益项目——《橙点公益奖》",
      en: "Alibaba 2018 Top 10 Public Welfare Projects - Orange Point Public Welfare Award"
    },
    issuer: {
      zh: "阿里巴巴公益委员会",
      en: "Alibaba Public Welfare Committee"
    },
    date: "2019-04",
    role: {
      zh: "项目发起人，管理人",
      en: "Project Initiator and Manager"
    }
  },
  {
    title: {
      zh: "GXIC 智慧园区奖",
      en: "GXIC Smart Park Award"
    },
    issuer: {
      zh: "阿里云 IoT 事业部",
      en: "Alibaba Cloud IoT Department"
    },
    date: "2017-01",
    role: {
      zh: "项目负责人",
      en: "Project Lead"
    },
    description: {
      zh: "通过摄像头做重点人员轨迹跟踪",
      en: "Key personnel trajectory tracking through cameras"
    }
  }
];

export default function ExperiencePage() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-8">{t('experience.title')}</h1>

        {/* 获奖经历 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t('experience.awards')}</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{award.title[language]}</h3>
                    <p className="text-gray-600 text-sm mt-1">{award.issuer[language]}</p>
                    <p className="text-gray-700 mt-1">{award.role[language]}</p>
                    {award.description && (
                      <p className="text-gray-600 text-sm mt-1">{award.description[language]}</p>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 工作经历 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t('experience.workExperience')}</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{exp.company[language]}</h3>
                  <p className="text-gray-600">{exp.period}</p>
                </div>
                <div className="space-y-4">
                  {exp.positions.map((pos, posIndex) => (
                    <div key={posIndex} className="bg-white rounded p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{pos.title[language]}</h4>
                          {pos.department && (
                            <p className="text-gray-600 text-sm mt-1">{pos.department[language]}</p>
                          )}
                        </div>
                        {exp.positions.length > 1 && (
                          <p className="text-gray-500 text-sm">{pos.period}</p>
                        )}
                      </div>
                      <div className="mt-1 text-gray-700 space-y-1">
                        {pos.responsibilities[language].map((resp, respIndex) => (
                          <p key={respIndex}>{resp}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 社会任职 */}
        <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">{t('experience.socialPositions')}</h2>
        <div className="space-y-4">
            {socialPositions.map((pos, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold">{pos.organization[language]}</h3>
                <p className="text-gray-700">{pos.position[language]}</p>
            </div>
            ))}
        </div>
        </section>

        {/* 学历 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">{t('experience.education')}</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold">{edu.school[language]}</h3>
                <p className="text-gray-700">{edu.degree[language]}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 