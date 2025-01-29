import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card username="Aaron"/> 

      <Card username="Astle"/>

      <Card /> 

      <Footer />
    </>
  )
}

export default App
