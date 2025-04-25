"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LazyMediaProps {
  src: string;
  type: 'image' | 'video';
  alt?: string;
  className?: string;
  onClick?: () => void;
  preload?: boolean;
}

export function LazyMedia({ src, type, alt, className, onClick, preload = false }: LazyMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mediaRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (preload) {
      setIsVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (mediaRef.current) {
      observerRef.current.observe(mediaRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [preload]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (type === 'image') {
    return (
      <div className={`relative ${className}`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={src}
          alt={alt || ''}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onClick={onClick}
          onLoad={handleLoad}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {src && (<video
        ref={mediaRef}
        src={isVisible ? src : ''}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onClick={onClick}
        onLoadedData={handleLoad}
        muted
        playsInline
        preload="metadata"
      />)}
    </div>
  );
} 