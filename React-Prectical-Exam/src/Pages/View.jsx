import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const View = () => {
  const [record, setRecord] = useState([]);
  const [filteredRecord, setFilteredRecord] = useState([]);
  const [mdelete, setMDelete] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setRecord(data);
    setFilteredRecord(data);
  }, []);

  const deleteUser = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedRecords));
    alert("User Deleted.");
    setRecord(updatedRecords);
    setFilteredRecord(updatedRecords);
  };

  const filterData = (status) => {
    const updatedRecords = record.filter((val) => val.status === status);
    setFilteredRecord(status === '' ? record : updatedRecords);
  };

  const alldelete = (id, checked) => {
    let all = [...mdelete];
    if (checked) {
      all.push(id);
    } else {
      all = all.filter((val) => val !== id);
    }
    setMDelete(all);
  };

  const deletemultiple = () => {
    if (mdelete.length === 0) {
      alert("Minimum 1 User Select.");
      return false;
    }
    let md = record.filter((val) => !mdelete.includes(val.id));
    localStorage.setItem('users', JSON.stringify(md));
    setRecord(md);
    setFilteredRecord(md);
    setMDelete([]);
    alert("Users Delete.");
  };

  return (
    <div>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 mx-auto border shadow p-4">
            <form className="mb-3">
              <div className="col-4">
                <select className="form-select" onChange={(e) => filterData(e.target.value)}>
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="unactive">Unactive</option>
                </select>
              </div>
            </form>
            <table className="table border mt-3 table">
              <thead>
                <tr align="center">
                  <th scope="col">#</th>
                  <th scope="col">Status</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                  <th scope="col">
                    <button className='btn btn-danger btn-sm' onClick={deletemultiple}>Delete</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRecord.map((val, i) => {
                  const { id, name, status } = val;
                  return (
                    <tr key={id} align="center">
                      <td>{++i}</td>
                      {
                        status == "active" ? (
                          <td style={{ color: 'green' }}>{status}</td>
                        ) : (
                          <td style={{ color: 'red' }}>{status}</td>
                        )
                      }
                      <td align='left'>{name}</td>
                      <td>
                        <button className="btn btn-info btn-sm" onClick={() => navigate('/edit', { state: val })} >Edit</button>
                        <button className="btn btn-danger btn-sm ms-3" onClick={() => deleteUser(id)}>Delete</button>
                      </td>
                      <td>
                        <input type="checkbox" onChange={(e) => alldelete(id, e.target.checked)} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

