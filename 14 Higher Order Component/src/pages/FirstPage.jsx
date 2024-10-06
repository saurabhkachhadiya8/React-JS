import React from 'react'
import Hoc from '../Hoc'

const FirstPage = ({no,increment,decrement}) => {
  return (
    <div>
        <h1>First Component</h1>
        <h3>Count : {no}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Hoc(FirstPage)