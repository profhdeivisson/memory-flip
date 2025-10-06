export interface CardData {
  id: number;
  uniqueId: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface Theme {
  name: string;
  slug: string;
  images: string[];
}

export interface GamePageProps {
  params: {
    slug: string;
  };
}

export interface CardProps {
  card: CardData;
  onClick: () => void;
}

export interface GameBoardProps {
  theme: string;
}