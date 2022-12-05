import React, { useContext } from 'react'
import { myQuiz } from '../../context/ContextQuiz/myQuiz'

export const EndQuestions = () => {
  const [ quizState, dispatch ] = useContext(myQuiz) 
  
  return (
    <div>
      <h2>
        Game Over
      </h2>
      <button onClick={() => dispatch({type: 'BACK_INITIAL'})}> REINICIAR </button>
    </div>
  )
}
