import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Sukhwinder",
    location: "Greater Noida"
  }

  let newArr = [1, 1, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-t-xl mb-4'>Tailwind & Props</h1>
      <Card username = "Sukhwinder" postName="Web Devloper" city="Delhi" />
      <Card username = "Singh" postName="Web Devloper" />


    </>
  )
}

export default App
