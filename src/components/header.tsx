'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';
import { useState } from 'react';

interface HeaderProps {
  profile: {
    name: {
      en: string;
      zh: string;
    };
    title: {
      en: string;
      zh: string;
    };
  };
}

export function Header({ profile }: HeaderProps) {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              {profile.name[language]}
            </Link>
            {/* <span className="ml-4 text-gray-600 hidden sm:inline">{profile.title[language]}</span> */}
          </div>
          
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              {t('header.home')}
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
              {t('header.projects')}
            </Link>
            <Link href="/patents" className="text-gray-600 hover:text-gray-900">
              {t('header.patents')}
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900">
              {t('header.news')}
            </Link>
            <Link href="/teaching" className="text-gray-600 hover:text-gray-900">
              {t('header.teaching')}
            </Link> 
            <Link href="/experience" className="text-gray-600 hover:text-gray-900">
              {t('header.experience')}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              {t('header.contact')}
            </Link>
          </nav>

          {/* 桌面端语言切换 */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.projects')}
              </Link>
              <Link
                href="/patents"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.patents')}
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.news')}
              </Link>
              <Link
                href="/teaching"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.teaching')}
              </Link>
              <Link
                href="/experience"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.experience')}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </Link>
              {/* 移动端语言切换 */}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 