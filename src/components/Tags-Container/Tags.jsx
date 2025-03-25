import React from 'react';
import './Tags.css';
import { useNavigate } from 'react-router-dom';

function Tags({ item }) {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={()=>navigate(`/search/${item}`)}>{item}</button>
    </div>
  );
}

export default Tags;
