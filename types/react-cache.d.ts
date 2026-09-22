import 'react';

// Next.js 14 supplies React.cache in the server runtime. This repository still
// uses @types/react 16; add only the missing signature without upgrading packages.
declare module 'react' {
  export function cache<Args extends unknown[], Result>(fn: (...args: Args) => Result): (...args: Args) => Result;
}
