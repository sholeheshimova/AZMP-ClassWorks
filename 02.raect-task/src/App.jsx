import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const[count, setCount] = useState(0)

    const  incrementCount = () => {
      setCount(count + 1)
    };

    const decrementCount = () => {
      
        setCount(count - 1)
      
    };
    const resetCount = () => {
      setCount(0)
    }

   const [duz, sehv] = useState(true)
   const deyer = () => {
    sehv(duz)
   };

   const deyers = () => {
    duz(sehv)
   }
   
  return (
    <>
     <div className="btns">
     <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
     
     </div>
     <div className="text">
    <h1>{count}</h1>
      </div>

      <hr />

      
      <button id="myBtn" onClick={sehv}>Open Modal</button>


<div id="myModal" class="modal">

  
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>

    </>
  )
}

export default App
