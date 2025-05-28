'use client';

import { getCourses, getStudentReviews, StudentReview, getStudents, Student } from '@/lib/api/teaching';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useEffect, useState } from 'react';
import { Course } from '@/lib/api/teaching';

type CourseType = {
  id: string;
  zh: string;
  en: string;
};

// 添加年级计算函数
const calculateGrade = (graduationYear: number): string => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript月份从0开始
  
  // 如果当前月份在9月之前，学年还未开始，需要减1
  const academicYear = currentMonth < 9 ? currentYear - 1 : currentYear;
  
  // 计算年级
  const gradeDiff = graduationYear - academicYear;
  if (gradeDiff > 4) return 'Pre-G9';
  if (gradeDiff === 4) return 'G9';
  if (gradeDiff === 3) return 'G10';
  if (gradeDiff === 2) return 'G11';
  if (gradeDiff === 1) return 'G12';
  return 'Graduated';
};

// 添加获取课程类型样式的函数
const getCourseTypeStyle = (type: CourseType): { bgColor: string; textColor: string } => {
  const typeMap: Record<string, { bgColor: string; textColor: string }> = {
    'popular-science': { bgColor: 'bg-green-100', textColor: 'text-green-700' },
    'foundation': { bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
    'transition': { bgColor: 'bg-red-100', textColor: 'text-red-700' }
  };
  
  return typeMap[type.id] || { bgColor: 'bg-gray-100', textColor: 'text-gray-700' };
};

export default function TeachingPage() {
  const { t, language } = useLanguage();
  const [courses, setCourses] = useState<Course[]>([]);
  const [reviews, setReviews] = useState<StudentReview[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  // 添加默认头像
  const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23CBD5E1'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

  // 添加获取头像的函数
  const getAvatar = (avatar: string | undefined) => {
    if (!avatar) return defaultAvatar;
    // 如果头像URL无效，也返回默认头像
    try {
      new URL(avatar);
      return avatar;
    } catch {
      return defaultAvatar;
    }
  };

  // 添加平滑滚动函数
  const scrollToCourse = (courseId: string) => {
    const element = document.getElementById(`course-${courseId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedCourses, fetchedReviews, fetchedStudents] = await Promise.all([
        getCourses(),
        getStudentReviews(),
        getStudents()
      ]);
      setCourses(fetchedCourses);
      setReviews(fetchedReviews);
      setStudents(fetchedStudents);
    };
    fetchData();
  }, []);

  const getStudentName = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    return student?.name[language] || '';
  };

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
            <div key={course.id} id={`course-${course.id}`} className="border-b border-gray-200 pb-6 scroll-mt-20">
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
                  <span className={`px-2 py-1 text-sm font-medium rounded-full ${getCourseTypeStyle(course.type).bgColor} ${getCourseTypeStyle(course.type).textColor}`}>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('teaching.courseStudents')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map(student => (
            <div key={student.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 flex-shrink-0">
                  {student.github ? (
                    <a
                      href={student.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={getAvatar(student.avatar)}
                        alt={student.name[language]}
                        className="w-full h-full rounded-full bg-gray-100 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = defaultAvatar;
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      src={getAvatar(student.avatar)}
                      alt={student.name[language]}
                      className="w-full h-full rounded-full bg-gray-100 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = defaultAvatar;
                      }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    {student.name[language]}
                    {student.github && (
                      <a
                        href={student.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </h3>
                  {student.university ? (
                    <>
                      <p className="text-sm text-gray-600">
                        {student.university} · {student.major}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t('teaching.graduationYear')}: {student.graduationYear}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600">
                      {t('teaching.currentGrade')}: {calculateGrade(student.graduationYear)}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {student.courses.map(course => (
                    <button
                      key={course.id}
                      onClick={() => scrollToCourse(course.id)}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getCourseTypeStyle(course.type).bgColor} ${getCourseTypeStyle(course.type).textColor} hover:opacity-80 transition-opacity cursor-pointer`}
                    >
                      {course.title[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('teaching.studentReviews')}</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-700 italic">
                {review.content[language]}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                - {getStudentName(review.studentId)}, {review.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 