'use client';

import { useState, useEffect } from 'react';
import { getPatents } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Patent } from '@/lib/api/patents';

export default function PatentsPage() {
  const { t } = useLanguage();
  const [patents, setPatents] = useState<Patent[]>([]);

  useEffect(() => {
    const fetchPatents = async () => {
      const patentsData = await getPatents();
      setPatents(patentsData);
    };
    fetchPatents();
  }, []);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('patents.title')}</h1>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="text-gray-600">
            {t('common.lang') === 'zh' 
              ? '20+创新工作由于创造性和业务价值考虑，被内部保护，未进行公开专利申请'
              : 'More than 20 innovative works are internally protected due to creativity and business value considerations, without public patent applications'}
          </p>
        </div>
        
        <div className="space-y-8">
          {patents.map((patent: Patent) => (
            <div key={patent.id} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">{patent.title[t('common.lang') as keyof typeof patent.title]}</h2>
                    {patent.url && (
                      <a
                        href={patent.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        {t('common.viewDetails')}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">
                    {t('patents.patentNumber')}：{patent.patentNumber} | {t('patents.status')}：{patent.status[t('common.lang') as keyof typeof patent.status]}
                  </p>
                  <p className="text-gray-600">
                    {t('patents.inventors')}：{patent.inventors.join(', ')}
                  </p>
                  <p className="text-gray-600">
                    {t('patents.filingDate')}：{patent.filingDate}
                    {patent.grantDate && ` | ${t('patents.grantDate')}：${patent.grantDate}`}
                  </p>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('patents.abstract')}</h3>
                    <p className="text-gray-700">{patent.abstract[t('common.lang') as keyof typeof patent.abstract]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 