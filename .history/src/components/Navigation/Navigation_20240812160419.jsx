// import React from 'react'

const Navigation = () => {
  return (
    <>
      <ul style:={{
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        padding: '0',
        margin: '0'
      }}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default Navigation;
