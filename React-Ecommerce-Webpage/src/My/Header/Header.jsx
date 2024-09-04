import React from 'react'
// import styles from 'Header.module.css'
import logo from './img/logo.png'

const SearchBar = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="searchBar col-lg-12 px-0 d-flex align-items-center justify-content-between py-4 border-bottom">
                        <a href="#" className="logo">
                            <img src={logo} alt="logo.png" />
                        </a>
                        <div className="searchBox d-flex">
                            <input type="text" className="form-control" placeholder="Search For items..." />
                            <select name="Categories">
                                <option value="All" selected>All Categories</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                            <button type="submit" className="btn btn-success">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                        <ul className="searchBarMenu d-flex column-gap-4 fw-bolder">
                            <li>
                                <a href="#" className='text-black'>
                                    <i className="fa-regular fa-user pe-2" />
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>
                                    <i className="fa-regular fa-heart pe-2"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>
                                    <i className="fa-brands fa-opencart pe-2"></i>
                                    <span>Cart</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="navbar col-lg-12">
                        <div className="categoriesToggle cursor-pointer">
                            <i className="fa-solid fa-bars-staggered border rounded p-2" />
                        </div>
                        <ul className="navbarMenu d-flex column-gap-5 align-items-center">
                            <li>
                                <a href="#" className='text-black'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>Category <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>Products <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>Pages <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>Blog <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                            </li>
                            <li>
                                <a href="#" className='text-black'>Elements <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                            </li>
                        </ul>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                            <a href="#" className='text-black ps-1'>+123 ( 456 ) ( 7890 )</a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { SearchBar, NavBar }