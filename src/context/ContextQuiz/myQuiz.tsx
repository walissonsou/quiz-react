import { createContext } from 'react';
import questions from '../../data/questions'

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
  gameStage: STAGES[0],
  questions
}

const quizReducer = (state, action) =>  { 
  console.log(state, action)
  
  switch (action.type) {
    case "CHANGE_STATE": 
      return state
      
    default: 
    return state
    }
  }

export const myQuiz = createContext<AppContextInterface | null>(null)
