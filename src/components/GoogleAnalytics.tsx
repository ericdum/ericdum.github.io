'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 构建完整的 URL（包括查询参数）
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    
    // 发送页面视图事件
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

