import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, reset } from '../action/counterAction';

const Counter = () => {

    const no = useSelector(state => state.cnt);
    const dispatch = useDispatch();

  return (
    <div align="center">
        <h1>Counter</h1>
        <h3>Count : {no}</h3>
        <button onClick={() => dispatch(Increment())} style={{marginRight:'10px'}}>+</button>
        <button onClick={() => dispatch(reset())} style={{marginRight:'10px'}}>Reset</button>
        <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  )
}

export default Counter