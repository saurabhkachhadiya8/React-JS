import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <Link to={'/'} className="navbar-brand">Navbar</Link>
            <form className="d-flex" role="search">
              <input className="form-control rounded-end-0" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success rounded-start-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0" style={{columnGap:'10px'}}>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={'/'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to={'/'} className="dropdown-item">Action</Link></li>
                  <li><Link to={'/'} className="dropdown-item">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to={'/'} className="dropdown-item">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to={'/register'} className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Log in</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header