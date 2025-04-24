'use client';

import { getCourses } from '@/lib/api/teaching';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useEffect, useState } from 'react';
import { Course } from '@/lib/api/teaching';

export default function TeachingPage() {
  const { t, language } = useLanguage();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses();
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('teaching.philosophy')}</h2>
        <div className="prose max-w-none space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('teaching.dualWorld')}</h3>
            <p className="text-blue-800">
              {t('teaching.dualWorldDesc')}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-3">{t('teaching.aiThinking')}</h3>
            <p className="text-green-800">
              {t('teaching.aiThinkingDesc')}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">{t('teaching.aiCollaboration')}</h3>
            <p className="text-purple-800">
              {t('teaching.aiCollaborationDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('teaching.courses')}</h1>
        
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900">{course.title[language]}</h2>
                <div className="flex items-center space-x-2">
                  {course.grade.map((grade) => (
                    <span
                      key={`${course.id}-${grade}`}
                      className="px-2 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
                    >
                      {grade}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    {course.type[language]}
                  </span>
                </div>
              </div>
              <div className="prose max-w-none mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('teaching.courseIntro')}</h3>
                <p className="text-gray-700">
                  {course.description?.[language] || t('teaching.noDescription')}
                </p>
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-2">{t('teaching.courseTarget')}</h4>
                  <p className="text-gray-700">{course.target[language]}</p>
                </div>
                {course.resources && course.resources.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">{t('teaching.courseResources')}</h4>
                    <div className="space-y-2">
                      {course.resources.map((resource, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="text-md font-medium text-gray-900 mb-1">{resource.title[language]}</h5>
                          <p className="text-gray-600 text-sm mb-2">{resource.description[language]}</p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            {t('teaching.visitResource')} →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {course.chapters.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{t('teaching.courseOutline')}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {course.chapters.map((chapter) => (
                      <li key={chapter.id}>
                        {chapter.title[language]}
                        {chapter.description && (
                          <span className="text-gray-500 text-sm ml-2">
                            - {chapter.description[language]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('teaching.studentReviews')}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700 italic">
              {t('teaching.review1')}
            </p>
            <p className="text-gray-600 text-sm mt-2">- {t('teaching.studentName')}, 2023</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700 italic">
              {t('teaching.review2')}
            </p>
            <p className="text-gray-600 text-sm mt-2">- {t('teaching.studentName')}, 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
} 