import { createContext } from 'react';

interface AppContextInterface {
  gameStage: string[];
  questions: string[];
}

export const myQuiz = createContext<AppContextInterface | undefined>(undefined)
