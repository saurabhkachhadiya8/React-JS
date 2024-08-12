import React, { useState } from 'react'
import './style.css'

const Counter = ({ no, inc, dec, reset }) => {

  return (
    <div align="center">
      <h1 align="center" style={{ color: '#fff', fontSize: '70px', textShadow: ' 0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)' }}>React JS - Function Component</h1>
      <div className="counter">
        <h1 style={{ fontSize: '40px', margin: '0' }}>Counter App</h1>
        <p style={{ fontSize: '60px', fontWeight: '900', margin: '40px' }}>{no}</p>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          {
            no > 0 ? <input type="button" onClick={() => dec()} value={'-'} /> : <input type="button" disabled onClick={() => dec()} value={'-'} style={{ cursor: 'not-allowed' }} />
          }
          {
            no > 0 ? <input type="button" onClick={() => reset()} value={'0'} /> : <input type="button" disabled onClick={() => reset()} value={'0'} style={{ cursor: 'not-allowed' }} />
          }
          <input type="button" onClick={() => inc()} value={'+'} />
        </div>
      </div>
    </div>
  )
}

export default Counter