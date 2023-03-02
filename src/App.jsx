import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import animalBck from "./componets/images/animalBackground.jpeg"
import Cards from "./componets/card.jsx"
function App() {

  return (
    <div className="App">
      <h1>Guess That Animal!</h1>
      <h5>Test your animal knowledge!</h5>
      <h5>Number of cards: 10</h5>
      <div className = "card">
        <Cards />
      </div>
      <button type="next" class="nextCard">⭢</button>
     </div>
  )
}

export default App
