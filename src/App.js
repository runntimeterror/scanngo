import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData = await axios.get('http://localhost:8080/books')
      setTodos(todoData)
    } catch (err) { console.log('error fetching todos') }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
