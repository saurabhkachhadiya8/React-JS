import React from 'react'

const Chess = ({rows}) => {
  return (
    <div>
        <h1>Chess Component</h1>
        <div style={{border:'10px double #000',width:'700px',height:'700px'}}>
            {
                rows.map((row)=>{
                    return (
                        <div className={row} style={{width:'100%',height:'12.5%',display:'flex'}}>
                            {
                                rows.map((box)=>{
                                    return (
                                        <div className={box} style={{width:'12.5%',backgroundColor: (row + box) % 2 == 0 ? 'black' : 'white'}}></div>
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

export default Chess