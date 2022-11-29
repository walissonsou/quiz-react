import { Welcome } from './components/welcome/Welcome'
import './App.css'
import { Question } from './components/Questions/Question';
import { useContext } from 'react';
import { myQuiz } from './context/ContextQuiz/myQuiz';
function App() {

  const [ quizState, dispatch ] = useContext(myQuiz) 
  
  return (
    <div className="App">
      <h1> Quiz da Copa </h1>
      { quizState.gameStage === "Start" && <Welcome /> }
      { quizState.gameStage === "Playing" && <Question /> }
    </div>
  );
}

export default App
