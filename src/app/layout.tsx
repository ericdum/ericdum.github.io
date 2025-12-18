import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getProfile } from "@/lib/api";
import { Header } from "@/components/header";
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Footer } from "@/components/footer";
import { GlobalLoading } from '@/components/GlobalLoading';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lichen Dai - 代立晨",
    template: "%s | Lichen Dai"
  },
  description: "Personal website of Lichen Dai (代立晨), showcasing technical experience, project achievements, and teaching philosophy",
  keywords: ["Lichen Dai", "代立晨", "技术专家", "飞行员", "教育科技", "云谷学校"],
  authors: [{ name: "Lichen Dai" }],
  creator: "Lichen Dai",
  publisher: "Lichen Dai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lichen.dai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    siteName: 'Lichen Dai',
    title: 'Lichen Dai - 代立晨',
    description: 'Personal website of Lichen Dai (代立晨), showcasing technical experience, project achievements, and teaching philosophy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lichen Dai - 代立晨',
    description: 'Personal website of Lichen Dai (代立晨), showcasing technical experience, project achievements, and teaching philosophy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getProfile();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TB3J3LVRNQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            try {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TB3J3LVRNQ');
            } catch (e) {
              // 静默处理错误，不影响页面
            }
          `}
        </Script>
        {/* 百度统计 */}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            (function() {
              try {
                window._hmt = window._hmt || [];
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?ebdca9ea1a05f6f3710dde2346434376";
                hm.async = true;
                hm.onload = function() {
                  if (typeof console !== 'undefined' && console.log) {
                    console.log('Baidu Analytics script loaded successfully');
                  }
                };
                hm.onerror = function() {
                  // 静默处理加载错误，不影响页面
                  if (typeof console !== 'undefined' && console.warn) {
                    console.warn('Baidu Analytics script load failed');
                  }
                };
                var s = document.getElementsByTagName("script")[0]; 
                if (s && s.parentNode) {
                  s.parentNode.insertBefore(hm, s);
                } else {
                  // 如果找不到 script 标签，直接添加到 head
                  var head = document.head || document.getElementsByTagName("head")[0];
                  if (head) {
                    head.appendChild(hm);
                  }
                }
              } catch (e) {
                // 静默处理错误，不影响页面
                if (typeof console !== 'undefined' && console.warn) {
                  console.warn('Baidu Analytics init error:', e);
                }
              }
            })();
          `}
        </Script>
        <LanguageProvider>
          <GoogleAnalytics />
          <GlobalLoading />
          <div className="min-h-screen bg-gray-50">
            <Header profile={profile} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer profile={profile} />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
