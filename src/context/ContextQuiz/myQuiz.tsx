import { createContext } from 'react';
import { AppContextInterface } from './QuizProvider';

export const myQuiz = createContext<AppContextInterface | null>(null)
