import React from 'react'
import { useCounter } from '../context/CounterContext'

const Home = () => {

  const { no } = useCounter();

  return (
    <div align="center">
      <h1>Context Hook</h1>
      <h2>Count : {no}</h2>
    </div>
  )
}

export default Home