import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>Hellow from App.js. My name is {name} and age is {age}
  <br/>
  <h2>Testing the custome Hello Component</h2>
  <Hello name='Adeel' course="Bootcamp 2020" />
  </div>
}

export default App;
