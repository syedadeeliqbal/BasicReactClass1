import React from 'react';
import './App.css';
import Hello from './Hello';
import MediaCard from './MediaCard';
import Gate from './Gate';

function App({name, age}) {
  return <div >Hello from App.js. My name is <strong> {name} </strong>and age is {age}
  <ol>
    <li>React</li>
    <li>Angular</li>
    <li>Vue.js</li>
    <li>Svelte</li>
  </ol>
  <ul>
    <li>React</li>
    <li>Angular</li>
    <li>Vue.js</li>
    <li>Svelte</li>
  </ul>
  <div> Testting JS code inside JSX {90 + 2}</div>
  <br/>
  <h2>Testing the custome Hello Component</h2>
  <Hello name='Adeel' course="Bootcamp 2020" />
  <br/>
  <div>Test Image</div>
  <MediaCard title="Media Card" body={["Media Card body ",<strong>bold</strong>," without changing Media Card"]} imageUrl="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"/>
  <Gate isOpen={true}/>
  <Gate isOpen={false}/>
  </div>
}

export default App;
