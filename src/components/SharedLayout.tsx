import { Metadata } from 'next';

interface SharedLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function generateMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Lichen Dai`,
      description,
    },
  };
}

export default function SharedLayout({
  title,
  description,
  children,
}: SharedLayoutProps) {
  return children;
} 