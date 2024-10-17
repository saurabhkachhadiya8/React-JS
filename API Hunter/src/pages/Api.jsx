import React, { useState } from 'react'
import { useEffect } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(AllPost => {
        setData(AllPost.products);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div align="center">
      <h1>API Using Fetch Method</h1>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {
        data.map((p) => {
          const {id,title,description,category,price,thumbnail} = p;
          return(
            <div key={id} style={{border:'1px solid #000',padding:'10px'}}>
              <div className="card">
                <img src={thumbnail} alt={thumbnail} width={'200'}/>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Api