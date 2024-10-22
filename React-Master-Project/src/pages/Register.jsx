import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !phone || !city) {
            toast.error("Please fill all the fields");
            return false;
        }
        try {
            let res = await fetch(`http://localhost:8000/users`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    city: city,
                    role: 'user'
                })
            })
            let allData = await res.json();
            if(allData){
                toast.success('User Successfully Register.');
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
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city} />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary me-4">Register</button>
                                    <Link to={`/login`}>
                                        <button type="submit" className="btn btn-outline-success">Log in</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1500} />
        </>
    )
}

export default Register