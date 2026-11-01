'use client';

import { useEffect, useRef } from 'react';

export default function ScrollRevealText({ as: Tag = 'p', text, className = '' }) {
  const textRef = useRef(null);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return undefined;
    const wordElements = Array.from(element.querySelectorAll('[data-scroll-word]'));
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        const travel = window.innerHeight + bounds.height;
        const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / travel));
        wordElements.forEach((word, index) => {
          const fill = Math.max(0, Math.min(1, progress * words.length - index));
          const start = 168;
          const end = 25;
          const channel = Math.round(start + (end - start) * fill);
          word.style.color = `rgb(${channel}, ${channel}, ${channel})`;
        });
      });
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <Tag ref={textRef} className={`scroll-lit-text ${className}`.trim()} style={{ '--word-count': words.length }} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true" style={{ '--word-index': index }}>
          <span data-scroll-word style={{ color: 'rgb(168, 168, 168)', transition: 'color 100ms linear' }}>
          {word}{index < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
