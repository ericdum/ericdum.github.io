"use client";

import { getProjects, getProfile } from '@/lib/api';
import { useState, useEffect } from 'react';
import type { Project } from '@/lib/api/projects';
import type { Profile } from '@/lib/api/profile';
import { LazyMedia } from '@/components/ui/lazy-media';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const projectsData = await getProjects();
      const profileData = await getProfile();
      setProjects(projectsData);
      setProfile(profileData);
    };
    loadData();
  }, []);

  useEffect(() => {
    // 检查 URL 中是否有项目 ID
    const hash = window.location.hash;
    if (hash) {
      const projectId = hash.replace('#project-', '');
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        // 使用平滑滚动
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [projects]); // 当项目数据加载完成后执行

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!currentProject) return;

      const allMedia = [
        ...(currentProject.videos || []).map(v => ({ url: v, type: 'video' as const })),
        ...(currentProject.images || []).map(i => ({ url: i, type: 'image' as const }))
      ];

      if (event.key === 'Escape') {
        setSelectedMedia(null);
        setCurrentProject(null);
        setCurrentIndex(0);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const newIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
        setCurrentIndex(newIndex);
        setSelectedMedia(allMedia[newIndex]);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        const newIndex = (currentIndex + 1) % allMedia.length;
        setCurrentIndex(newIndex);
        setSelectedMedia(allMedia[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentProject, currentIndex]);

  const handleMediaClick = (project: Project, media: string, index: number) => {
    setCurrentProject(project);
    setCurrentIndex(index);
    setSelectedMedia({
      url: media,
      type: media.endsWith('.mov') ? 'video' : 'image'
    });
  };

  const handlePrevMedia = () => {
    if (!currentProject) return;
    const allMedia = [
      ...(currentProject.videos || []).map(v => ({ url: v, type: 'video' as const })),
      ...(currentProject.images || []).map(i => ({ url: i, type: 'image' as const }))
    ];
    const newIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(allMedia[newIndex]);
  };

  const handleNextMedia = () => {
    if (!currentProject) return;
    const allMedia = [
      ...(currentProject.videos || []).map(v => ({ url: v, type: 'video' as const })),
      ...(currentProject.images || []).map(i => ({ url: i, type: 'image' as const }))
    ];
    const newIndex = (currentIndex + 1) % allMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(allMedia[newIndex]);
  };

  if (!profile) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">技术项目</h1>
        
        <div className="space-y-8">
          {[...projects].reverse().map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                  <p className="text-gray-600 mt-1">
                    {project.company} | {project.role} | {project.period}
                  </p>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="mb-4">
                  <p className="text-gray-700">{project.description}</p>
                  <p className="text-gray-700 italic mt-2">{project.impact}</p>
                  {project.newsLinks && project.newsLinks.length > 0 && (
                    <div className="mt-2">
                      相关新闻：
                      {project.newsLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {(project.videos || project.images) && (
                  <div className="mb-6">
                    <div className="overflow-x-auto">
                      <div className="flex gap-4 pb-2" style={{ minWidth: 'min-content' }}>
                        {project.videos && project.videos.map((video, index) => (
                          <div key={`video-${index}`} className="relative" style={{ width: '200px', flexShrink: 0 }}>
                            <button
                              onClick={() => handleMediaClick(project, video, index)}
                              className="w-full h-[150px] rounded-lg overflow-hidden relative group"
                            >
                              <LazyMedia
                                src={video}
                                type="video"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        ))}
                        {project.images && project.images.map((image, index) => (
                          <div key={`image-${index}`} className="relative" style={{ width: '200px', flexShrink: 0 }}>
                            <button
                              onClick={() => handleMediaClick(project, image, index + (project.videos?.length || 0))}
                              className="w-full h-[150px] rounded-lg overflow-hidden relative group"
                            >
                              <LazyMedia
                                src={image}
                                type="image"
                                alt={`${project.title} 截图 ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">技术亮点</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {project.technicalDetails.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">使用技术</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">相关技能</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.skills.map((skillGroup) => (
                        <div key={skillGroup.category}>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{skillGroup.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items
                              .filter(skill => project.relatedSkills.includes(skill.name))
                              .map(skill => (
                                <div
                                  key={skill.name}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                                >
                                  {skill.name} ({skill.level})
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 媒体查看弹窗 */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" onClick={() => setSelectedMedia(null)}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevMedia();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextMedia();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {selectedMedia.type === 'image' ? (
              <LazyMedia
                src={selectedMedia.url}
                type="image"
                alt="放大图片"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                preload={true}
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="w-full rounded-lg"
                controls
                autoPlay
              >
                <source src={selectedMedia.url} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 