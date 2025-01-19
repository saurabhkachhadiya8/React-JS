import React, { useState } from 'react'
import './Style.css'

const Crud = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [update, setUpdate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("All Fields Are Required.");
            return false;
        }

        if (update) {
            const updateRecord = record.map((data) => {
                return data.id === update ? { id: update, name: name, email: email } : data;
            });
            setRecord(updateRecord);
            localStorage.setItem('users', JSON.stringify(updateRecord));
            alert('Record Updated.');
        } else {
            let newRecord = [...record, { id: Math.floor(Math.random() * 100000), name: name, email: email }];
            setRecord(newRecord);
            localStorage.setItem('users', JSON.stringify(newRecord));
            alert('Record Added.')
        }

        setName("");
        setEmail("");
        setUpdate("");
    }
    const handleUpdate = (id) => {
        const update = record.find((data) => data.id === id);
        setName(update.name);
        setEmail(update.email);
        setUpdate(id);
    }
    const handleDelete = (id) => {
        const deleteData = record.filter((data) => data.id != id);
        setRecord(deleteData);
        localStorage.setItem('users', JSON.stringify(deleteData));
        alert('Record Deleted.');
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="crud">
                        <h1>CRUD Operations</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {
                                update ? <button type="submit">Update</button> : <button type="submit">Add</button>
                            }
                        </form>
                        <h2>All Records</h2>
                        <div className="data_tbl">
                            <table width={'100%'} border={1}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                                        <th width={'8%'}>#</th>
                                        <th width={'30%'}>Name</th>
                                        <th width={'37%'}>Email</th>
                                        <th width={'25%'}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        record.map((data, i) => {
                                            const { id, name, email } = data;
                                            return (
                                                i % 2 != 0 ? (
                                                    <tr key={i} style={{ backgroundColor: '#f1f1f1' }}>
                                                        <td>{++i}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>
                                                            <button onClick={() => handleUpdate(id)}>Edit</button> || <button onClick={() => handleDelete(id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <tr key={i}>
                                                        <td>{++i}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>
                                                            <button onClick={() => handleUpdate(id)}>Edit</button> || <button onClick={() => handleDelete(id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crud