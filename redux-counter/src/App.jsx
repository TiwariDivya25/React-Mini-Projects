import './App.css'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'


function App() {
  const [amount, setAmount] = useState("");
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handlereset = () => {
    dispatch(reset());
  }

  
  

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <br />
      <br />
      <span>count: {count}</span>
      <br />
      <br />
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handlereset}>reset</button>
      <br />
      <br />
      <input 
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
    </>
  )
}

export default App
