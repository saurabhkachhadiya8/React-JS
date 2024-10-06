import { Component } from "react";
import './style.css'

class State extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    reset() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="State" style={{width:'50%'}}>
                <div className="counter" align="center">
                    <h1 style={{ fontSize: '40px',margin:'0' }}>Counter App - State</h1>
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        {
                            this.state.count > 0 ? <button onClick={() => this.decrement()}>-</button> : <button disabled onClick={() => this.decrement()} style={{ cursor: 'not-allowed' }}>-</button>
                        }
                        <p style={{ fontSize: '60px', fontWeight:'900', margin:'20px', backgroundColor:'#f9e79f', padding:'0 20px', borderRadius:'10px' }}>{this.state.count}</p>
                        <button onClick={() => this.increment()}>+</button>
                    </div>
                    <div className="reset">
                        {
                            this.state.count > 0 ? <button onClick={() => this.reset()}>Reset</button> : <button disabled onClick={() => this.reset()} style={{ cursor: 'not-allowed' }}>Reset</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default State;