// hooks/useTypewriter.js
import { useState, useEffect, useCallback } from 'react';

/**
 * useTypewriter
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} typeSpeed - ms per character when typing
 * @param {number} deleteSpeed - ms per character when deleting
 * @param {number} pauseTime - ms to pause at full word
 */
export function useTypewriter(words = [], typeSpeed = 80, deleteSpeed = 40, pauseTime = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIndex % words.length];
    const updated = isDeleting
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1);

    setText(updated);

    if (!isDeleting && updated === current) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }
    if (isDeleting && updated === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, isDeleting, wordIndex, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, typeSpeed, deleteSpeed]);

  return text;
}