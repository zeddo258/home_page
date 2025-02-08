"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `我們提供全新、友善的數位教學環境，使教學能真正做到「天涯若比鄰」，提供師生們最佳的學習體驗，此外，我們也重視學生的學習感受，因此本中心附有休憩區及討論區，讓學生能在最舒適且自在的環境中學習。`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
