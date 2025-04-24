import { getNews } from '@/lib/api';
import { notFound } from 'next/navigation';
import { NewsDetail } from '@/components/NewsDetail';

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);
  const news = await getNews();
  const newsItem = news.find((item) => item.id === parseInt(id)); 

  if (!newsItem) {
    notFound();
  }

  return <NewsDetail newsItem={newsItem} />;
} 