import { getNews } from '@/lib/api';
import { notFound } from 'next/navigation';
import { NewsDetail } from '@/components/NewsDetail';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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