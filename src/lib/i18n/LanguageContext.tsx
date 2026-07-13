'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'en' | 'zh';

const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_STORAGE_KEY = 'language';

function isSupportedLanguage(language: string | null): language is Language {
  return language === 'en' || language === 'zh';
}

export function resolveBrowserLanguage(languages: readonly string[]): Language {
  for (const locale of languages) {
    const language = locale.toLowerCase().split('-')[0];

    if (isSupportedLanguage(language)) {
      return language;
    }
  }

  return DEFAULT_LANGUAGE;
}

function getBrowserLanguage(): Language {
  const languages = navigator.languages?.length > 0
    ? navigator.languages
    : [navigator.language];

  return resolveBrowserLanguage(languages);
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    let savedLanguage: string | null = null;

    try {
      savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      // Storage may be unavailable in privacy-restricted browser contexts.
    }

    if (isSupportedLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
      return;
    }

    setLanguage(getBrowserLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Keep the current selection even when it cannot be persisted.
    }
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
