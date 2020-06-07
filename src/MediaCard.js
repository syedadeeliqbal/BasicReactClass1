import React from 'react';

function MediaCard({title, body, imageUrl}) {
  return <div>
      <h2>This {title} is the title of the Media Card in h2 tag</h2>
      <p>This is the {body} in p tag</p>
      <img alt="Test Image" src={imageUrl}/>

  </div>
}

export default MediaCard;
