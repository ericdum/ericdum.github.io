export interface Life {
  interests: {
    category: string;
    items: {
      title: string;
      description: string;
      url?: string;
      events?: {
        name: string;
        topic: string;
        date: string;
      }[];
      gallery?: {
        title: string;
        date: string;
        location: string;
      }[];
      recentTrips?: {
        destination: string;
        date: string;
        highlights: string[];
      }[];
    }[];
  }[];
}

const life: Life = {
  interests: [
    {
      category: "技术分享",
      items: [
        {
          title: "技术博客",
          description: "定期在个人博客分享技术心得和经验",
          url: "https://blog.example.com"
        },
        {
          title: "技术演讲",
          description: "在各大技术会议分享技术经验",
          events: [
            {
              name: "QCon 2023",
              topic: "基于深度学习的航空调度优化实践",
              date: "2023-10"
            }
          ]
        }
      ]
    },
    {
      category: "个人生活",
      items: [
        {
          title: "摄影",
          description: "热爱摄影，擅长风景和人文摄影",
          gallery: [
            {
              title: "西湖晨雾",
              date: "2023-09",
              location: "杭州"
            }
          ]
        },
        {
          title: "旅行",
          description: "喜欢探索不同的文化和风景",
          recentTrips: [
            {
              destination: "日本京都",
              date: "2023-08",
              highlights: ["古寺庙", "传统园林"]
            }
          ]
        }
      ]
    }
  ]
};

export async function getLife() {
  return life;
} 