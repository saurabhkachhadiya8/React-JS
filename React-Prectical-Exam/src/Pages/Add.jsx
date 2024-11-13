import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Add = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [record, setRecord] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || [];
    setRecord(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !status) {
      alert("All fields are required.");
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      status
    }
    let newrecord = [...record, obj];
    localStorage.setItem('users', JSON.stringify(newrecord));
    alert("User Add.");
    setName('');
    setStatus('');
    navigate('/view');
  };

  return (
    <div>
      <Header/>
      <div className="container ">
        <div className="row">
          <h1 align="center" className='mt-5'>Todo List App</h1>
          <div className="col-3 mt-4 mx-auto border shadow p-4" style={{ height: '200px' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Enter Your Name' id="name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="mb-3">
                <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)} value={status}>
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="unactive">Unactive</option>
                </select>
              </div>
              <button type="submit" className="btn btn-info d-block mx-auto">Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
