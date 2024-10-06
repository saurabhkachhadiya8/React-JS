import React from 'react'
import Hoc from '../Hoc'

const SecondPage = ({no,increment,decrement}) => {
  return (
    <div>
        <h1>Second Component</h1>
        <h3>Count : {no}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Hoc(SecondPage)