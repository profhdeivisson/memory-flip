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