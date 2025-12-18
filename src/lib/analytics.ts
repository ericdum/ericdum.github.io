// Google Analytics 和百度统计工具函数

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
    _hmt?: any[];
  }
}

// 初始化百度统计数组（确保在客户端可用）
const initBaiduHmt = () => {
  if (typeof window !== 'undefined') {
    window._hmt = window._hmt || [];
  }
};

// 检查统计脚本是否已加载
const isGoogleAnalyticsReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

const isBaiduAnalyticsReady = (): boolean => {
  if (typeof window === 'undefined') return false;
  // 检查 _hmt 数组是否存在
  if (!Array.isArray(window._hmt)) return false;
  // 检查百度统计是否已经初始化（脚本加载后会设置一些属性）
  // 如果 _hmt 数组存在且长度大于0，说明至少已经初始化了
  return window._hmt.length >= 0;
};

// 安全执行函数，确保错误不会影响页面
const safeExecute = (fn: () => void | Promise<void>) => {
  try {
    // 使用 requestIdleCallback 或 setTimeout 确保异步执行，不阻塞页面
    const execute = async () => {
      try {
        await fn();
      } catch (error) {
        // 静默处理错误，不影响页面
        if (process.env.NODE_ENV === 'development') {
          console.warn('Analytics error:', error);
        }
      }
    };
    
    if (typeof window !== 'undefined' && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        execute();
      }, { timeout: 1000 });
    } else {
      setTimeout(() => {
        execute();
      }, 0);
    }
  } catch (error) {
    // 静默处理错误
    if (process.env.NODE_ENV === 'development') {
      console.warn('Analytics setup error:', error);
    }
  }
};

// 发送页面视图事件到 Google Analytics
const sendGooglePageview = (url: string) => {
  if (isGoogleAnalyticsReady()) {
    try {
      window.gtag!('config', 'G-TB3J3LVRNQ', {
        page_path: url,
      });
      if (process.env.NODE_ENV === 'development') {
        console.log('Google Analytics pageview sent:', url);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Google Analytics pageview error:', error);
      }
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Google Analytics not ready yet');
    }
  }
};

// 发送页面视图事件到百度统计
const sendBaiduPageview = (url: string) => {
  if (typeof window === 'undefined') return;
  
  // 初始化 _hmt 数组
  initBaiduHmt();
  
  try {
    // 百度统计的页面视图跟踪
    // 如果脚本还没加载，事件会先存储在 _hmt 数组中，等脚本加载后会自动处理
    window._hmt!.push(['_trackPageview', url]);
    if (process.env.NODE_ENV === 'development') {
      console.log('Baidu Analytics pageview sent:', url, '_hmt length:', window._hmt!.length);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Baidu Analytics pageview error:', error);
    }
  }
};

// 等待统计脚本加载（最多等待3秒）
const waitForAnalytics = (maxWait = 3000): Promise<void> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const checkInterval = setInterval(() => {
      const googleReady = isGoogleAnalyticsReady();
      // 对于百度统计，只要 _hmt 数组存在就可以发送事件（即使脚本还没完全加载）
      // 因为百度统计会将事件先存储在数组中，等脚本加载后自动处理
      const baiduReady = typeof window !== 'undefined' && (window._hmt !== undefined);
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= maxWait) {
        clearInterval(checkInterval);
        if (process.env.NODE_ENV === 'development') {
          console.log('Analytics wait timeout:', { googleReady, baiduReady, elapsed });
        }
        resolve();
        return;
      }
      
      // 如果都准备好了，提前返回
      if (googleReady && baiduReady) {
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);
  });
};

// 发送页面视图事件（同时发送给 Google 和百度）
export const pageview = (url: string) => {
  safeExecute(async () => {
    // 等待统计脚本加载
    await waitForAnalytics(1000);
    sendGooglePageview(url);
    sendBaiduPageview(url);
  });
};

// 发送事件到 Google Analytics
const sendGoogleEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (isGoogleAnalyticsReady()) {
    try {
      window.gtag!('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
      if (process.env.NODE_ENV === 'development') {
        console.log('Google Analytics event sent:', { action, category, label, value });
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Google Analytics event error:', error);
      }
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Google Analytics not ready for event');
    }
  }
};

// 发送事件到百度统计
const sendBaiduEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined') return;
  
  // 初始化 _hmt 数组
  initBaiduHmt();
  
  try {
    // 百度统计的事件跟踪格式: _trackEvent(category, action, opt_label, opt_value)
    // 注意：百度统计的参数顺序是 category, action, label, value
    window._hmt!.push(['_trackEvent', category, action, label || '', value || 0]);
    if (process.env.NODE_ENV === 'development') {
      console.log('Baidu Analytics event sent:', { action, category, label, value }, '_hmt length:', window._hmt!.length);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Baidu Analytics event error:', error);
    }
  }
};

// 发送事件（同时发送给 Google 和百度）
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  safeExecute(async () => {
    // 等待统计脚本加载（事件可以更快，只等500ms）
    await waitForAnalytics(500);
    sendGoogleEvent({ action, category, label, value });
    sendBaiduEvent({ action, category, label, value });
  });
};

// 跟踪缩略图点击
export const trackThumbnailClick = (type: 'project' | 'news' | 'media', id: string | number, title?: string) => {
  event({
    action: 'click',
    category: 'thumbnail',
    label: `${type}_${id}${title ? `_${title}` : ''}`,
  });
};

// 跟踪导航点击
export const trackNavigation = (destination: string) => {
  event({
    action: 'click',
    category: 'navigation',
    label: destination,
  });
};


