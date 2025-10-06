'use client';

import { useGameLogic } from '@/hooks/useGameLogic';
import Link from 'next/link';
import { Card } from './Card';
import { Loading } from './Loading';
import { GameBoardProps } from '@/types';
import { GameWon } from './GameWon';

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
      <GameWon theme={theme} moves={moves} initializeGame={initializeGame} />
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
