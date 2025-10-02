import { ThemeSelector } from '@/components/ThemeSelector';

export default function SelectThemePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <ThemeSelector />
    </main>
  );
}
