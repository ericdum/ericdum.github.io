// Google Analytics 工具函数

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// 发送页面视图事件
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-TB3J3LVRNQ', {
      page_path: url,
    });
  }
};

// 发送事件
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
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 跟踪缩略图点击
export const trackThumbnailClick = (type: 'project' | 'news' | 'media', id: string | number, title?: string) => {
  event({
    action: 'click',
    category: 'thumbnail',
    label: `${type}_${id}${title ? `_${title}` : ''}`,
  });
};

