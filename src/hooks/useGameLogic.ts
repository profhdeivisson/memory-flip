'use client';

import { themes } from '@/lib/themes';
import type { CardData } from '@/types';
import { useCallback, useEffect, useState } from 'react';

export function useGameLogic(themeSlug: string) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const theme = themes.find(t => t.slug === themeSlug);

  const initializeGame = useCallback(() => {
    if (!theme) return;

    const gameCards = theme.images.flatMap((image, index) => [
      {
        id: index,
        uniqueId: index * 2,
        image,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: index,
        uniqueId: index * 2 + 1,
        image,
        isFlipped: false,
        isMatched: false,
      },
    ]);

    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setIsChecking(false);
    setIsLoading(false);
  }, [theme]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.id === secondCard.id) {
        // Match
        setCards(prevCards =>
          prevCards.map(card =>
            card.id === firstCard.id ? { ...card, isMatched: true } : card
          )
        );
        setMatchedPairs(prev => prev + 1);
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || flippedCards.length === 2) {
      return;
    }

    setCards(prevCards =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards(prev => [...prev, index]);
  };

  const isGameWon = theme ? matchedPairs === theme.images.length : false;

  return {
    cards,
    moves,
    matchedPairs,
    isGameWon,
    handleCardClick,
    initializeGame,
    isLoading,
  };
}
