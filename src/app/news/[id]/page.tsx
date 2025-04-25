import { getNews } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);
  const news = await getNews();
  const newsItem = news.find((item) => item.id === parseInt(id)); 
  // console.log(newsItem);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{newsItem.title}</h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-4">{newsItem.author}</span>
            <span>{newsItem.date}</span>
          </div>
          {newsItem.sourceUrl && (
            <div className="mt-4 text-sm text-gray-500">
              原文链接: <a href={newsItem.sourceUrl} target="_blank">{newsItem.sourceUrl}</a>
            </div>
          )}
        </div>
        
        {newsItem.videoUrl && (
          <div className="mb-8">
            <video
              controls
              className="w-full rounded-lg"
              src={newsItem.videoUrl}
              poster="/video-poster.jpg"
            >
              您的浏览器不支持视频播放
            </video>
          </div>
        )}

        <div className="prose max-w-none">
          {newsItem.fullContent ? (
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: newsItem.fullContent }}
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#333',
              }}
            />
          ) : (
            <p className="text-gray-700 mb-6">{newsItem.content}</p>
          )}
          
          {newsItem.sourceUrl && (
            <div className="mt-8 pt-4 border-t border-gray-200">
              <a
                href={newsItem.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                查看原文 →
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  );
} 