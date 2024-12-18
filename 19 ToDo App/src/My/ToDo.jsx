import React, { useState } from 'react'
import './Style.css'

const ToDo = () => {

    const [task, setTask] = useState("");
    const [des, setDes] = useState("");
    const [list, setList] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const [update, setUpdate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task || !des) {
            alert("All Fields Are Required");
            return false;
        }

        if (update) {
            let updateRec = list.map((data) => {
                return data.id === update ? { id: update, task: task, des: des } : data;
            });
            setList(updateRec);
            localStorage.setItem('data', JSON.stringify(updateRec));
            alert("Record Updated.");
        } else {
            let newList = [...list, { id: Math.floor(Math.random() * 100000), task: task, des: des }];
            setList(newList);
            localStorage.setItem('data', JSON.stringify(newList));
            alert('Record Added.');
        }

        setTask("");
        setDes("");
        setUpdate("");
    }
    const handleUpdate = (id) => {
        let findRec = list.find((data) => data.id === id);
        setTask(findRec.task);
        setDes(findRec.des);
        setUpdate(findRec.id);
    }
    const handleDelete = (id) => {
        const deleteRec = list.filter((data) => data.id !== id);
        setList(deleteRec);
        localStorage.setItem('data', JSON.stringify(deleteRec));
        alert("Record Deleted.");
    }

    return (
        <section align="center">
            <div className="container">
                <div className="row">
                    <div className="ToDo">
                        <h1>ToDo App</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                            <textarea placeholder='Description' rows={5} value={des} onChange={(e) => setDes(e.target.value)}></textarea>
                            {
                                update ? <button type="submit"><i className="fa-solid fa-rotate-right fa-flip-horizontal"></i></button> : <button type="submit"><i className="fa-solid fa-plus"></i></button>
                            }
                        </form>
                        <h2>Tasks</h2>
                        <div className='allTasks'>
                            {
                                list.map((data, i) => {
                                    const { id, task, des } = data;
                                    return (
                                        <div className='task' key={i}>
                                            <h3>{task}</h3>
                                            <p>{des}</p>
                                            <div className="action">
                                                <button onClick={() => handleUpdate(id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button onClick={() => handleDelete(id)}><i className="fa-solid fa-trash-can"></i></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToDo