import { Card, isNormalCard } from "~/logic/cards";

export function isPair(cards: Card[]): cards is [Card, Card] {
  return (
    cards.length === 2 &&
    cards.every(isNormalCard) &&
    // @ts-expect-error - Because length is 2 this is valid
    cards[0].rank === cards[1].rank
  );
}

export function isTriple(cards: Card[]): cards is [Card, Card, Card] {
  return (
    cards.length === 3 &&
    cards.every(isNormalCard) &&
    // @ts-expect-error - Because length is 3 this is valid
    cards[0].rank === cards[1].rank &&
    // @ts-expect-error - Because length is 3 this is valid
    cards[1].rank === cards[2].rank
  );
}

export function isQuadruple(cards: Card[]): cards is [Card, Card, Card, Card] {
  return (
    cards.length === 4 &&
    cards.every(isNormalCard) &&
    // @ts-expect-error - Because length is 4 this is valid
    cards[0].rank === cards[1].rank &&
    // @ts-expect-error - Because length is 4 this is valid
    cards[1].rank === cards[2].rank &&
    // @ts-expect-error - Because length is 4 this is valid
    cards[2].rank === cards[3].rank
  );
}

export function isBomb(cards: Card[]) {
  return isQuadruple(cards);
}
