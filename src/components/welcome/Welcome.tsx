import React from "react";
import Logo from "../../img/Fifa.png";
import './Welcome.css'
export const Welcome = () => {
  return (
    <div id="welcome">
      <h2> Seja bem-vido ao Quiz da Copa 2022</h2>   <button> Iniciar </button>  
      <p> Clique no botão acima para iniciar </p>
      

      <img src={Logo} alt="Logo da copa do mundo 2022 no Qatar"  /> 
    </div>
  );
};
