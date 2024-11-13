import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Edit = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setName(location.state.name)
    setStatus(location.state.status)
  }, [location.state]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || []
    setRecord(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !status) {
      alert("All fields are required.");
      return false;
    }

    let up = record.map((val) => {
      if (val.id == location.state.id) {
        val.name = name;
        val.status = status;
      }
      return val;
    })
    localStorage.setItem('users', JSON.stringify(up));
    alert("User Update.");
    setName('');
    setStatus('');
    navigate('/view');
  };

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <h1 align="center" className='mt-4'>Todo List App</h1>
          <div className="col-3 mt-4 mx-auto border shadow p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Enter Your Name' id="name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="mb-3">
                <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)} value={status}>
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="unactive">Unactive</option>
                </select>
              </div>
              <button type="submit" className="btn btn-info d-block mx-auto">Update User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
