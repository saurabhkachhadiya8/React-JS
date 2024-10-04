import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState([]);

  const getRecord = async () => {
    try {
      let { data } = await axios.get(`https://dummyjson.com/todos`);
      setData(data.todos);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getRecord();
  }, []);

  return (
    <div align="center">
      <h1>AXIOS - API Calling</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, i) => {
              const { id, todo, completed } = d;
              return (
                <tr key={++i}>
                  <td align='center'>{id}</td>
                  <td>{todo}</td>
                  {
                    completed ? <td align='center' style={{color:'green'}}>True</td> : <td align='center' style={{color:'red'}}>False</td>
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home