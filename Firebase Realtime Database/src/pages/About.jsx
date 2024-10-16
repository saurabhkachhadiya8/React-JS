import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <br /><br />
        <Link to="/">Home</Link> &nbsp;
        <Link to="/contect">Contect</Link>
    </div>
  )
}

export default About