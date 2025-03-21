import React from 'react';
import Sidebar from './Sidebar';
import Container from './Container';

function Body() {
  return (
    <div className='body-container'>
        <Sidebar/>
        <Container/>
    </div>
  )
}

export default Body;