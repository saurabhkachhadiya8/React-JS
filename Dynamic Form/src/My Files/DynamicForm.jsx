import React, { useState } from 'react'
import './DynamicForm.css'

const DynamicForm = () => {

    const [input, setInput] = useState([
        { id: '', name: '', email: '', salary: '' }
    ]);

    const addInput = () => {
        setInput([...input, { id: Math.floor(Math.random() * 10000), name: '', email: '', salary: '' }]);
    }

    const removeInput = (id) => {
        setInput(input.filter((item) => item.id != id));
    }

    return (
        <div className='tbl-main' align="center">
            <h1>React - Add & Delete Table Rows Dynamically</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th><button className='addBtn' onClick={() => addInput()}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        input.map((data, i) => {
                            const { id, name, email, salary } = data;
                            return (
                                <tr key={id}>
                                    <td><input value={name} type="text" placeholder='Enter Your Name' onChange={(e) => {
                                        const updatedInputs = input.map((item) =>
                                            item.id === id ? { ...item, name: e.target.value } : item
                                        );
                                        setInput(updatedInputs);
                                    }} /></td>
                                    <td><input value={email} type="text" placeholder='Enter Your Email ID' onChange={(e) => {
                                        const updatedInputs = input.map((item) =>
                                            item.id === id ? { ...item, email: e.target.value } : item
                                        );
                                        setInput(updatedInputs);
                                    }} /></td>
                                    <td><input value={salary} type="text" placeholder='Enter Your Salary' onChange={(e) => {
                                        const updatedInputs = input.map((item) =>
                                            item.id === id ? { ...item, salary: e.target.value } : item
                                        );
                                        setInput(updatedInputs);
                                    }} /></td>
                                    <td>
                                        {
                                            i > 0 && (<button className='removeBtn' onClick={() => removeInput(id)}>X</button>)
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DynamicForm