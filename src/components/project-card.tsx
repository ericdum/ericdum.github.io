"use client";

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  technologiesEn: string[];
  role: string;
  roleEn: string;
  duration: string;
  images?: string[];
  videos?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const firstImage = project.images?.[0];
  const firstVideo = project.videos?.[0];
  const videoThumbnail = firstVideo ? `${firstVideo}#t=0.1` : undefined;
  const hasMedia = (firstImage || videoThumbnail) && !imageError && !videoError;

  const handleClick = () => {
    window.location.href = `/projects#project-${project.id}`;
  };

  return (
    <div 
      className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {hasMedia ? (
        <div className="relative h-32 overflow-hidden">
          {firstImage ? (
            <Image
              src={firstImage}
              alt={language === 'en' ? project.titleEn : project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <video
              src={videoThumbnail}
              className="w-full h-full object-cover"
              onError={() => setVideoError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>
      ) : null}
      <div className={`p-4 ${!hasMedia ? 'pt-4' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {language === 'en' ? project.titleEn : project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {language === 'en' ? project.descriptionEn : project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {(language === 'en' ? project.technologiesEn : project.technologies)
            .slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          {(language === 'en' ? project.technologiesEn : project.technologies).length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
              +{(language === 'en' ? project.technologiesEn : project.technologies).length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 