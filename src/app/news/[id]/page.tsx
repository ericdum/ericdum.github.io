import { getNews } from '@/lib/api/news';
import { notFound } from 'next/navigation';
import { NewsDetail } from '@/components/NewsDetail';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// 生成静态参数
export async function generateStaticParams() {
  const news = await getNews();
  return news.map(item => ({
    id: item.id.toString()
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const resolvedParams = await props.params;
  const news = await getNews();
  const newsItem = news.find(item => item.id.toString() === resolvedParams.id);
  
  if (!newsItem) {
    return {
      title: '新闻未找到',
      description: '抱歉，您请求的新闻内容不存在。'
    };
  }

  return {
    title: newsItem.title.zh,
    description: newsItem.content.zh,
    openGraph: {
      title: newsItem.title.zh,
      description: newsItem.content.zh,
      images: newsItem.thumbnail ? [newsItem.thumbnail] : [],
    },
  };
}

export default async function NewsDetailPage(props: Props) {
  const resolvedParams = await props.params;
  const news = await getNews();
  const newsItem = news.find((item) => item.id === parseInt(resolvedParams.id)); 

  if (!newsItem) {
    notFound();
  }

  return <NewsDetail newsItem={newsItem} />;
} 