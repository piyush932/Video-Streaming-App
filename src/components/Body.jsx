import React from 'react';
import Sidebar from './Sidebar';
import Container from './Container';
import { Outlet } from 'react-router-dom';
import '../CSS/Body.css'

function Body() {
  return (
    <div className='body-container'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body;