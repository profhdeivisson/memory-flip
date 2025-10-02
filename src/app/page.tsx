import { GameModeSelector } from '@/components/GameModeSelector';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <GameModeSelector />
    </main>
  );
}
