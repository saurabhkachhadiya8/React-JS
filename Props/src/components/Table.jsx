import { Component } from "react";
import Color from "./Color";
import Chess from "./Chess";

class Table extends Component{

    constructor(tbldata){ {/* We can give any paramater name like:- props,data,items,etc... */}
        super();
        this.state = {
            record: tbldata.data,
            nation: ['I','N','D'],
            chessClr: ['black','white'],
            chessBox: [1,2,3,4,5,6,7,8]
        }
    }

    render(){ 
        return(
            <div>
                <h1>Table Component</h1>
                <table border="1" style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th style={{padding:'5px 15px'}}>Sr no.</th>
                            <th style={{padding:'5px 15px'}}>Name</th>
                            <th style={{padding:'5px 15px'}}>Age</th>
                            <th style={{padding:'5px 15px'}}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.record.map((data,index)=>{
                                const {name,age,phone} = data;
                                return(
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>{phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Color nation={this.state.nation}/>
                <Chess 
                    chess={this.state.chessClr}
                    chessBox={this.state.chessBox}
                />
            </div>
        )
    }
}

export default Table