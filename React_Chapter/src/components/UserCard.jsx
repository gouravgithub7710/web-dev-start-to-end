import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={styles.image} />
      <h2  style={styles.name}>{user.firstName} {user.lastName}</h2>
      <p style={styles.text}><strong style={styles.label}>Job:</strong> {user.company.title}</p>
      <p style={styles.text}><strong style={styles.label}>Education:</strong> {user.university}</p>
      <p style={styles.text}><strong style={styles.label}>Salary:</strong> ₹{user.company.salary.toLocaleString()}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '10px',
    maxWidth: '260px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '1rem'
  },
  name: {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
    color: '#555'
  },
   label: {
    color: '#000',
    fontWeight: '600'
  },
    text: {
    fontSize: '1rem',
    margin: '0.3rem 0',
    color: '#555'}
};

export default UserCard;
