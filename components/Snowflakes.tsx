import React from 'react';

export const Snowflakes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-200 opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};