import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { Decrement, Increment, Reset } from '../action/counterAction';

const Home = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div align="center">
      <h1>Welcome to my home page</h1>
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
      <button onClick={() => dispatch(Increment())}>+</button>
      <br /><br />
      <Link to="/about">About</Link> &nbsp;
      <Link to="/contect">Contect</Link>
    </div>
  )
}

export default Home