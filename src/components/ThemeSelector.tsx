import { themes } from '@/lib/themes';
import Link from 'next/link';

export function ThemeSelector() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-4xl font-bold tracking-tight">Escolha um Tema</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {themes.map(theme => (
          <Link
            key={theme.slug}
            href={`/play/${theme.slug}`}
            className="flex h-40 w-64 flex-col items-center justify-center rounded-lg bg-neutral-800 p-6 text-center text-2xl font-bold transition-transform hover:scale-105 hover:bg-neutral-700"
          >
            {theme.name}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="mt-10 rounded-md bg-blue-600 px-6 py-2 text-lg font-semibold hover:bg-blue-700 cursor-pointer"
      >
        Voltar para página inicial
      </Link>
    </div>
  );
}
