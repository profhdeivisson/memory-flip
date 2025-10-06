'use client';

import { useGameLogic } from '@/hooks/useGameLogic';
import Link from 'next/link';
import { Card } from './Card';
import { Loading } from './Loading';
import { GameBoardProps } from '@/types';

export function GameBoard({ theme }: GameBoardProps) {
  const {
    cards,
    moves,
    matchedPairs,
    isGameWon,
    handleCardClick,
    initializeGame,
    isLoading,
  } = useGameLogic(theme);

  if (isLoading) {
    return <Loading />;
  }

  if (isGameWon) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-green-400">Parabéns!</h2>
        <p className="mt-2 text-xl">Você venceu em {moves} jogadas.</p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={initializeGame}
            className="rounded-md bg-blue-600 px-6 py-2 text-lg font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Jogar Novamente
          </button>
          <Link
            href="/play"
            className="rounded-md bg-neutral-600 px-6 py-2 text-lg font-semibold hover:bg-neutral-700 cursor-pointer"
          >
            Mudar Tema
          </Link>
          <Link
            href="/"
            className="rounded-md bg-neutral-600 px-6 py-2 text-lg font-semibold hover:bg-neutral-700 cursor-pointer"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-8 text-xl">
        <span>Jogadas: {moves}</span>
        <span>Pares Encontrados: {matchedPairs}</span>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <Card
            key={card.uniqueId}
            card={card}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
