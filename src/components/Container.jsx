import React from 'react';
import Tags from './Tags/Tags';
import Videocomponent from './Videos-Container/VideoComponent';
import TagsList from './Tags/TagsList';
import '../CSS/Container.css'

function Container() {
  return (
    <div className='main-container'>
        <TagsList/>
        <Videocomponent/>
    </div>
  )
}

export default Container