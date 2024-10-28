import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  let location = useLocation();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setName(location.state.name);
    setStatus(location.state.status);
  }, [location.state]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || []
    setRecord(data);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !status) {
      alert("All Field Required.");
      return false;
    }
    let up = record.map((val) => {
      if (val.id == location.state.id) {
        val.name = name;
        val.status = status;
      }
      return val;
    });
    localStorage.setItem('users', JSON.stringify(up));
    setName('');
    setStatus('');
    navigate('/view');
  }

  return (
    <div align="center">
      <Header />
      <h2>Add user</h2>
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4 border p-4 mb-5 shadow">
            <form onSubmit={handleSubmit}>
              <input type="text" className="form-control" id="name" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name} />
              <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="unactive">Unactive</option>
              </select>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit;
