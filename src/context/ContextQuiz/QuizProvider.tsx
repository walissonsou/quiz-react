import { myQuiz } from "./myQuiz";
import questions from '../../data/questions'

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

// const STAGES = ['Start', 'Playing', 'End']
  
// const initialState = {
//   gameStage: STAGES[0],
//   questions
// }

export const ContextProvider = ({children}: any) => {  
  const sampleAppContext : AppContextInterface = 
  { 
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
}

  // const quizReducer = (state, action) =>  {    
    
  //   switch (action.type) {
  //     case "CHANGE_STATE": 
  //       return state        
  //     default: 
  //       return state
  //     }
  //   }
  
  return (
    <myQuiz.Provider value={sampleAppContext} > 
      {children}
    </myQuiz.Provider>
  );
};
