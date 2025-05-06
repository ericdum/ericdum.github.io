import SharedLayout, { generateMetadata } from '@/components/SharedLayout';

export const metadata = generateMetadata(
  'Projects',
  'Explore Lichen Dai\'s technical projects and achievements in cloud computing, IoT, and educational technology'
);

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout
      title="Projects"
      description="Explore Lichen Dai's technical projects and achievements in cloud computing, IoT, and educational technology"
    >
      {children}
    </SharedLayout>
  );
} 