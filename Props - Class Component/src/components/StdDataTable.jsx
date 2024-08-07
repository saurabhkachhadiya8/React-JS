import { Component } from "react";

class StdDataTable extends Component {

    constructor(StdData) {
        super();
        this.state = {
            data: StdData.data
        }
    }

    render() {
        return (
            <div>
                <h1>Student Data Table</h1>
                <table border={1} cellPadding={15} width={1000}>
                    <thead style={{fontSize:'25px'}}>
                        <tr>
                            <th>Srno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Course</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:'20px'}}>
                        {
                            this.state.data.map((stdData) => {
                                const {grid,name,email,password,course,city} = stdData;
                                return (
                                    <tr>
                                        <td style={{textAlign:'center'}}>{grid}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{course.join(" , ")}</td>
                                        <td>{city}</td> 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default StdDataTable