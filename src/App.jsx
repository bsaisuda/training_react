import { Component, useState } from 'react'
import './App.css'

class AppClass extends Component {
  message = "Demo";

  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  setCount(newValue) {
    this.setState( { count:  newValue} );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.message}</p>
          <p>
            <button type="button" 
              onClick={() => this.setCount(this.state.count + 1)}>
              count is: {this.state.count}
            </button>
          </p>
        </header>
      </div>
    )
  };
}

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

export default AppClass
