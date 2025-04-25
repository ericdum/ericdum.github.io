import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getProfile } from "@/lib/api";
import { Header } from "@/components/header";
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Footer } from "@/components/footer";
import { GlobalLoading } from '@/components/GlobalLoading';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lichen Dai",
  description: "Personal website showcasing technical experience and project achievements",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getProfile();

  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
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
