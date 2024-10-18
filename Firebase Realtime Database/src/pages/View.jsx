import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { app } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState();

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, 'users');
        onValue(users, (u) => {
            const data = u.val();
            setAllData(data);
        })
    }

    useEffect(() => {
        viewData();
    }, []);

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users);
        alert('User Deleted Successfully');
        viewData();
    }

    return (
        <div align="center">
            <div className='header'>
                <h2>View User</h2>
                <Link to={`/`}>Add</Link>
            </div>
            <table border={1} width={'90%'}>
                <thead>
                    <tr>
                        <th width={'3%'}>Sr No</th>
                        <th width={'16%'}>Name</th>
                        <th width={'18%'}>Email</th>
                        <th width={'15%'}>Company</th>
                        <th width={'12%'}>Phone</th>
                        <th width={'20%'}>Message</th>
                        <th width={'15%'}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allData && Object.entries(allData).map(([key, val], i) => {
                        const { name, email, company, phone, message } = val;
                        return (
                            i % 2 != 0 ?
                                <tr key={key} style={{ backgroundColor: '#172330' }}>
                                    <td align='center'>{++i}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{company}</td>
                                    <td>{phone}</td>
                                    <td>{message}</td>
                                    <td>
                                        <button className='edit' onClick={() => navigate(`/edit`, { state: [key, val] })}>Edit</button>
                                        <button className='delete' onClick={() => deleteUser(key)}>Delete</button>
                                    </td>
                                </tr> :
                                <tr key={key}>
                                    <td align='center'>{++i}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{company}</td>
                                    <td>{phone}</td>
                                    <td>{message}</td>
                                    <td>
                                        <button className='edit' onClick={() => navigate(`/edit`, { state: [key, val] })}>Edit</button>
                                        <button className='delete' onClick={() => deleteUser(key)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default View