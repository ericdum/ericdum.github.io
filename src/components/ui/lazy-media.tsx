"use client";

import { useEffect, useRef, useState } from 'react';

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
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
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
        <img
          ref={mediaRef as React.RefObject<HTMLImageElement>}
          src={isVisible ? src : ''}
          alt={alt || ''}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onClick={onClick}
          onLoad={handleLoad}
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
        ref={mediaRef as React.RefObject<HTMLVideoElement>}
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