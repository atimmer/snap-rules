import { expect, test } from "vitest";
import {
  isConsecutivePair,
  isFullHouse,
  isPair,
  isQuadruple,
  isTriple,
} from "./combinations";
import { fromNormalRanks } from "~/logic/cards";

test("isPair", () => {
  expect(isPair(fromNormalRanks(["two", "three"]))).toBe(false);
  expect(isPair(fromNormalRanks(["two", "two"]))).toBe(true);
  expect(isPair(fromNormalRanks(["two", "jack"]))).toBe(false);
  expect(isPair(fromNormalRanks(["two", "queen"]))).toBe(false);
  expect(isPair(fromNormalRanks(["two", "king"]))).toBe(false);
  expect(isPair(fromNormalRanks(["two", "ace"]))).toBe(false);
});

test("isTriple", () => {
  expect(isTriple(fromNormalRanks(["two", "three", "four"]))).toBe(false);
  expect(isTriple(fromNormalRanks(["three", "three", "three"]))).toBe(true);
  expect(isTriple(fromNormalRanks(["two", "three", "queen"]))).toBe(false);
  expect(isTriple(fromNormalRanks(["two", "three", "king"]))).toBe(false);
  expect(isTriple(fromNormalRanks(["two", "three", "ace"]))).toBe(false);
});

test("isQuadruple", () => {
  expect(isQuadruple(fromNormalRanks(["two", "three", "four", "five"]))).toBe(
    false,
  );
  expect(isQuadruple(fromNormalRanks(["four", "four", "four", "four"]))).toBe(
    true,
  );
  expect(isQuadruple(fromNormalRanks(["two", "three", "four", "queen"]))).toBe(
    false,
  );
  expect(isQuadruple(fromNormalRanks(["two", "three", "four", "king"]))).toBe(
    false,
  );
  expect(isQuadruple(fromNormalRanks(["two", "three", "four", "ace"]))).toBe(
    false,
  );
});

test("isFullHouse", () => {
  expect(
    isFullHouse(fromNormalRanks(["two", "two", "two", "three", "three"])),
  ).toBe(true);
  expect(
    isFullHouse(fromNormalRanks(["three", "three", "three", "two", "two"])),
  ).toBe(true);
  expect(
    isFullHouse(fromNormalRanks(["ace", "three", "ace", "three", "ace"])),
  ).toBe(true);
  expect(
    isFullHouse(fromNormalRanks(["three", "ace", "three", "ace", "three"])),
  ).toBe(true);
  expect(
    isFullHouse(fromNormalRanks(["king", "three", "king", "three", "ace"])),
  ).toBe(false);
});

test("isConsecutivePair", () => {
  expect(
    isConsecutivePair(fromNormalRanks(["two", "two", "three", "three"])),
  ).toBe(true);
  expect(
    isConsecutivePair(fromNormalRanks(["jack", "jack", "queen", "queen"])),
  ).toBe(true);
  expect(
    isConsecutivePair(fromNormalRanks(["two", "three", "two", "three"])),
  ).toBe(true);
  expect(
    isConsecutivePair(fromNormalRanks(["two", "two", "three", "four"])),
  ).toBe(false);
  expect(
    isConsecutivePair(fromNormalRanks(["two", "two", "three", "queen"])),
  ).toBe(false);
  expect(
    isConsecutivePair(
      fromNormalRanks(["two", "two", "three", "three", "four", "four"]),
    ),
  ).toBe(true);
  expect(
    isConsecutivePair(
      fromNormalRanks(["two", "two", "three", "three", "four", "queen"]),
    ),
  ).toBe(false);
  expect(
    isConsecutivePair(
      fromNormalRanks(["jack", "jack", "queen", "queen", "king", "king"]),
    ),
  ).toBe(true);
  expect(
    isConsecutivePair(
      fromNormalRanks([
        "jack",
        "jack",
        "queen",
        "queen",
        "king",
        "king",
        "ten",
        "ten",
        "ace",
        "ace",
      ]),
    ),
  ).toBe(true);
  expect(
    isConsecutivePair(
      fromNormalRanks([
        "jack",
        "jack",
        "queen",
        "queen",
        "king",
        "king",
        "ten",
        "ten",
        "queen",
        "king",
      ]),
    ),
  ).toBe(false);
});
