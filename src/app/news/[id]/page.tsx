import { getNews } from '@/lib/api';
import { notFound } from 'next/navigation';
import { NewsDetail } from '@/components/NewsDetail';

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

export default async function NewsDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const news = await getNews();
  const newsItem = news.find((item) => item.id === parseInt(id)); 

  if (!newsItem) {
    notFound();
  }

  return <NewsDetail newsItem={newsItem} />;
} 