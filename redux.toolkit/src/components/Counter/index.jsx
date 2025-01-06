import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "../../redux/features/counterSlice"
import { useRef } from "react"

import React from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter)


    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleIncrementByAmount = () => {
       
        dispatch(incrementByAmount(Number(inputRef?.current?.value)))
    }

  return (
    <div>
      <button onClick={() => { dispatch(increment("test")) }}>Increment</button>
            <h1>{count.value}</h1>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <br />
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <div>
                <input type="number" ref={inputRef} />
                <button onClick={() => { handleIncrementByAmount() }}>inc by amount</button>
            </div>
            
    </div>
  )
}

export default Counter
