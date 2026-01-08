export interface Chapter {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
}

export interface Course {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
  chapters: Chapter[];
  grade: string[];
  type: {
    id: string;
    zh: string;
    en: string;
  };
  target: {
    zh: string;
    en: string;
  };
  resources?: {
    title: {
      zh: string;
      en: string;
    };
    url: string;
    description: {
      zh: string;
      en: string;
    };
  }[];
}

export interface Student {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  github: string;
  website?: string;
  courses: Course[];
  university: string;
  major: string;
  graduationYear: number;
  avatar: string;
}

export interface StudentReview {
  id: string;
  content: {
    zh: string;
    en: string;
  };
  studentId: string;
  year: number;
}

export interface StudentProject {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  detail: {
    zh: string;
    en: string;
  };
  images: string[];
  students: {
    zh: string;
    en: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  badge?: {
    text: {
      zh: string;
      en: string;
    };
  };
}

const courses: Course[] = [
  {
    id: "ict",
    title: {
      zh: "信息与智能计算",
      en: "Information and Intelligent Computing"
    },
    description: {
      zh: "信息与机器智能课程面向所有学生，介绍计算机、互联网和人工智能的基础知识。课程涵盖计算机基础、AI应用开发、数据可视化等内容，通过实践项目，帮助学生掌握数字时代必备的技能，培养对技术的理解和应用能力。",
      en: "The Information and Machine Intelligence course is designed for all students, introducing the fundamentals of computers, the internet, and artificial intelligence. The course covers computer basics, AI application development, data visualization, and more. Through practical projects, students will master essential skills for the digital age and develop their understanding and application of technology."
    },
    chapters: [
      {
        id: "computer-basics",
        title: {
          zh: "计算机基础",
          en: "Computer Basics"
        },
        description: {
          zh: "计算机的基本硬件组成和操作系统的入门，要求学生理解计算机各个硬件的工作原理和关键性能指标。",
          en: "The basic hardware composition and introductory operating system of computers, requiring students to understand the working principles and key performance indicators of each hardware component of the computer."
        }
      },
      {
        id: "ai-development",
        title: {
          zh: "AI应用开发",
          en: "AI Application Development"
        },
        description: {
          zh: "使用成熟的大模型API，如阿里云的百炼平台。并结合时下流行的开发方法如 Dify 等，让学生了解AI应用开发的基本方法。能够进行知识库、prompt 和简单的工作流开发",
          en: "Using mature large model APIs, such as Aliyun's Bailei platform. Combining the latest development methods like Dify, students will understand the basic methods of AI application development. They will be able to develop knowledge bases, prompts, and simple workflow applications."
        }
      },
      {
        id: "data-visualization",
        title: {
          zh: "数据可视化",
          en: "Data Visualization"
        },
        description: {
          zh: "要求学生理解常用的数据可视化图表的特征和使用方法、适用场景。了解数据可视化的作用和设计方法。使用 Python、Tableau 或其他数据可视化工具尝试使用数据来表达客观现象和观点",
          en: "Students will understand the characteristics and usage methods of common data visualization charts, their适用场景. They will also understand the purpose and design methods of data visualization. Using Python, Tableau, or other data visualization tools, they will try to use data to express objective phenomena and viewpoints."
        }
      },
      {
        id: "office-multimedia",
        title: {
          zh: "Office和多媒体",
          en: "Office and Multimedia"
        },
        description: {
          zh: "学习信息时代的基本工作和学习技能，要求掌握 MLA 论文格式的排版和编辑方法，能够使用电子表格处理数据，能够使用PPT进行简单的排版，能够运用视频和图像编辑工具并理解关键的参数指标",
          en: "Learning the basic work and learning skills in the information age, requiring students to master the formatting and editing methods of the MLA paper format, to use electronic spreadsheets to process data, to use PPT for simple layout, to use video and image editing tools and understand the key parameter indicators."
        }
      },
      {
        id: "programming-basics",
        title: {
          zh: "编程基础",
          en: "Programming Basics"
        },
        description: {
          zh: "要求学生理解编程逻辑，能够使用AI生成python代码，并能够阅读和调试python代码。",
          en: "Students will understand the programming logic, be able to use AI to generate Python code, and read and debug Python code."
        }
      }
    ],
    grade: ["Pre-G10", "G10"],
    type: {
      id: "popular-science",
      zh: "科普课",
      en: "Popular Science Course"
    },
    target: {
      zh: "帮助所有学生建立对计算机、互联网和人工智能的基本认知，掌握数字时代必备的技能。通过实践项目，培养学生的技术应用能力和创新思维，为未来的学习和工作做好准备。",
      en: "Help all students establish a basic understanding of computers, the internet, and artificial intelligence, and master essential skills for the digital age. Through practical projects, cultivate students' technical application abilities and innovative thinking, preparing them for future learning and work."
    },
    resources: [
      {
        title: {
          zh: "首届AI视频制作颁奖典礼",
          en: "First AI Video Production Awards Ceremony"
        },
        url: "https://static.yunguhs.com/ict-2025/screening/",
        description: {
          zh: "该奖项属于AI创作单元，学生利用AI技术，逐步完成故事创作、图片创作、脚本创作、视频创作和视频剪辑等工作。他们会在AI的帮助下，通过3分钟的视频来表达他们自己想要表达的观点。",
          en: "This award belongs to the AI Creation Unit. Students use AI technology to gradually complete story creation, image creation, script creation, video creation, and video editing. With the help of AI, they express their own viewpoints through 3-minute videos."
        }
      },
      {
        title: {
          zh: "办公软件和多媒体单元教学平台",
          en: "Office and Multimedia Unit Teaching Platform"
        },
        url: "http://static.yunguhs.com/ict-2025/multi-media/",
        description: {
          zh: "思维优先于操作：我们教的不是\"点击哪个按钮\"，而是\"为什么需要这样做\"。AI 作为学习伙伴：利用 AI 大模型的能力，让学生自主探索工具使用。可迁移的能力：软件会更新换代，但处理信息的逻辑是永恒的。",
          en: "Thinking Before Operation: We teach not 'which button to click', but 'why we need to do this'. AI as Learning Partner: Leverage AI large model capabilities to let students independently explore tool usage. Transferable Skills: Software will be updated, but the logic of processing information is eternal."
        }
      },
      {
        title: {
          zh: "计算机通识讲义",
          en: "Computer Science General Knowledge Textbook"
        },
        url: "https://cs-book.yunguhs.com/",
        description: {
          zh: "AI时代·计算机通识：一本面向AI时代的计算机通识教材，帮助学生建立对计算机科学的全面认知，理解数字世界的基本原理和思维方式。",
          en: "AI Era · Computer Science General Knowledge: A comprehensive computer science textbook for the AI era, helping students establish a comprehensive understanding of computer science and understand the basic principles and thinking methods of the digital world."
        }
      }
    ]
  },
  {
    id: "python-app-programming",
    title: {
      zh: "Python应用编程",
      en: "Python Application Programming"
    },
    description: {
      zh: "Python应用编程课程旨在让学生能够在AI的帮助下进行应用编程。课程涵盖基于Python的后端程序开发、数据库、MVC、ORM、RESTful API、基本的服务器和安全等；基于Vue和Vite的前端开发，了解HTML、CSS、JS之间的关系；第三方数据API的调用和集成，数据应用的基础；DevOps、单元测试等工程技术。通过系统的学习和实践，帮助学生快速掌握应用相关的各类工程工具的关系逻辑，培养较强的工程实施能力。",
      en: "Python Application Programming course aims to enable students to engage in application programming with the help of AI. The course covers Python-based backend development, databases, MVC, ORM, RESTful API, basic server and security; Vue and Vite-based frontend development, understanding the relationship between HTML, CSS, and JS; third-party data API calls and integration, fundamentals of data applications; DevOps, unit testing, and other engineering technologies. Through systematic learning and practice, students will quickly master the relationship logic of various engineering tools related to applications and develop strong engineering implementation capabilities."
    },
    chapters: [
      {
        id: "python-backend",
        title: {
          zh: "基于Python的后端程序开发",
          en: "Python-based Backend Development"
        },
        description: {
          zh: "学习使用Python进行后端应用开发，掌握后端开发的基本概念、框架选择和使用方法。",
          en: "Learn to use Python for backend application development, master the basic concepts, framework selection, and usage methods of backend development."
        }
      },
      {
        id: "database",
        title: {
          zh: "数据库",
          en: "Database"
        },
        description: {
          zh: "学习数据库的基本概念和操作，掌握关系型数据库的设计和使用方法。",
          en: "Learn the basic concepts and operations of databases, master the design and usage methods of relational databases."
        }
      },
      {
        id: "mvc",
        title: {
          zh: "MVC架构",
          en: "MVC Architecture"
        },
        description: {
          zh: "理解MVC（Model-View-Controller）架构模式，学习如何组织代码结构，实现关注点分离。",
          en: "Understand the MVC (Model-View-Controller) architecture pattern, learn how to organize code structure and achieve separation of concerns."
        }
      },
      {
        id: "orm",
        title: {
          zh: "ORM",
          en: "ORM"
        },
        description: {
          zh: "学习对象关系映射（ORM）的概念和使用，掌握如何使用ORM框架简化数据库操作。",
          en: "Learn the concepts and usage of Object-Relational Mapping (ORM), master how to use ORM frameworks to simplify database operations."
        }
      },
      {
        id: "restful-api",
        title: {
          zh: "RESTful API",
          en: "RESTful API"
        },
        description: {
          zh: "学习RESTful API的设计原则和实现方法，掌握如何设计和开发符合REST规范的API接口。",
          en: "Learn the design principles and implementation methods of RESTful API, master how to design and develop API interfaces that conform to REST standards."
        }
      },
      {
        id: "server-security",
        title: {
          zh: "基本的服务器和安全",
          en: "Basic Server and Security"
        },
        description: {
          zh: "了解服务器的基本概念和部署方法，学习Web应用的基本安全原则和防护措施。",
          en: "Understand the basic concepts and deployment methods of servers, learn the basic security principles and protection measures of web applications."
        }
      },
      {
        id: "vue-vite-frontend",
        title: {
          zh: "基于Vue和Vite的前端开发",
          en: "Vue and Vite-based Frontend Development"
        },
        description: {
          zh: "学习使用Vue框架和Vite构建工具进行前端开发，深入理解HTML、CSS、JavaScript之间的关系和协作方式。",
          en: "Learn to use Vue framework and Vite build tool for frontend development, deeply understand the relationship and collaboration between HTML, CSS, and JavaScript."
        }
      },
      {
        id: "third-party-api",
        title: {
          zh: "第三方数据API的调用和集成",
          en: "Third-party Data API Calls and Integration"
        },
        description: {
          zh: "学习如何调用和集成第三方数据API，了解数据应用的基础知识和实践方法。",
          en: "Learn how to call and integrate third-party data APIs, understand the fundamentals and practical methods of data applications."
        }
      },
      {
        id: "devops",
        title: {
          zh: "DevOps",
          en: "DevOps"
        },
        description: {
          zh: "了解DevOps的基本概念和实践，学习持续集成、持续部署等现代软件开发流程。",
          en: "Understand the basic concepts and practices of DevOps, learn modern software development processes such as continuous integration and continuous deployment."
        }
      },
      {
        id: "unit-testing",
        title: {
          zh: "单元测试",
          en: "Unit Testing"
        },
        description: {
          zh: "学习单元测试的基本概念和编写方法，掌握测试驱动开发（TDD）的实践思路。",
          en: "Learn the basic concepts and writing methods of unit testing, master the practical thinking of Test-Driven Development (TDD)."
        }
      }
    ],
    grade: ["G10", "G11", "G12"],
    type: {
      id: "transition",
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "让学生能够在AI的帮助下，快速掌握应用相关的各类工程工具的关系逻辑，能够在未来的学习和工作中，拥有较强的工程实施能力。",
      en: "Enable students to quickly master the relationship logic of various engineering tools related to applications with the help of AI, and develop strong engineering implementation capabilities in future learning and work."
    }
  },
  {
    id: "ap-csa",
    title: {
      zh: "AP CSA",
      en: "AP CSA"
    },
    description: {
      zh: "AP Computer Science A 是一门面向对象的编程课程，使用Java语言。课程涵盖面向对象编程的核心概念，包括类、对象、继承、多态等。通过实践项目，学生将学习如何设计和实现复杂的程序，为AP考试和未来的计算机科学学习打下坚实基础。",
      en: "AP Computer Science A is an object-oriented programming course using Java. The course covers core concepts of object-oriented programming, including classes, objects, inheritance, polymorphism, and more. Through practical projects, students will learn how to design and implement complex programs, laying a solid foundation for the AP exam and future computer science studies."
    },
    chapters: [],
    grade: ["G10", "G11"],
    type: {
      id: "foundation",
      zh: "专业基础课",
      en: "Professional Foundation Course"
    },
    target: {
      zh: "通过系统学习Java编程和面向对象设计，培养学生扎实的编程能力和计算机科学思维。课程内容严格遵循AP考试大纲，同时注重实践能力的培养，帮助学生为AP考试和未来的计算机科学学习做好准备。",
      en: "Through systematic learning of Java programming and object-oriented design, cultivate students' solid programming abilities and computer science thinking. The course content strictly follows the AP exam syllabus while emphasizing practical skills, helping students prepare for the AP exam and future computer science studies."
    }
  },
  {
    id: "ap-csp",
    title: {
      zh: "计算机科学基础",
      en: "Fundamental of Computer Science"
    },
    description: {
      zh: "Fundamental of Computer Science 是一门计算机科学原理课程，不局限于特定编程语言。课程涵盖计算机科学的核心概念，包括算法、数据、互联网、编程等。通过项目实践，学生将学习如何运用计算思维解决实际问题，理解计算机科学对社会的影响。",
      en: "Fundamental of Computer Science is a computer science principles course not limited to specific programming languages. The course covers core concepts of computer science, including algorithms, data, the internet, programming, and more. Through project practice, students will learn how to apply computational thinking to solve real-world problems and understand the impact of computer science on society."
    },
    chapters: [
      {
        id: "computer-basics",
        title: {
          zh: "计算机基础",
          en: "Computer Basics"
        },
        description: {
          zh: "计算机的基本硬件组成和操作系统的入门，要求学生理解计算机和操作系统的工作原理。",
          en: "The basic hardware composition and introductory operating system of computers, requiring students to understand the working principles of computers and operating systems."
        }
      },
      {
        id: "python",
        title: {
          zh: "Python编程和算法入门",
          en: "Python Programming and Algorithm Introduction"
        },
        description: {
          zh: "掌握 Python 语法，并学习算法的概念、评估方法。掌握经典的贪婪、分治、动态规划、启发式算法等方法。",
          en: "Master Python syntax and learn the concepts and evaluation methods of algorithms. Master classic greedy, divide-and-conquer, dynamic programming, heuristic algorithm, etc."
        }
      },
      {
        id: "data",
        title: {
          zh: "数据",
          en: "Data"
        },
        description: {
          zh: "掌握数据结构的基本概念，掌握数据的一般表达方式、压缩方式和加密方式，了解结构化数据的设计、处理和可视化。",
          en: "Master the basic concepts of data structures, understand the general expression, compression, and encryption of data, and learn about the design, processing, and visualization of structured data."
        }
      },
      {
        id: "network",
        title: {
          zh: "计算机网络",
          en: "Computer Network"
        },
        description: {
          zh: "了解计算机网络的原理、结构、协议、安全等。深入剖析5层网络结构的设计理念和实现方法。",
          en: "Understand the principles, structure, protocols, and security of computer networks. Deeply analyze the design concepts and implementation methods of the 5-layer network structure."
        }
      },
      {
        id: "creative-development",
        title: {
          zh: "技术创新和社会影响及创造性开发",
          en: "Innovation and Social Impact and Creative Development"
        },
        description: {
          zh: "了解计算机科学对社会的影响，了解计算机科学在社会中的应用，了解计算机科学在社会中的发展趋势。能够利用计算机科学解决实际问题，并能够进行创造性开发。",
          en: "Understand the impact of computer science on society, understand the application of computer science in society, and understand the development trend of computer science in society. Be able to use computer science to solve practical problems and develop creative solutions."
        }
      },

    ],
    grade: ["G10", "G11"],
    type: {
      id: "foundation",
      zh: "专业基础课",
      en: "Professional Foundation Course"
    },
    target: {
      zh: "培养学生对计算机科学原理的深入理解，发展计算思维和问题解决能力。课程不仅关注技术知识，更注重培养学生的创新思维和社会责任感，帮助他们成为数字时代的思考者和创造者。",
      en: "Cultivate students' deep understanding of computer science principles and develop computational thinking and problem-solving abilities. The course not only focuses on technical knowledge but also emphasizes cultivating students' innovative thinking and social responsibility, helping them become thinkers and creators in the digital age."
    }
  },
  {
    id: "cloud-computing",
    title: {
      zh: "云计算基础",
      en: "Cloud Computing Fundamentals"
    },
    description: {
      zh: "云计算基础课程介绍现代云计算的核心概念和技术。课程涵盖云服务模型、虚拟化技术、容器化、DevOps实践等。通过实际项目，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
      en: "The Cloud Computing Fundamentals course introduces core concepts and technologies of modern cloud computing. The course covers cloud service models, virtualization technologies, containerization, DevOps practices, and more. Through practical projects, students will learn how to design, deploy, and manage cloud applications, preparing them for future cloud computing and DevOps work."
    },
    chapters: [
      {
        id: "git-collaboration",
        title: {
          zh: "Git 与合作",
          en: "Git and Collaboration"
        },
        description: {
          zh: "学习 Git 的本地和远程命令，并初步学习通过 GitHub 进行协作。",
          en: "Learn Git's local and remote commands, and initially learn to collaborate through GitHub."
        }
      },
      {
        id: "markdown",
        title: {
          zh: "Markdown",
          en: "Markdown"
        },
        description: {
          zh: "学习 Markdown 的语法和使用方法，并初步学习通过 git 来管理纯文本文件。",
          en: "Learn Markdown syntax and usage, and initially learn to manage plain text files through git."
        }
      },
      {
        id: "linux",
        title: {
          zh: "Linux",
          en: "Linux"
        },
        description: {
          zh: "学习 Linux 的基本命令和文件系统结构，了解 Linux 的用户、文件、系统、权限等概念。能够完成软件安装、远程登录、日志管理、进程管理、用户管理等基本任务。",
          en: "Learn the basic commands and file system structure of Linux, understand the concepts of users, files, systems, and permissions in Linux. Be able to complete basic tasks such as software installation, remote login, log management, process management, and user management."
        }
      },
      {
        id: "cloud-basics",
        title: {
          zh: "云计算基础",
          en: "Cloud Computing Basics"
        },
        description: {
          zh: "学习云计算的基本概念和原理，了解云计算的架构和实现方式。了解基本的云计算服务并能够通过python编程完成简单的弹性计算编排",
          en: "Learn the basic concepts and principles of cloud computing, understand the architecture and implementation of cloud computing. Understand basic cloud computing services and be able to complete simple elastic computing orchestration through Python programming."
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      id: "transition",
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "帮助学生掌握现代云计算技术，培养云原生应用开发和DevOps实践能力。通过项目实践，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
      en: "Help students master modern cloud computing technologies and cultivate cloud-native application development and DevOps practical abilities. Through project practice, students will learn how to design, deploy, and manage cloud applications, preparing them for future cloud computing and DevOps work."
    },
    resources: [
      {
        title: {
          zh: "学生团队笔记 2025 春季学期",
          en: "Student Team Notes 2025 Spring Semester"
        },
        url: "https://github.com/Tylerzhangyi/Yungu-Highschool-G12-Cloud-Computing-Notebook-2025",
        description: {
          zh: "这是一个团队合作项目，通过GitHub协作完成课程笔记。学生通过实践掌握Git基本操作和GitHub协作流程，积累多人协同时的冲突解决等经验。",
          en: "This is a team collaboration project where course notes are completed through GitHub collaboration. Students master basic Git operations and GitHub collaboration workflows through practice, gaining experience in conflict resolution during multi-person collaboration."
        }
      }
    ]
  },
  {
    id: "machine-learning",
    title: {
      zh: "机器学习",
      en: "Machine Learning"
    },
    description: {
      zh: "机器学习课程介绍人工智能和机器学习的核心概念和方法。课程涵盖监督学习、无监督学习、深度学习等主题，通过实际项目，学生将学习如何应用机器学习算法解决实际问题，理解AI技术的基本原理和应用场景。",
      en: "The Machine Learning course introduces core concepts and methods of artificial intelligence and machine learning. The course covers topics such as supervised learning, unsupervised learning, deep learning, and more. Through practical projects, students will learn how to apply machine learning algorithms to solve real-world problems and understand the basic principles and application scenarios of AI technology."
    },
    chapters: [
      {
        id: "intro-ml",
        title: {
          zh: "Introduction to Machine Learning",
          en: "Introduction to Machine Learning"
        },
        description: {
          zh: "机器学习基础介绍，回归模型的训练和梯度下降的方法。",
          en: "Introduction to machine learning basics, regression model training and gradient descent method."
        }
      },
      {
        id: "regression",
        title: {
          zh: "多元回归分析",
          en: "Regression with Multiple Input Variables"
        },
        description: {
          zh: "基于矩阵的多元回归分析，和基于矩阵的梯度下降方法实现。",
          en: "Based on linear algebra and probability theory, introduce the basic theory and implementation methods of multiple regression analysis."
        }
      },
      {
        id: "classification",
        title: {
          zh: "Classification",
          en: "Classification"
        },
        description: {
          zh: "Sigmoid, Softmax 等用于分类的算法理论和实现",
          en: "Sigmoid, Softmax and other classification algorithms"
        }
      },
      {
        id: "neural-network",
        title: {
          zh: "Neural Network",
          en: "Neural Network"
        },
        description: {
          zh: "神经网络的结构理论及基于 Tensorflow 的实现方法.",
          en: "The theory of neural network structure and its implementation based on Tensorflow."
        }
      },
      {
        id: "unsupervised-learning",
        title: {
          zh: "Unsupervised Learning",
          en: "Unsupervised Learning"
        },
        description: {
          zh: "无监督学习算法理论和实现，包括聚类、降维等",
          en: "Unsupervised learning algorithm theory and implementation, including clustering and dimensionality reduction."
        }
      },
      {
        id: "reinforcement-learning",
        title: {
          zh: "Reinforcement Learning",
          en: "Reinforcement Learning"
        },
        description: {
          zh: "强化学习算法理论和实现，通过 Q-learning 和 DQN 等算法，基于 gym 库实现简单的训练",
          en: "Reinforcement learning algorithm theory and implementation, through Q-learning and DQN algorithms, and simple training based on the gym library."
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      id: "professional",
      zh: "专业课",
      en: "Professional Course"
    },
    target: {
      zh: "培养学生对机器学习和人工智能的深入理解，掌握核心算法和工具。通过项目实践，学生将学习如何应用机器学习解决实际问题，为未来的AI研究和应用工作做好准备。",
      en: "Cultivate students' deep understanding of machine learning and artificial intelligence, mastering core algorithms and tools. Through project practice, students will learn how to apply machine learning to solve real-world problems, preparing them for future AI research and application work."
    },
    resources: [
      {
        title: {
          zh: "Machine Learning Specialization (Coursera)",
          en: "Machine Learning Specialization (Coursera)"
        },
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        description: {
          zh: "由斯坦福大学和DeepLearning.AI提供的机器学习专项课程，由AI领域专家Andrew Ng教授主讲。课程涵盖监督学习、无监督学习、深度学习等核心主题，适合初学者学习机器学习的基础概念和实践技能。",
          en: "Machine Learning Specialization offered by Stanford University and DeepLearning.AI, taught by AI visionary Andrew Ng. The course covers core topics including supervised learning, unsupervised learning, deep learning, and more, suitable for beginners to learn fundamental machine learning concepts and practical skills."
        }
      }
    ]
  },
  {
    id: "school-team",
    title: {
      zh: "编程校队",
      en: "Programming School Team"
    },
    description: {
      zh: "编程校队的设立是为了集中在编程领域有深厚基础的同学，经过校队培养能够有能力参加应用开发/游戏开发类的竞赛（如WWDC、Hackthon等）并取得成绩。校队注重实战训练，通过项目实践和竞赛参与，培养学生的综合应用开发能力。",
      en: "The Programming School Team is established to concentrate students with a solid foundation in programming. Through team training, students will develop the ability to participate in application development/game development competitions (such as WWDC, Hackathon, etc.) and achieve results. The team focuses on practical training and cultivates students' comprehensive application development capabilities through project practice and competition participation."
    },
    chapters: [
      {
        id: "ai-assisted-development",
        title: {
          zh: "结合AI工具的应用开发训练",
          en: "AI-Assisted Application Development Training"
        },
        description: {
          zh: "通过滚动的应用需求提升学生对于应用开发的熟练度，学习如何利用AI工具提高开发效率和代码质量。",
          en: "Improve students' proficiency in application development through rolling application requirements, and learn how to use AI tools to improve development efficiency and code quality."
        }
      },
      {
        id: "internal-competitions",
        title: {
          zh: "小规模竞赛",
          en: "Small-scale Competitions"
        },
        description: {
          zh: "通过内部竞争，产生精品应用，激发学生的创新思维和竞争意识。",
          en: "Generate high-quality applications through internal competition, stimulating students' innovative thinking and competitive awareness."
        }
      },
      {
        id: "frontend-development",
        title: {
          zh: "前端开发",
          en: "Frontend Development"
        },
        description: {
          zh: "前端开发的常用框架和方法，包括React、Uniapp和相关脚手架等技术栈的学习和应用。",
          en: "Common frameworks and methods for frontend development, including learning and application of technology stacks such as React, Uniapp, and related scaffolding tools."
        }
      },
      {
        id: "database-design",
        title: {
          zh: "数据库设计",
          en: "Database Design"
        },
        description: {
          zh: "关系型数据库的数据设计方法，包括E-R图、DBMS和数据库部署方法等核心技能。",
          en: "Data design methods for relational databases, including core skills such as E-R diagrams, DBMS, and database deployment methods."
        }
      },
      {
        id: "backend-development",
        title: {
          zh: "后端开发",
          en: "Backend Development"
        },
        description: {
          zh: "后端开发的常用开发框架和方法，包括Flask、MVC架构、微服务架构等现代后端技术。",
          en: "Common development frameworks and methods for backend development, including modern backend technologies such as Flask, MVC architecture, and microservice architecture."
        }
      },
      {
        id: "team-collaboration",
        title: {
          zh: "团队合作和代码管理",
          en: "Teamwork and Code Management"
        },
        description: {
          zh: "团队合作和代码管理方法，包括Git和Github等版本控制工具的使用和最佳实践。",
          en: "Teamwork and code management methods, including the use and best practices of version control tools such as Git and Github."
        }
      },
      {
        id: "containerization",
        title: {
          zh: "容器化技术",
          en: "Containerization Technology"
        },
        description: {
          zh: "Docker工具链的学习和应用，掌握现代应用部署和容器化开发的核心技能。",
          en: "Learning and application of Docker toolchain, mastering core skills of modern application deployment and containerized development."
        }
      }
    ],
    grade: ["G9", "G10", "G11"],
    type: {
      id: "transition",
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "熟练掌握应用开发相关的技术、技能，能够快速分析用户需求、形成产品设计、系统设计，并最终完成代码开发。通过实战训练和竞赛参与，培养具备完整产品开发能力的技术人才，为参加WWDC、Hackathon等高水平竞赛做好准备。",
      en: "Master the technologies and skills related to application development, be able to quickly analyze user requirements, form product design and system design, and finally complete code development. Through practical training and competition participation, cultivate technical talents with complete product development capabilities and prepare for high-level competitions such as WWDC and Hackathon."
    },
    resources: [
      {
        title: {
          zh: "云谷高中编程校队 GitHub 组织",
          en: "Yungu High School Programming Team GitHub Organization"
        },
        url: "https://github.com/orgs/Yungu-HZ-Highschool/repositories",
        description: {
          zh: "校队成员将加入此GitHub组织，积累社区声誉，开源项目作品，共同建设技术社区。",
          en: "Team members will join this GitHub organization to accumulate community reputation, open source project works, and jointly build a technical community."
        }
      }
    ]
  }
];

const studentReviews: StudentReview[] = [
  {
    id: "1",
    content: {
      zh: "【译】Eric老师是一位非常注重实践的教师。在他的课堂上，我总能学到大量实用的计算机知识。从网络安全到Linux命令，从网站编程到机器学习，Eric老师教会我们像程序员一样思考。作为教师，他不仅传授编程知识，更培养我们的编程思维和用技术解决问题的能力。Eric老师的课程是我上过最好的编程课，内容充实又充满幽默感，通过一个接一个的项目帮助我们巩固各种编程知识。",
      en: "Mr. Eric is a very practical teacher. In his class, I always learn a lot of useful computer knowledge. From network security to Linux commands, from website programming to machine learning, Mr. Eric teaches us to think like programmers. As a teacher, he not only teaches us programming and knowledge, but also gives us programming thinking and the ability to solve problems with technology. Mr. Eric's class is the best programming class I have ever taken. It is rich in content and humorous at the same time. Through one project after another, he helps us consolidate various programming knowledge."
    },
    studentId: "2",
    year: 2025
  }
];

const students: Student[] = [
  {
    id: "0",
    name: {
      zh: "吕一凡",
      en: "Yifan Lyu"
    },
    github: "",
    courses: [courses.find(course => course.id === "ap-csp")!],
    university: "California State University, Santa Cruz",
    major: "Computer Science",
    graduationYear: 2024,
    avatar: ""
  },
  {
    id: "1",
    name: {
      zh: "周子轶",
      en: "Ziyi Zhou"
    },
    github: "https://github.com/ZiFeng11",
    courses: [courses.find(course => course.id === "ap-csp")!],
    university: "Stevens Institute of Technology",
    major: "Computer Science",
    graduationYear: 2024,
    avatar: "https://res.mojalab.cn/students/ZiFeng11.jpeg"
  },
  {
    id: "2",
    name: {
      zh: "胡绚琦",
      en: "Xuanqi Hu"
    },
    github: "https://github.com/LiMuma",
    courses: [courses.find(course => course.id === "ap-csp")!,
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!],
    university: "California State University, Davis",
    major: "Computer Engineering",
    graduationYear: 2025,
    avatar: "https://res.mojalab.cn/students/LiMuma.png"
  },
  {
    id: "3",
    name: {
      zh: "赵轩",
      en: "Xuan Zhao"
    },
    github: "https://github.com/YUHOUCHAXING",
    courses: [courses.find(course => course.id === "ap-csp")!,
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!],
    university: "California State University, Riverside",
    major: "Robotics",
    graduationYear: 2025,
    avatar: "https://res.mojalab.cn/students/YUHOUCHAXING.jpeg"
  },
  {
    id: "4",
    name: {
      zh: "张翼",
      en: "Yi Zhang"
    },
    github: "https://github.com/Tylerzhangyi",
    website: "https://tylerzhangyi.github.io/",
    courses: [
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!,
               courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2026,
    avatar: "https://res.mojalab.cn/students/Tylerzhangyi.png"
  },
  {
    id: "12",
    name: {
      zh: "马思嘉",
      en: "Sijia Ma"
    },
    github: "https://github.com/Mathewmsj",
    website: "https://mathewmsj.github.io/",
    courses: [courses.find(course => course.id === "ap-csa")!,
      courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2026,
    avatar: "https://res.mojalab.cn/students/Mathewmsj.png"
  },
  {
    id: "9",
    name: {
      zh: "张羽阳",
      en: "Yuyang Zhang"
    },
    github: "https://github.com/Ymm0709",
    website: "https://ymm0709.github.io/",
    courses: [courses.find(course => course.id === "ap-csa")!,
      courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2026,
    avatar: "https://res.mojalab.cn/students/Ymm0709.png"
  },
  {
    id: "10",
    name: {
      zh: "王越舟",
      en: "Yuezhou Wang"
    },
    github: "https://github.com/WRAJE",
    website: "https://wraje.github.io/#/",
    courses: [courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2027,
    avatar: "https://res.mojalab.cn/students/WRAJE.jpeg"
  },
  {
    id: "11",
    name: {
      zh: "邓睿涵",
      en: "Ruihan Deng"
    },
    github: "https://github.com/dengruihan",
    website: "https://dengruihan.github.io/",
    courses: [courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2027,
    avatar: "https://res.mojalab.cn/students/dengruihan.png"
  },
  {
    id: "5",
    name: {
      zh: "王家锐",
      en: "Jiarui Wang"
    },
    github: "https://github.com/garywanggali",
    website: "https://garywanggali.github.io/",
    courses: [courses.find(course => course.id === "school-team")!,
               courses.find(course => course.id === "python-app-programming")!],
    university: "",
    major: "",
    graduationYear: 2028,
    avatar: "https://res.mojalab.cn/students/garywanggali.png"
  },
  {
    id: "6",
    name: {
      zh: "寇子谦",
      en: "Ziqian Kou"
    },
    github: "https://github.com/kouziqian",
    courses: [courses.find(course => course.id === "ict")!,
      courses.find(course => course.id === "school-team")!,
              
    ],
    university: "",
    major: "",
    graduationYear: 2028,
    avatar: "https://res.mojalab.cn/students/kouziqian.jpeg"
  },
  {
    id: "7",
    name: {
      zh: "郑博纬",
      en: "Bowei Zhen"
    },
    github: "https://github.com/chihairou111",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2029,
    avatar: "https://res.mojalab.cn/students/chihairou111.png"
  },
  {
    id: "8",
    name: {
      zh: "朱殷磊",
      en: "Yinlei Zhu"
    },
    github: "",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2029,
    avatar: ""
  },
  {
    id: "13",
    name: {
      zh: "谢新晔",
      en: "Xinye Xie"
    },
    github: "",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2029,
    avatar: ""
  },
  {
    id: "14",
    name: {
      zh: "宋一豪",
      en: "Yihao Song"
    },
    github: "",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2029,
    avatar: ""
  },
];

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  return courses.find(course => course.id === id);
}

export async function getChaptersByCourseId(courseId: string): Promise<Chapter[]> {
  const course = await getCourseById(courseId);
  return course?.chapters || [];
}

export async function getStudentReviews(): Promise<StudentReview[]> {
  return studentReviews;
}

export async function getStudents(): Promise<Student[]> {
  return students;
}

const studentProjects: StudentProject[] = [
  {
    id: "pcb",
    title: {
      zh: "PCB设计和硬件开发",
      en: "PCB Design & Hardware Development"
    },
    description: {
      zh: "学生张翼、马思嘉开发了F18战斗机驾驶舱中的MFD（多功能显示器）。通过DCS-Bios和OpenHornet两个项目实现了一比一复刻并与DCS模拟器联动，是一个功能完整可用的模拟器外设。此后由这两位同学主导进行了PCB的设计，经过多轮设计迭代，最终替换了杂乱的信号线，实现了更加稳定的结构。",
      en: "Students Yi Zhang and Sijia Ma developed an MFD (Multi-Function Display) for the F-18 fighter cockpit. Through DCS-BIOS and OpenHornet projects, they achieved a 1:1 replica that integrates with DCS simulators, creating a fully functional simulator peripheral. The students then led PCB design, going through multiple design iterations to replace messy signal wires and achieve a more stable structure."
    },
    detail: {
      zh: "这个项目展示了高级硬件开发技能。学生张翼、马思嘉成功创建了一个功能完整的F18战斗机驾驶舱模拟器的多功能显示器（MFD）。项目包括：\n\n• 与DCS-BIOS和OpenHornet开源项目的集成\n• 一比一复刻设计，匹配真实F18驾驶舱规格\n• 与DCS飞行模拟器的实时数据同步\n• 定制PCB设计和制造\n• 多轮设计迭代以优化信号路由\n• 用整洁的PCB布局替换杂乱的布线\n• 提升系统的稳定性和可靠性\n\n最终产品是一个专业级的模拟器外设，提供沉浸式飞行模拟体验。",
      en: "This project demonstrates advanced hardware development skills. Students Yi Zhang and Sijia Ma successfully created a fully functional Multi-Function Display (MFD) for the F-18 fighter cockpit simulator. The project involved:\n\n• Integration with DCS-BIOS and OpenHornet open-source projects\n• 1:1 replica design matching real F-18 cockpit specifications\n• Real-time data synchronization with DCS flight simulator\n• Custom PCB design and manufacturing\n• Multiple design iterations to optimize signal routing\n• Replacement of messy wiring with clean PCB layout\n• Enhanced stability and reliability of the system\n\nThe final product is a professional-grade simulator peripheral that provides an immersive flight simulation experience."
    },
    images: [
      "https://res.mojalab.cn/images/student_projects/pcb1.png",
      "https://res.mojalab.cn/images/student_projects/pcb2.png"
    ],
    students: [
      { zh: "张翼", en: "Yi Zhang" },
      { zh: "马思嘉", en: "Sijia Ma" }
    ],
    technologies: ["PCB Design", "Hardware", "DCS-BIOS", "OpenHornet", "Flight Simulator"]
  },
  {
    id: "robotics",
    title: {
      zh: "机器人方向",
      en: "Robotics"
    },
    description: {
      zh: "学生张翼、马思嘉、胡绚琦、赵轩通过StackForce的开源轮足机器人项目，完成安装、调试复杂的轮足机器人并参加了阿里巴巴机器人运动会。",
      en: "Students Yi Zhang, Sijia Ma, Xuanqi Hu, and Xuan Zhao completed the installation and debugging of a complex wheel-legged robot through StackForce's open-source wheel-legged robot project, and participated in Alibaba's Robotics Sports Day."
    },
    detail: {
      zh: "四名学生组成的团队成功组装、配置并参加了复杂轮足机器人的竞赛。项目亮点：\n\n• 复杂机器人系统的组装和集成\n• 机器人控制系统的配置和调试\n• 参加阿里巴巴机器人运动会竞赛\n• 开源机器人框架（StackForce）的应用\n• 团队协作和问题解决能力\n• 真实机器人竞赛经验\n\n团队在机器人工程方面展现了强大的技术能力，并成功参加了大型机器人赛事。",
      en: "A team of four students successfully assembled, configured, and competed with a complex wheel-legged robot. The project highlights:\n\n• Assembly and integration of complex robotic systems\n• Configuration and debugging of robotic control systems\n• Participation in Alibaba Robotics Sports Day competition\n• Application of open-source robotics frameworks (StackForce)\n• Team collaboration and problem-solving skills\n• Real-world robotics competition experience\n\nThe team demonstrated strong technical capabilities in robotics engineering and successfully competed in a major robotics event."
    },
    images: [
      "https://res.mojalab.cn/images/student_projects/robotic.png"
    ],
    students: [
      { zh: "张翼", en: "Yi Zhang" },
      { zh: "马思嘉", en: "Sijia Ma" },
      { zh: "胡绚琦", en: "Xuanqi Hu" },
      { zh: "赵轩", en: "Xuan Zhao" }
    ],
    technologies: ["Robotics", "Wheel-Legged", "StackForce", "Robot Control", "Competition"]
  },
  {
    id: "ai",
    title: {
      zh: "AI方向",
      en: "AI Application"
    },
    description: {
      zh: "学生邓睿涵、王越舟应用GLM的开源模型实现了对福寿螺的识别。项目已开源。",
      en: "Students Ruihan Deng and Yuezhou Wang applied GLM's open-source model to achieve recognition of Golden Apple Snails. The project is open source."
    },
    detail: {
      zh: "学生邓睿涵、王越舟开发了一个基于AI的福寿螺卵自动检测和计数系统。项目特点：\n\n• 应用GLM-Edge-V-2B开源多模态模型\n• 用于目标检测和计数的计算机视觉\n• 在环境监测中的实际应用\n• GitHub上的开源项目\n• 使用AI技术解决实际问题\n• 集成边缘AI模型以实现高效处理\n\n系统允许用户上传包含福寿螺卵的图片并自动计数，展示了实用的AI应用技能。",
      en: "Students Ruihan Deng and Yuezhou Wang developed an AI-powered system for automatic detection and counting of Golden Apple Snail eggs. The project features:\n\n• Application of GLM-Edge-V-2B open-source multimodal model\n• Computer vision for object detection and counting\n• Practical application in environmental monitoring\n• Open-source project available on GitHub\n• Real-world problem solving with AI technology\n• Integration of edge AI models for efficient processing\n\nThe system allows users to upload images containing snail eggs and automatically counts them, demonstrating practical AI application skills."
    },
    images: [
      "https://res.mojalab.cn/images/student_projects/ai.png"
    ],
    students: [
      { zh: "邓睿涵", en: "Ruihan Deng" },
      { zh: "王越舟", en: "Yuezhou Wang" }
    ],
    technologies: ["AI", "GLM", "Computer Vision", "Object Detection", "Python"],
    githubUrl: "https://github.com/dengruihan/GLM-Edge-V-2B--Monitoring_Species",
    badge: {
      text: {
        zh: "开源",
        en: "Open Source"
      }
    }
  }
];

export async function getStudentProjects(): Promise<StudentProject[]> {
  return studentProjects;
}

export async function getStudentProjectById(id: string): Promise<StudentProject | undefined> {
  return studentProjects.find(project => project.id === id);
} 
