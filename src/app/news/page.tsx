'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getNews } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { trackThumbnailClick } from '@/lib/analytics';

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
  thumbnail?: string;
}

export default function NewsPage() {
  const { t, language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await getNews();
        setNews(newsData);
      } catch (err) {
        setError('Failed to load news');
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('news.title')}</h1>
        <div className="space-y-6">
          {news.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No news available</p>
          ) : (
            news.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-6 last:border-0">
                <a 
                  href={`/news/${item.id}`} 
                  className="block hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  onClick={() => trackThumbnailClick('news', item.id, item.title[language])}
                >
                  <div className="flex gap-6">
                    {item.thumbnail && (
                      <div className="w-48 h-32 flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title[language]}
                          width={192}
                          height={128}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{item.title[language]}</h2>
                      <p className="text-gray-700 mb-2 line-clamp-3">{item.content[language]}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        {item.author && <span className="mr-4">{item.author}</span>}
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
} 