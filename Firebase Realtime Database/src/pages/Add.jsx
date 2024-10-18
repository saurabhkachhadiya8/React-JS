import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !company || !phone || !message) {
      alert("Please fill all the fields");
      return false;
    }

    const db = getDatabase(app);
    const id = Math.floor(Math.random() * 1000000);

    set(ref(db, `users/${id}`), {
      name: name,
      email: email,
      company: company,
      phone: phone,
      message: message
    })
    alert('Data Added Successfilly');
    navigate(`/view`);
  }
  const allClear = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
  }

  return (
    <div align="center">
      <div className='header'>
        <h2>Add User</h2>
        <Link to={`/view`}>View</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlfor="name">Name :</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <label htmlfor="email">Email ID :</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label htmlfor="company">Company :</label>
        <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} />
        <label htmlfor="phone">Phone :</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
        <label htmlfor="message">Message :</label>
        <textarea name="message" rows={3} onChange={(e) => setMessage(e.target.value)} value={message} />
        <br />
        <div className="btns">
          <input type="submit" defaultValue={'Submit'} />
          <button className='submit' onClick={allClear}>Clear</button>
        </div>
      </form>

    </div>
  )
}

export default Add