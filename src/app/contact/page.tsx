'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      en: "Contact Information",
      zh: "联系信息"
    },
    officeAddress: {
      en: "Address",
      zh: "地址"
    },
    address: {
      en: "Xinlin Courtyard, Tsinghua University\nHaidian District, Beijing",
      zh: "北京市海淀区\n清华大学新林院"
    },
    email: {
      en: "Email",
      zh: "电子邮箱"
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{content.title[language]}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{content.officeAddress[language]}</h3>
                <p className="mt-1 text-gray-900 whitespace-pre-line">
                  {content.address[language]}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">{content.email[language]}</h3>
                <div className="mt-1 flex flex-col items-start">
                  <a href="mailto:dlc26@mails.tsinghua.edu.cn" className="text-blue-600 hover:text-blue-800">
                    dlc26@mails.tsinghua.edu.cn
                  </a>
                  <a href="mailto:ceo@mojalab.cn" className="text-blue-600 hover:text-blue-800">
                    ceo@mojalab.cn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps?q=Tsinghua+University+Xinlin+Courtyard+Haidian+Beijing&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
