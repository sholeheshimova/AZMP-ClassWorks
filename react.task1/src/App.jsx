import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Cards from './Products/Cards'

function App() {
  

  return (
    <>
      
      <div className="cards">
        <Cards
        title = "Zebra"
        color = "white-black"
        kg = "170"
        />
        <Cards
        title = "Elephant"
        color = "Gray"
        kg = "500"
        />
        <Cards
        title = "Lion"
        color = "Orange"
        kg = "200"
        />
      </div>
    
  
    </>
  )
}

export default App
