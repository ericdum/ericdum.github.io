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
      en: "Office Address",
      zh: "办公地址"
    },
    address: {
      en: "Hangzhou Yungu School\n1 Yungu Road\nXihu District, Hangzhou\nZhejiang Province\n310000",
      zh: "杭州云谷学校\n浙江省杭州市西湖区\n云谷路 1 号\n310000"
    },
    email: {
      en: "Email",
      zh: "电子邮箱"
    },
    officeHours: {
      en: "Office Hours",
      zh: "办公时间"
    },
    hours: {
      en: "Monday to Friday: 9:00 AM - 5:00 PM\nWeekends: Closed",
      zh: "周一至周五：9:00 - 17:00\n周末：休息"
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
                <p className="mt-1 text-gray-900">
                  <a href="mailto:lichen.dlc@yungu.org" className="text-blue-600 hover:text-blue-800">
                    lichen.dlc@yungu.org
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">{content.officeHours[language]}</h3>
                <p className="mt-1 text-gray-900 whitespace-pre-line">
                  {content.hours[language]}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d120.03382!3d30.31462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzUyLjYiTiAxMjDCsDAyJzAxLjgiRQ!5e0!3m2!1sen!2sus!4v1234567890"
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