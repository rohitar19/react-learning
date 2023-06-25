import React ,  { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state={
    person:[
      { name: 'Rohit' , age :23} ,
      { name: 'shine' , age:22 }
    ]

  }

   switchNameHandler = (newName) => {
      // console.log('was clicked!');
      // this.state.person[0].name='rohitarya'; DONOT DO THIS APPORACH
     
      this.setState({
        person:[
          { name:  newName , age :23} ,
          { name: 'shine-Arya' , age:22 }
        ]
      })

   }

   nameChangedHandler = (event) => {
    this.setState({
      person:[
        { name:  'Rohit' , age :23} ,
        { name:   event.target.value , age:22 }
      ]
    })
   }


  render(){
    const style = {
      backgroundColor: 'white',
      font : 'inherit' ,
      border : '1px solid blue' ,
      padding : '8px' ,
      cursor : 'pointer'
    };



  return (
    <div className="App">
      <h1>HI , i am rohit app</h1>
      <p>This is really working</p>
      {/* <Person name="ROhit" age ="23"> my hobbies is playing cricket</Person>
      <Person name = "shine" age= "22"></Person> */}

      {/* donot use parenthethis at the end of switchNameHandler() like this , it immediate call the methode but we have give reference. */}
       
      {/* //this methode can be ineffcient use bind methode instead */}

       <button 
       style={style}
       onClick={ () => this.switchNameHandler('ROhit')}>Switch Name</button>  
      <Person 
        name = {this.state.person[0].name} 
        age={this.state.person[0].age} 
        click={this.switchNameHandler.bind(this , 'Rohit-Arya')}>
          my hobbies is playing cricket</Person>
      <Person 
        name = {this.state.person[1].name} 
        age={this.state.person[1].age}
        changed={this.nameChangedHandler} />
     
      
    </div>
  );

  // return React.createElement('div' , {className: 'App'} , createElement('h1' , null , 'does this work?'));
}
}

export default App;

// -----FUCTION BASED COMPONENT--------

//    const app = props =>  {
//     const [personsState ,setPersonsState] = useState({                 
//       person: [
//         { name: 'Rohit' , age :23} ,
//         { name: 'shine' , age:22 }
//       ] ,
//     });
     
//     const [otherState , setOtherState] = useState('some other value');
    
//     console.log(personsState , otherState);

//     const  switchNameHandler = () => {
//       // console.log('was clicked!');
//       // this.state.person[0].name='rohitarya'; DONOT DO THIS APPORACH
     
//       setPersonsState({
//         person:[
//           { name: 'Rohit-Arya' , age :23} ,
//           { name: 'shine-Arya' , age:22 }
//         ]
//       });
  
//    };

  
//   return (
//     <div className="App">
//       <h1>HI , i am rohit app</h1>
//       <p>This is really working</p>
//       {/* <Person name="ROhit" age ="23"> my hobbies is playing cricket</Person>
//       <Person name = "shine" age= "22"></Person> */}

//       {/* donot use parenthethis at the end of switchNameHandler() like this , it immediate call the methode but we have give reference. */}

//        <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name = { personsState.person[0].name} age={ personsState.person[0].age} >my hobbies is playing cricket</Person>
//       <Person name = { personsState.person[1].name} age={ personsState.person[1].age} />
     
      
//     </div>
//   );

//   // return React.createElement('div' , {className: 'App'} , createElement('h1' , null , 'does this work?'));
// }


// export default app;
 




