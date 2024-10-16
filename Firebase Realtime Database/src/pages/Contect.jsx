import React from 'react'
import { Link } from 'react-router-dom'

const Contect = () => {
  return (
    <div>
        <h1>Contact</h1>
        <p>This is the contect page.</p>
        <br /><br />
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link>
    </div>
  )
}

export default Contect