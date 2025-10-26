import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(12);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

  return (
   

    
  <div className="App">

    <h1>Chai aur react</h1>
    <h2>Counter value: {count}</h2>

    <button onClick={increase}>Add value</button> <br /><br />
    <button onClick={decrease}>Decrease value</button>
    
    </div>

  )
}

export default App
