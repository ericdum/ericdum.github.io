'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingOverlay } from './LoadingOverlay';

export function GlobalLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    // 监听路由变化开始
    window.addEventListener('beforeunload', handleStart);
    // 监听路由变化结束
    window.addEventListener('load', handleStop);

    // 监听 Next.js 的路由变化
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    window.addEventListener('popstate', handleRouteChangeStart);
    window.addEventListener('pushstate', handleRouteChangeStart);
    window.addEventListener('load', handleRouteChangeComplete);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleStop);
      window.removeEventListener('popstate', handleRouteChangeStart);
      window.removeEventListener('pushstate', handleRouteChangeStart);
      window.removeEventListener('load', handleRouteChangeComplete);
    };
  }, []);

  if (!isLoading) return null;

  return <LoadingOverlay />;
} 