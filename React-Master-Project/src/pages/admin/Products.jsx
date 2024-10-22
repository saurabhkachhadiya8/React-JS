import React from 'react'
import Header from '../../components/Header'
import Sidebar from './components/Sidebar'

const Products = () => {
  return (
    <div>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <h1>Products</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products