import './App.css'; 
import Alphabet from './components/Alphabet';
import Home from './components/Home';
import PlayGame from './components/PlayGame';
import EndGame from './components/EndGame';
import React, { useEffect, useState, useCallback  } from 'react';
function App() {

  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  
  useEffect(() => {
    if(statusGame === 'playing'){
      setScore({
        right: 0,
        wrong: 0
      });
      // run timeout 60s end game
      const timeOutGame = setTimeout(() => {
        setStatusGame('endGame');
      }, 60000);
      return () => clearTimeout(timeOutGame);
    }
  }, [statusGame])


  const handleChangeStatusGame = (status = 'playing') => {
    setStatusGame(status);
  } 
  const handleChangeScore = (type = 1) => {
    if(type === 1){
      setScore({...score, 
        right: score.right + 1
      });
    }else{
      setScore({...score, 
        wrong: score.wrong + 1
      });
    }
  }
  

  let showMain;
  switch (statusGame) {
    case 'playing':
      showMain = <PlayGame onGame={ handleChangeStatusGame } onChangeScore = { handleChangeScore }/>
      break;
    case 'endGame':
      showMain = <EndGame onGame={ handleChangeStatusGame } score = { score }/>
      break;
    default:
      showMain =  <Home onGame={ handleChangeStatusGame } />
      break;
  }
  
  return (
    <>
      <div className="App">
        {  showMain }
      </div>
    </>
  )
}

export default App;
