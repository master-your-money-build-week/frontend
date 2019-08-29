import React, { useEffect, useState } from 'react';
import UserCard from './UserCard'
import axios from 'axios';
import styled from 'styled-components';


const SECTION = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export default function UserList() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((data) => {
        console.log(data.data.data)

        setUsers(data.data.data)
      })
      .catch((err) => {
        console.log('this is the error', err)
      })
  }, []);

  return (
    <SECTION className="episode-list grid-view">
      {user.map((data) => {
        return (
          <UserCard
            avatar={data.avatar}
          />
        )
      })}
    </SECTION>
  );
}

