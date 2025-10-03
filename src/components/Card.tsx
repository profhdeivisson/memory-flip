'use client';

import type { CardData } from '@/types';
import Image from 'next/image';

interface CardProps {
  card: CardData;
  onClick: () => void;
}

export function Card({ card, onClick }: CardProps) {
  return (
    <div
      className="group h-20 w-20 md:h-32 md:w-32 cursor-pointer [perspective:1000px]"
      onClick={onClick}
    >
      <div
        className={`relative h-full w-full rounded-lg shadow-md transition-transform duration-200 [transform-style:preserve-3d] ${
          card.isFlipped || card.isMatched ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Verso da Carta */}
        <div className="absolute h-full w-full rounded-lg bg-neutral-700 [backface-visibility:hidden]"></div>
        {/* Frente da Carta */}
        <div className="absolute h-full w-full rounded-lg bg-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={card.image}
            alt="Card face"
            layout="fill"
            objectFit="contain"
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
}
