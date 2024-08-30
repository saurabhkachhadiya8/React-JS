import React, { useState } from 'react'

const ControllComponent = () => {

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [record, setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !course) {
            alert("All Field Are Required");
            return false;
        }

        let newRecord = { name, course };
        setRecord([...record, newRecord]);

        setName("");
        setCourse("");
    }

    return (
        <div>
            <h1>Controll Component</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} />
                <label>Course : </label>
                <input type="text" placeholder="Enter Your Course" onChange={(e) => setCourse(e.target.value)} value={course} />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <br />
            <br />
            {
                record.length > 0 ? (
                    <table border={1} width={"40%"} cellPadding={'10'} style={{ fontSize: '20px' }}>
                        <thead>
                            <tr>
                                <th width={"11%"}>Sr no.</th>
                                <th>Name</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((data, i) => {
                                    const { name, course } = data;
                                    return (
                                        <tr key={i}>
                                            <td align='center'>{++i}</td>
                                            <td>{name}</td>
                                            <td>{course}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                ) : (<div></div>)
            }
        </div>
    )
}

export default ControllComponent