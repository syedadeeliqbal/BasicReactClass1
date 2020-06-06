import React from 'react';
import './Hello.css';

function Hello({name, course}) {
  return <div className="myName">Hello {name}.Thanks for taking {course}</div>
}

export default Hello;
