import React, { useRef, useState } from 'react'

const UncontrollComponent = () => {

    const name = useRef("");
    const course = useRef("");
    const [record, setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.current.value || !course.current.value) {
            alert("All Field Are Required");
            return false;
        }

        const newRecord = { name: name.current.value, course: course.current.value }
        setRecord([...record, newRecord]);

        name.current.value = "";
        course.current.value = "";
    }

    return (
        <div>
            <h1>Uncontroll Component</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder='Enter Your Name' ref={name} />
                <label>Course : </label>
                <input type="text" placeholder='Enter Your Course' ref={course} />
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
                                <th width={"15%"}>Sr no.</th>
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

export default UncontrollComponent