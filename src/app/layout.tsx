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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

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
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TB3J3LVRNQ');
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
