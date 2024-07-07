import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'max-w-2xl min-w-10 p-6 bg-white border border-gray-200 rounded-lg shadow '
      }
    >
      {children}
    </div>
  );
}
