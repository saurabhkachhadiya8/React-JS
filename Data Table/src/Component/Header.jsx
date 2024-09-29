import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#" style={{color:'white',fontSize:'25px'}}>React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-2">
          <Link to='/' className="nav-link active" aria-current="page" style={{color:'white',fontSize:'20px'}} >Add</Link>
        </li>
        <li className="nav-item">
          <Link to='/view' className="nav-link active" aria-current="page" style={{color:'white',fontSize:'20px'}} >View</Link>
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
