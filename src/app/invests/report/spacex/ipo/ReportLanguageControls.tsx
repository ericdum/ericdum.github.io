'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ReportLanguageControls() {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <input
        aria-label="显示中文"
        checked={language === 'zh'}
        className="sec-language-toggle"
        id="sec-lang-zh"
        name="sec-language"
        onChange={() => setLanguage('zh')}
        type="radio"
      />
      <input
        aria-label="Show English"
        checked={language === 'en'}
        className="sec-language-toggle"
        id="sec-lang-en"
        name="sec-language"
        onChange={() => setLanguage('en')}
        type="radio"
      />
    </>
  );
}
