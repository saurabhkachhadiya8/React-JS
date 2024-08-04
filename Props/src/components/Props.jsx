import { Component } from "react";
import Table from "./Table";

class Props extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: 'abc',
                    age: 25,
                    phone: 12345
                }, {
                    name: 'def',
                    age: 30,
                    phone: 67890
                }, {
                    name: 'ghi',
                    age: 35,
                    phone: 34567
                }, {
                    name: 'jkl',
                    age: 40,
                    phone: 90123
                }, {
                    name: 'mno',
                    age: 45,
                    phone: 45678
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Props Component</h1>
                {
                    this.state.users.map((user, index) => {
                        const { name, age, phone } = user;
                        return (
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <span style={{padding:'5px 15px'}}>{++index}.</span>
                                <span style={{padding:'5px 15px'}}>{name}</span>
                                <span style={{padding:'5px 15px'}}>{age}</span>
                                <span style={{padding:'5px 15px'}}>{phone}</span>
                            </div>
                        )
                    })
                }
                <Table data={this.state.users} /> {/* We can give any property name like:- data={},table={},product={},etc... */}
            </div>
        )
    }
}

export default Props