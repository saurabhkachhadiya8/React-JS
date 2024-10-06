import React, { useState } from 'react'
import Chess from './Chess'

const FunctionCom = ({no,inc,dec,reset}) => {

  const [rows] = useState([1,2,3,4,5,6,7,8])

  return (
    <div align="center">
      <h1>Function Component</h1>
      <h1>Counter</h1>
      <h1 style={{fontSize:'60px'}}>{no}</h1>
      {
        no > 0 ? <input type="button" onClick={()=>dec()} value={'-'} /> : <input type="button" disabled onClick={()=>dec()} value={'-'} />
      }
      {
        no > 0 ? <input type="button" onClick={()=>reset()} value={'reset'} /> : <input type="button" disabled onClick={()=>reset()} value={'reset'} />
      }
      <input type="button" onClick={()=>inc()} value={'+'} />
      <Chess 
        rows={rows}
      />
    </div>
  )
}

export default FunctionCom