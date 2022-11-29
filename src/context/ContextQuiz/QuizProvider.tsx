import { myQuiz } from "./myQuiz";
import { useReducer } from 'react';
import questions from '../../data/questions'

export interface AppContextInterface {
  gameStage: string[],
  questions: string;
}
// estágios do jogo
const STAGES = ['Start', 'Playing', 'End']
  
//estágio inicial para o useReducer, mesma coisa do useState.

const initialState = {
  gameStage: STAGES[0],
  questions,

}

export const ContextProvider = ({children}: any) => {  
  
  
  // state -> initialstate
  // action -> ação que o usuário faz
  const quizReducer = (state, action) =>  {    
    console.log(state, action)
    switch (action.type) {
      case "CHANGE_STATE": 
        return state        
      default: 
        return state
      }
    }

    const sampleAppContext = useReducer(quizReducer, initialState)
    
  return (
    <myQuiz.Provider value={sampleAppContext} > 
      {children}
    </myQuiz.Provider>
  );
};
