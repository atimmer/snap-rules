type SpecialCardRank = "one" | "dog" | "phoenix" | "dragon";
type NormalCardRank =
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"
  | "ten"
  | "jack"
  | "queen"
  | "king"
  | "ace";
export type CardRank = SpecialCardRank | NormalCardRank;

export type Suit = "hearts" | "diamonds" | "spades" | "clubs";

export type SpecialCard = {
  rank: SpecialCardRank;
  suit: never;
};

export type NormalCard = {
  rank: NormalCardRank;
  suit: Suit;
};

export type Card = SpecialCard | NormalCard;

export function isSpecialCard(card: Card): card is SpecialCard {
  const rank = card.rank;
  return (
    rank === "one" || rank === "dog" || rank === "phoenix" || rank === "dragon"
  );
}

export function fromNormalRank(rank: NormalCardRank): NormalCard {
  return { rank, suit: "hearts" };
}

export function fromNormalRanks(ranks: NormalCardRank[]): NormalCard[] {
  return ranks.map(fromNormalRank);
}

export function isNormalCardRank(rank: CardRank): rank is NormalCardRank {
  return (
    rank === "two" ||
    rank === "three" ||
    rank === "four" ||
    rank === "five" ||
    rank === "six" ||
    rank === "seven" ||
    rank === "eight" ||
    rank === "nine" ||
    rank === "ten" ||
    rank === "jack" ||
    rank === "queen" ||
    rank === "king" ||
    rank === "ace"
  );
}

export function isNormalCard(card: Card): card is NormalCard {
  return isNormalCardRank(card.rank);
}

export function getNumericRank(card: Card) {
  switch (card.rank) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    case "ten":
      return 10;
    case "jack":
      return 11;
    case "queen":
      return 12;
    case "king":
      return 13;
    case "ace":
      return 14;
    case "phoenix":
      return 15;
    case "dragon":
      return 16;
    case "dog":
      return 17;
  }
}

export function sortCards(cards: Card[]) {
  return [...cards].sort((a, b) => {
    const aRank = getNumericRank(a);
    const bRank = getNumericRank(b);

    if (aRank === bRank) return 0;

    return aRank - bRank;
  });
}
