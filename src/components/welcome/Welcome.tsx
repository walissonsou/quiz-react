import React, { useContext } from "react";
import { myQuiz } from "../../context/ContextQuiz/myQuiz";
import Logo from "../../img/Fifa.png";
import './Welcome.css'


export const Welcome = () => {

  const [ quizState, dispatch ] = useContext(myQuiz) 


  return (
    <div id="welcome">
      <h2> Seja bem-vido ao Quiz da Copa 2022</h2>   <button onClick={() => dispatch({type: 'CHANGE_STATE'})}> Iniciar </button>  
      <p> Clique no botão acima para iniciar </p>
      

      <img src={Logo} alt="Logo da copa do mundo 2022 no Qatar"  /> 
    </div>
  );
};
