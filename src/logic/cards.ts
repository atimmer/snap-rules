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
  suit: never;
};

export type Card = SpecialCard | NormalCard;

export function isSpecialCard(card: Card): card is SpecialCard {
  const rank = card.rank;
  return (
    rank === "one" || rank === "dog" || rank === "phoenix" || rank === "dragon"
  );
}

export function isNormalCard(card: Card): card is NormalCard {
  const rank = card.rank;

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
