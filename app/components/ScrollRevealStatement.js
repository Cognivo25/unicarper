'use client';

import { useEffect, useRef } from 'react';

const words = ['We', 'design.', 'We', 'build.', 'We', 'deliver.'];

export default function ScrollRevealStatement() {
  const statementRef = useRef(null);

  useEffect(() => {
    const statement = statementRef.current;
    if (!statement) return undefined;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = statement.getBoundingClientRect();
        const travel = window.innerHeight + bounds.height;
        const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / travel));
        statement.style.setProperty('--scroll-progress', progress.toFixed(3));
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
    <h2 ref={statementRef} className="scroll-reveal-statement" aria-label="We design. We build. We deliver.">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true" style={{ '--word-index': index }}>
          {word}{index === 1 || index === 3 ? <br className="statement-line-break" /> : ' '}
        </span>
      ))}
    </h2>
  );
}
