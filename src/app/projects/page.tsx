'use client';

import { useEffect, useState, useRef, useMemo, Suspense } from 'react';
import { Project } from '@/lib/api/projects';
import Image from 'next/image';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
}

function ProjectsContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const projectId = searchParams.get('project');
  const { language } = useLanguage();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.reverse());
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projectId) {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        const headerOffset = 30;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [projectId]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            isTarget={projectId === project.id.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectSection({ project, isTarget }: { project: Project; isTarget: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; url: string; index: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const allMedia = useMemo(() => [
    ...(project.videos?.map(url => ({ type: 'video' as const, url })) || []),
    ...(project.images?.map(url => ({ type: 'image' as const, url })) || [])
  ], [project.videos, project.images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isTarget && sectionRef.current) {
      const headerOffset = 30; // 顶部间距
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [isTarget]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;

      if (e.key === 'Escape') {
        setSelectedMedia(null);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allMedia.findIndex(
          media => media.url === selectedMedia.url
        );
        if (currentIndex > 0) {
          setSelectedMedia({
            type: allMedia[currentIndex - 1].type,
            url: allMedia[currentIndex - 1].url,
            index: currentIndex - 1
          });
        }
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allMedia.findIndex(
          media => media.url === selectedMedia.url
        );
        if (currentIndex < allMedia.length - 1) {
          setSelectedMedia({
            type: allMedia[currentIndex + 1].type,
            url: allMedia[currentIndex + 1].url,
            index: currentIndex + 1
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, allMedia]);

  const handlePrev = () => {
    if (!selectedMedia) return;
    const currentIndex = allMedia.findIndex(
      media => media.url === selectedMedia.url
    );
    if (currentIndex > 0) {
      setSelectedMedia({
        type: allMedia[currentIndex - 1].type,
        url: allMedia[currentIndex - 1].url,
        index: currentIndex - 1
      });
    }
  };

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = allMedia.findIndex(
      media => media.url === selectedMedia.url
    );
    if (currentIndex < allMedia.length - 1) {
      setSelectedMedia({
        type: allMedia[currentIndex + 1].type,
        url: allMedia[currentIndex + 1].url,
        index: currentIndex + 1
      });
    }
  };

  return (
    <div 
      ref={sectionRef} 
      id={`project-${project.id}`}
      className={`bg-white rounded-lg shadow-md p-6 ${isTarget ? 'ring-2 ring-blue-500' : ''}`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? project.titleEn : project.title}
        </h2>
        <p className="text-gray-600">
          {language === 'en' ? project.companyEn : project.company} · {project.period}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {language === 'en' ? 'Project Description' : '项目描述'}
        </h3>
        <p className="text-gray-700">
          {language === 'en' ? project.descriptionEn : project.description}
        </p>
      </div>

      {project.newsLinks && project.newsLinks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            {language === 'en' ? 'Related News' : '相关新闻'}
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {project.newsLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {language === 'en' ? link.titleEn : link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {allMedia.length > 0 && (
        <div className="mb-6">
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4" style={{ minWidth: 'min-content' }}>
                {allMedia.map((media, index) => (
                  <div 
                    key={index} 
                    className="relative w-64 h-48 flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedMedia({ type: media.type, url: media.url, index })}
                  >
                    {isVisible && (
                      media.type === 'video' ? (
                        <video
                          src={media.url}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Image
                          src={media.url}
                          alt={`${language === 'en' ? project.titleEn : project.title} - ${language === 'en' ? 'Image' : '图片'} ${index + 1}`}
                          width={256}
                          height={192}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                        />
                      )
                    )}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {language === 'en' ? 'Technical Details' : '技术细节'}
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {(language === 'en' ? project.technicalDetailsEn : project.technicalDetails).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {language === 'en' ? 'Technologies' : '使用技术'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {(language === 'en' ? project.technologiesEn : project.technologies).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>


      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <Image
                src={selectedMedia.url}
                alt={`${language === 'en' ? project.titleEn : project.title} - ${language === 'en' ? 'Image' : '图片'} ${selectedMedia.index + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                className="w-full h-full object-contain"
                autoPlay
              />
            )}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-opacity"
              style={{ display: allMedia.findIndex(media => media.url === selectedMedia.url) > 0 ? 'flex' : 'none' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-opacity"
              style={{ display: allMedia.findIndex(media => media.url === selectedMedia.url) < allMedia.length - 1 ? 'flex' : 'none' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
