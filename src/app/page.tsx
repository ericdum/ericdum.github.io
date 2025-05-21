'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProfile, getProjects, getNews, getLife, getPatents } from '@/lib/api';
import { ProjectCard } from '@/components/project-card';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LoadingOverlay } from '@/components/LoadingOverlay';

interface Patent {
  id: number;
  title: {
    zh: string;
    en: string;
  };
  patentNumber: string;
  filingDate: string;
  status: {
    zh: string;
    en: string;
  };
}

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

export default function Home() {
  const { t, language } = useLanguage();
  const [profile, setProfile] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [life, setLife] = useState<any>(null);
  const [patents, setPatents] = useState<Patent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [profileData, projectsData, newsData, lifeData, patentsData] = await Promise.all([
          getProfile(),
          getProjects(),
          getNews(),
          getLife(),
          getPatents(),
        ]);
        setProfile(profileData);
        setProjects(projectsData);
        setNews(newsData);
        setLife(lifeData);
        setPatents(patentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (!profile) return null;

  return (
    <div className="space-y-8">

      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Image
              src="https://res.dreamhangar.cn/avatar.avif"
              alt="Profile Photo"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name[language]}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{profile.title[language]}</h2>
            <p className="text-gray-700 mb-2">{profile.currentPosition[language]}</p>
            <p className="text-gray-700 mb-4">
              {profile.bio[language]}
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://github.com/ericdum" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a target="_blank" href="http://linkedin.com/in/lichen-dai" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {profile.seekingOpportunities && (
        <section className="bg-blue-50 border border-blue-200 rounded-lg shadow p-6">
          <p className="text-blue-800 text-lg">
            {profile.seekingOpportunities[language]}
          </p>
        </section>
      )}

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...projects].reverse().slice(0, 9).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/projects"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('common.viewMore')}
          </a>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('patents.title')}</h2>
        <div className="space-y-4">
          {patents.map((patent: Patent) => (
            <div key={patent.id} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{patent.title[language]}</h3>
                  <p className="text-gray-600">{t('patents.patentNumber')}：{patent.patentNumber}</p>
                  <p className="text-gray-600">{t('patents.filingDate')}：{patent.filingDate}</p>
                  <p className="text-gray-600">{t('patents.status')}：{patent.status[language]}</p>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  patent.status[language] === t('patents.granted') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {patent.status[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('news.title')}</h2>
        <div className="space-y-4">
          {news.map((item: NewsItem) => (
            <div key={item.id} className="border-b border-gray-200 pb-4 last:border-0">
              <a href={`/news/${item.id}`} className="block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className="flex gap-4">
                  {item.thumbnail && (
                    <div className="w-32 h-24 flex-shrink-0">
                      <Image
                        src={item.thumbnail}
                        alt={item.title[language]}
                        width={128}
                        height={96}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.title[language]}</h3>
                    <p className="text-gray-700 line-clamp-2">{item.content[language]}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      {item.author && <span className="mr-4">{item.author}</span>}
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
