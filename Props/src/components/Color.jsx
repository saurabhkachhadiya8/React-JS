import { Component } from "react";

class Color extends Component{

    constructor(props){
        super();
        this.state = {
            record: props.nation,
            bgcolor: ['orange','blue','green'],
            fontcolor: 'white'
        }
    }

    render(){
        return(
            <div>
                <h1>Color Component</h1>
                {
                    this.state.record.map((str,index)=>{
                        return(
                            <div style={{width:'25%'}}>
                                {
                                    index == 1 ? <h2 style={{backgroundColor:this.state.bgcolor[index++],color:this.state.fontcolor,textAlign:'center',padding:'10px 0',margin:'0 auto',width:'50px',borderRadius:'100%'}}>{str}</h2> : <h2 style={{backgroundColor:this.state.bgcolor[index++],color:this.state.fontcolor,textAlign:'center',padding:'10px 0',margin:'0'}}>{str}</h2>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Color