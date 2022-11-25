import { createContext } from 'react';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const myQuiz = createContext<AppContextInterface | null>(null)
