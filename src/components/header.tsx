'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';

interface HeaderProps {
  profile: {
    name: string;
    title: string;
  };
}

export function Header({ profile }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              {profile.name}
            </Link>
            <span className="ml-4 text-gray-600">{profile.title}</span>
          </div>
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
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              {t('header.contact')}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 