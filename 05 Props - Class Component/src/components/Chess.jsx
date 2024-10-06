import { Component } from "react";

class Chess extends Component {

    constructor(chessBoard) {
        super();
        this.state = {
            chessClr: chessBoard.chess,
            chessBox: chessBoard.chessBox
        }
    }

    render() {
        return (
            <div>
                <h1>Chess Component</h1>
                <div style={{ width: '500px', height: '500px',border:'10px double #000' }}>
                    {
                        this.state.chessBox.map((row) => {
                            return (
                                <div className={row} style={{width:'100%',height:'12.5%',display:'flex'}}>
                                    {
                                        this.state.chessBox.map((col)=>{
                                            return(
                                                <div className={col} style={{ width: '12.5%',height:'100%', backgroundColor: (row + col) % 2 == 0 ? this.state.chessClr[0] : this.state.chessClr[1] }}></div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Chess