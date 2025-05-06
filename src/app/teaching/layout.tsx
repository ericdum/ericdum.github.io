import SharedLayout, { generateMetadata } from '@/components/SharedLayout';

export const metadata = generateMetadata(
  'Teaching',
  'Explore Lichen Dai\'s teaching philosophy and courses in computer science, AI, and educational technology'
);

export default function TeachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout
      title="Teaching"
      description="Explore Lichen Dai's teaching philosophy and courses in computer science, AI, and educational technology"
    >
      {children}
    </SharedLayout>
  );
} 