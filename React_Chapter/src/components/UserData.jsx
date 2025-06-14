import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard.jsx';

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/indianUsers.json') // local file in public folder
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserData;
