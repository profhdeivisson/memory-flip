import { GameBoard } from '@/components/GameBoard';
import { themes } from '@/lib/themes';
import { notFound } from 'next/navigation';

interface GamePageProps {
  params: {
    slug: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const { slug } = params;

  const themeExists = themes.some(theme => theme.slug === slug);
  if (!themeExists) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 p-4 text-white">
      <GameBoard theme={slug} />
    </main>
  );
}
