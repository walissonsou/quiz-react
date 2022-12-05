import React, { useContext, useEffect } from "react";
import { myQuiz } from "../../context/ContextQuiz/myQuiz";
import  data  from '../../data/questions'

export const Question = () => {

  const [ quizState, dispatch ] = useContext(myQuiz) 

  const currentQuestion = quizState.questions[quizState.currentQuestion]
  const optionsQuestion = quizState.questions[quizState.currentOption]
  
  useEffect(() => {
    // embaralhar 
    dispatch({ type: 'REORDER_QUESTION'})
  } , [])


  return (
    <div id='question'> 
      <p> Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length} Question</p>
      <h2>{currentQuestion.question}</h2>  
      <div id='options-container'>
        <p> dale  </p>
             
      </div>
      <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>
        Próxima  
      </button>   
    </div>
  )
}
