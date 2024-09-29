import { Card, getNumericRank, isNormalCard, sortCards } from "~/logic/cards";

export function isTwoCards(cards: Card[]): cards is [Card, Card] {
  return cards.length === 2;
}

export function isThreeCards(cards: Card[]): cards is [Card, Card, Card] {
  return cards.length === 3;
}

export function isFourCards(cards: Card[]): cards is [Card, Card, Card, Card] {
  return cards.length === 4;
}

export function isFiveCards(
  cards: Card[],
): cards is [Card, Card, Card, Card, Card] {
  return cards.length === 5;
}

export function isPair(cards: Card[]): cards is [Card, Card] {
  return (
    isTwoCards(cards) &&
    cards.every(isNormalCard) &&
    cards[0].rank === cards[1].rank
  );
}

export function isTriple(cards: Card[]): cards is [Card, Card, Card] {
  return (
    isThreeCards(cards) &&
    cards.every(isNormalCard) &&
    cards[0].rank === cards[1].rank &&
    cards[1].rank === cards[2].rank
  );
}

export function isQuadruple(cards: Card[]): cards is [Card, Card, Card, Card] {
  return (
    isFourCards(cards) &&
    cards.every(isNormalCard) &&
    cards[0].rank === cards[1].rank &&
    cards[1].rank === cards[2].rank &&
    cards[2].rank === cards[3].rank
  );
}

export function isFullHouse(cards: Card[]) {
  cards = sortCards(cards);

  return (
    isFiveCards(cards) &&
    ((isTriple([cards[0], cards[1], cards[2]]) &&
      isPair([cards[3], cards[4]])) ||
      (isPair([cards[0], cards[1]]) &&
        isTriple([cards[2], cards[3], cards[4]])))
  );
}

export function isConsecutivePair(cards: Card[]) {
  cards = sortCards(cards);

  // After this if, we know that we have 4, 6, 8, 10, etc cards.
  if (cards.length % 2 !== 0 || cards.length < 4) {
    return false;
  }

  const firstFourAreConsecutive =
    // @ts-expect-error See above
    isPair([cards[0], cards[1]]) &&
    // @ts-expect-error See above
    isPair([cards[2], cards[3]]) &&
    // @ts-expect-error See above
    getNumericRank(cards[0]) + 1 === getNumericRank(cards[2]);

  if (isFourCards(cards)) {
    return firstFourAreConsecutive;
  } else {
    return isConsecutivePair(cards.slice(2));
  }
}

export function isBomb(cards: Card[]) {
  return isQuadruple(cards);
}
