import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import '../CSS/Body.css';
import ScrollToTop from '../components/ScrollToTop';

function Body() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='body-container'>
      <ScrollToTop />
      {isSidebarVisible && <Sidebar />}
      <Outlet />
    </div>
  );
}

export default Body;
