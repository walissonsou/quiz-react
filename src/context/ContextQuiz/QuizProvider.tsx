import { myQuiz } from "./myQuiz";

export const ContextProvider = ({children}) => { 

  return (
    <myQuiz.Provider  > 
      {children}
    </myQuiz.Provider>
  );
};
