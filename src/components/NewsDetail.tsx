'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useRouter } from 'next/navigation';

interface NewsItem {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  content: {
    en: string;
    zh: string;
  };
  date: string;
  author?: string;
  sourceUrl?: string;
  fullContent?: string;
  videoUrl?: string;
  thumbnail?: string;
}

export function NewsDetail({ newsItem }: { newsItem: NewsItem }) {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {language === 'en' ? 'Back to News' : '返回新闻列表'}
      </button>
      <article className="bg-white rounded-lg shadow p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{newsItem.title[language]}</h1>
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
            <p className="text-gray-700 mb-6">{newsItem.content[language]}</p>
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