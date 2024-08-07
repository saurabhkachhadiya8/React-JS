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
            <div>
                <h1 align="center" style={{ color: '#fff', fontSize: '70px',textShadow:' 0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)' }}>React JS</h1>
                <div className="counter" align="center" style={{ border: '1px solid #000', width: '20%', padding: '20px 0 40px', backgroundColor: '#ce98e6', border: 'none', borderRadius: '20px', margin: '70px auto',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <h1 style={{ fontSize: '40px' }}>Counter App</h1>
                    <h1 style={{ fontSize: '60px',marginBottom:'20px' }}>{this.state.count}</h1>
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        {
                            this.state.count > 0 ? <button onClick={() => this.decrement()}>-</button> : <button disabled onClick={() => this.decrement()} style={{ cursor: 'not-allowed' }}>-</button>
                        }
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