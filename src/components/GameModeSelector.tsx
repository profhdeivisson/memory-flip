import Link from 'next/link';

export function GameModeSelector() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold tracking-tight">Memory Flip</h1>
      <p className="text-lg text-neutral-400">Escolha o modo de jogo</p>
      <div className="mt-4 flex flex-col gap-4">
        <Link
          href="/play"
          className="w-64 rounded-md bg-blue-600 px-6 py-3 text-center text-xl font-semibold hover:bg-blue-700"
        >
          Single Player
        </Link>
        <button className="w-64 cursor-not-allowed rounded-md bg-neutral-700 px-6 py-3 text-center text-xl font-semibold text-neutral-400">
          Multiplayer (Em breve)
        </button>
      </div>
    </div>
  );
}
