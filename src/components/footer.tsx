'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FooterProps {
  profile: {
    name: string;
  };
}

export function Footer({ profile }: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-500 text-sm">
          {t('footer.copyright').replace('{year}', year.toString()).replace('{name}', profile.name)}
        </p>
      </div>
    </footer>
  );
} 