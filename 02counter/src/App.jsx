import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(15)
   
  // let counter = 15

  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1)
    


  }

  const delValue = () =>{
    setCounter(counter-1)
  }

  return (

    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button
       onClick={addValue}
       >Add Value</button> {" "}
      <button
      onClick={delValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
