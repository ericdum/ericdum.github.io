import SharedLayout, { generateMetadata } from '@/components/SharedLayout';

export const metadata = generateMetadata(
  'News',
  'Latest news and updates about Lichen Dai\'s work in technology, education, and innovation'
);

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout
      title="News"
      description="Latest news and updates about Lichen Dai's work in technology, education, and innovation"
    >
      {children}
    </SharedLayout>
  );
} 