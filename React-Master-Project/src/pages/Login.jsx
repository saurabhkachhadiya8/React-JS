import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`, {
        method: 'GET'
      })
      let data = await res.json();
      if (data.length == 0) {
        toast.error('Both are Invalid.');
      } else {
        if (data[0].role == 'admin') {
          navigate('/admin');
        }else{
          navigate('/');
        }
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header fw-semibold">
                User Login
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                  </div>
                  <button type="submit" className="btn btn-outline-primary me-4">Log in</button>
                  <Link to={`/register`}>
                    <button type="submit" className="btn btn-outline-success">Register</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
