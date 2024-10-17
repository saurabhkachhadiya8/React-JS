import React, { useState } from 'react'
import { useEffect } from 'react';

const FetchApi = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(AllData => {
        setData(AllData.products);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div align="center">
      <h1>API Using Fetch Method</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {
          data.map((p) => {
            const { id, title, category, price, thumbnail } = p;
            return (
              <div key={id} style={{ padding: '10px', width: '20%' }}>
                <div className="card" style={{ border: '1px solid #000', padding: '10px', height: '380px' }}>
                  <img src={thumbnail} alt={thumbnail} width={'100%'} />
                  <div className="card-content">
                    <h5 style={{ margin: '0' }}>{category}</h5>
                    <h3 style={{ margin: '0' }}>{title}</h3>
                    <div className="star" style={{ color: 'orange' }}>
                      &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                    </div>
                    <p style={{ margin: '0' }}>${price}</p>
                    <button style={{ width: '80%', padding: '8px 0', color: 'white', backgroundColor: '#00ab00', border: '0' }}>Add To Cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FetchApi