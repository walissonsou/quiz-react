import { myQuiz } from "./myQuiz";
import { useReducer } from 'react';
import questions from '../../data/questions'


// estágios do jogo
const STAGES = ['Start', 'Playing', 'End']  
//estágio inicial para o useReducer, mesma coisa do useState.
const initialState = {
  gameStage: STAGES[0],
  questions,
}
type State =  {
  gameStage: any;
 }

type Action = { type: "CHANGE_STATE" } | { type:"FIX-STATE" }

export const ContextProvider = ({children}: any) => {  
  
  
  // state -> initialstate
  // action -> ação que o usuário faz
  const quizReducer = (state: State, action: Action) =>  {    
    console.log(state, action)
    switch (action.type) {
      case "CHANGE_STATE": 
        return {
          ...state,
          gameStage: STAGES[1]
        }      
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
