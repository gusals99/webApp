/// <reference types="react" />

declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {}; 