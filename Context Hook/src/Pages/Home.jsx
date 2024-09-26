import React from 'react'
import { useCounter } from '../context/CounterContext'

const Home = () => {

    const {no} = useCounter;

  return (
    <div>
        <h1>Count : {no}</h1>
    </div>
  )
}

export default Home