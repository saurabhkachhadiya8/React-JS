import React, { useEffect, useState } from 'react'

const Home = () => {

  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    try {
      let data = await fetch(`http://localhost:8000/users`);
      let res = await data.json();
      setUserData(res);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div align="center">
      <h1>Json Server</h1>
      <table border={1} width={'30%'} cellPadding={10}>
        <thead>
          <tr>
            <th width={'20%'}>Sr No</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user, i) => {
              const { id, name, phone } = user;
              return (
                <tr key={++i}>
                  <td align='center'>{++i}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
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