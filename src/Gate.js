import React from 'react';

function Gate({isOpen}) {
  return <div> Gate is + {isOpen === true ? "Open" : "closed"}</div>
}

export default Gate;