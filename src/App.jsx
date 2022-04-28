import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const message = "Hello React from variable!";

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <p>
          <button type="button" 
            onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
