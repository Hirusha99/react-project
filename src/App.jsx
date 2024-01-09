import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[message,setMessage] = useState(0) 
const onClick = () => setMessage(message+1)
const decrease =() => setMessage(message-1)
 return (
    <>
      <h1>Counter App</h1>
      <h2>{message}</h2>
      <button onClick={onClick}> Increase </button>
      <h4></h4>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
