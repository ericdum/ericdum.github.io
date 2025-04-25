'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProfile } from '@/lib/api';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LoadingOverlay } from '@/components/LoadingOverlay';

interface Education {
  degree: string;
  major: string;
  school: string;
  year: string;
}

interface SkillItem {
  name: string;
  level: string;
  projects: number[];
  description: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

interface Profile {
  name: string;
  title: string;
  currentPosition: string;
  bio: string;
  education?: Education[];
  skills?: SkillCategory[];
}

export default function AboutPage() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile();
        setProfile(profileData as unknown as Profile);
      } catch (err) {
        setError('Failed to load profile');
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center text-gray-500 py-8">
        No profile data available
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('profile.title')}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src="/avatar.avif"
              alt="Profile Photo"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{profile.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
            <p className="text-gray-700 mb-4">{profile.currentPosition}</p>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">{profile.bio}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                target="_blank"
                href="https://github.com/ericdum"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href="http://linkedin.com/in/lichen-dai"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {profile.education && profile.education.length > 0 && (
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.education')}</h2>
          <div className="space-y-4">
            {profile.education.map((edu, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.major} | {edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {profile.skills && profile.skills.length > 0 && (
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.skills')}</h2>
          <div className="space-y-6">
            {profile.skills.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg"
                    >
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-500">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
} 