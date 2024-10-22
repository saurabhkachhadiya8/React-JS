import React from 'react'
import Header from '../../components/Header'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard