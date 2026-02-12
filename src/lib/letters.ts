export const LETTER_LEVELS = [
  { level: 1, name: "Level 1", letters: ["s", "a", "t", "p", "i", "n"], color: "#16a34a" },
  { level: 2, name: "Level 2", letters: ["c", "o", "d", "m", "k"], color: "#2563eb" },
  { level: 3, name: "Level 3", letters: ["e", "r", "g", "b", "h"], color: "#ca8a04" },
  { level: 4, name: "Level 4", letters: ["w", "j", "l", "u", "f"], color: "#dc2626" },
  { level: 5, name: "Level 5", letters: ["y", "v", "x", "q", "z"], color: "#7c3aed" },
];

export const ALL_LETTERS = LETTER_LEVELS.flatMap(level => level.letters).sort();

export const DEFAULT_LETTERS = LETTER_LEVELS[0].letters;

export const getLetterData = (letter: string) => {
  return LETTER_LEVELS.find(level => level.letters.includes(letter));
}
