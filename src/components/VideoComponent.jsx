import React, { useEffect, useState } from 'react';
import { data } from '../data/Api_data';
import Videocard from './Videocard';
import '../CSS/VideoComponent.css'
import { Link } from 'react-router-dom';

function Videocomponent() {
  const [videos,setVideos] = useState(data.items);

  // useEffect(()=>{
  //   getVideos();
  // }
  //   ,[])

  // const getVideos = async () => {
  //   try {
  //     const response = await fetch(import.meta.env.VITE_YOUTUBE_API);
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Failed to fetch videos:", error);
  //   }
    // setVideos(data.items[0]);
  // };
  return (
    <div className='video-component'>
      {
        videos.map((item)=>(
          <Link to={'/watch?v='+item.id} key={item.id}>
          <Videocard key={item.id} info={item}/>
          </Link>
        ))
      }
    </div>
  )
}

export default Videocomponent; 