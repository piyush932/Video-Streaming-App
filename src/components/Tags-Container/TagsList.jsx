import React from 'react';
import Tags from './Tags';
import './TagsList.css'

function TagsList() {
  const tags = [
    "Gaming", "Songs", "Ipl", "News", "Luffy", "Zoro",
    "Bleach", "React", "Java", "Frontend", "Backend","Rcb"
  ];

  return (
    <div className='tagslist'>
      {tags.map((tag, index) => (
        <Tags key={index} item={tag} />
      ))}
    </div>
  );
}

export default TagsList;
