import React, {Component, createElement} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>HI , i am rohit app</h1>
      <p>This is really working</p>
      <Person name="ROhit" age ="23"> my hobbies is playing cricket</Person>
      <Person name = "shine" age= "22"></Person>
     
      
    </div>
  );

  // return React.createElement('div' , {className: 'App'} , createElement('h1' , null , 'does this work?'));
}
}

export default App;
 