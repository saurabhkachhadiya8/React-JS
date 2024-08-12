import { Component } from "react";

class Props extends Component {
    render() {
        const { count, increment, decrement, reset } = this.props;
        return (
            <div className="Props">
                <div className="counter" align="center">
                    <h1 style={{ fontSize: '40px', margin: '0' }}>Counter App - Props</h1>
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        {
                            count > 0 ? <button onClick={decrement}>-</button> : <button disabled onClick={decrement} style={{ cursor: 'not-allowed' }}>-</button>
                        }
                        <p style={{ fontSize: '60px', fontWeight: '900', margin: '20px', backgroundColor: '#f9e79f', padding: '0 20px', borderRadius: '10px' }}>{count}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="reset">
                        {
                            count > 0 ? <button onClick={reset}>Reset</button> : <button disabled onClick={reset} style={{ cursor: 'not-allowed' }}>Reset</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Count extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div style={{width:'50%'}}>
                <Props
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset}
                />
            </div>
        )
    }
}

export default Count