import './App.css';
import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/word')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSolution(data)
      })
  }, [])

  return (
    <Wordle solution={solution} />
  );
}

export default App;
