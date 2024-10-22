import React from 'react'
import Sidebar from './components/Sidebar'
import Header from '../../components/Header'

const Users = () => {
  return (
    <div>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <h1>Users</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users