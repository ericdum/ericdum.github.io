import SharedLayout, { generateMetadata } from '@/components/SharedLayout';

export const metadata = generateMetadata(
  'Patents',
  'View Lichen Dai\'s patent portfolio and innovations in technology and education'
);

export default function PatentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedLayout
      title="Patents"
      description="View Lichen Dai's patent portfolio and innovations in technology and education"
    >
      {children}
    </SharedLayout>
  );
} 