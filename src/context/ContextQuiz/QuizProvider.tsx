import { myQuiz } from "./myQuiz";
import { useReducer } from 'react';
import questions from '../../data/questions'


// estágios do jogo
const STAGES = ['Start', 'Playing', 'End']  
//estágio inicial para o useReducer, mesma coisa do useState.
const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  currentOption: 0,
}

type State =  {
  gameStage: any;
  currentQuestion: 0,
 }

type Action = { type: "CHANGE_STATE" } | { type:"CHANGE_QUESTION" | { type : "REORDER_QUESTION" } }

export const ContextProvider = ({children}: any) => {   

  const quizReducer = (state: State, action: Action) =>  {        
    switch (action.type) {
      case "CHANGE_STATE": 
        return {
          ...state,
          gameStage: STAGES[1]
        }
      case "REORDER_QUESTION":
        const embaralhar = questions.sort(() => { 
          return Math.random() - 0.5
        })  
      
      return { 
          ...state,
          questions: embaralhar
        }
      case "CHANGE_QUESTION":   
        const newQuestion = state.currentQuestion + 1
        let endQuestions = false

        if(!questions[newQuestion]){
          endQuestions = true
        }
        return {
          ...state,
          currentQuestion: newQuestion,
          gameStage: endQuestions ? STAGES[2] : state.gameStage
        }    
      case "BACK_INITIAL":
        return initialState              
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
