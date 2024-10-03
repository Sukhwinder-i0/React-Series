import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  
  let [counter, setCounter] = useState(5)          // any default value: true, false, '', 5, 10


  // we get two values with useState in the form of array ==> value: conter :: function : setCounter
// let counter = 5;

const addValue = () => {
  // setCounter(counter + 1)
  // setCounter(counter + 1)    // useState send updates in batches 
  // setCounter(counter + 1)    // here will be only update by 1
  // setCounter(counter + 1)


  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)      // will be updated by 5
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
}

const removeValue = () => {
  setCounter(counter - 1)
}

// Data is not getting update in UI :: React(hooks) will do this




  return (
    <>
      <h1>Sukhwinder Singh</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>

      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
