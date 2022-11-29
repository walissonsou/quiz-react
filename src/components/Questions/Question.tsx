import React, { useContext } from "react";
import { myQuiz } from "../../context/ContextQuiz/myQuiz";

export const Question = () => {

  const [ quizState, dispatch ] = useContext(myQuiz) 
  console.log(quizState)
  return (
    <div> Question11111 </div>
  )
}
