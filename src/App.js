import React ,  { Component } from 'react';

import styled from 'styled-components' ;

import './App.css';
// import Radium , {StyleRoot} from 'radium';
import Person from './Person/Person';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green' };
color : white;
font : inherit ;
border : 1px solid blue ;
padding : 8px ;
cursor : pointer;
&:hover {
  background-color: ${props => props.alt ? 'blue' : 'brown' };
  color : black;

`;

class App extends Component {
  
  state={
    person:[
      { id:'FFGG1' , name: 'Rohit' , age :23} ,
      { id :'RRSS1' ,name: 'shine' , age:22 }
    ]

  }

  //  switchNameHandler = (newName) => {
  //     // console.log('was clicked!');
  //     // this.state.person[0].name='rohitarya'; DONOT DO THIS APPORACH
     
  //     this.setState({
  //       person:[
  //         { name:  newName , age :23} ,
  //         { name: 'shine-Arya' , age:22 }
  //       ] ,
  //       otherState : 'some other state' ,
  //       showPerson: false 
  //     })

  //  }

   nameChangedHandler = (event , id) => {
    
     const personIndex = this.state.person.findIndex( p => {
      return p.id===id;
     });

     const persons ={
      ...this.state.person[personIndex]
     };

     // const person = Object.assign({} , this.state.person[personIndex]);
     //now update the name 

     persons.name = event.target.value;

     const person = [...this.state.person];
     person[personIndex] = persons;
     
    this.setState({ person: person })
   }

   toggleNameHandler = () => {

    const doesShow =  this.state.showPerson;
    this.setState({ showPerson : !doesShow});
       
   }
  // 6. splice basically remove one element from the array
  // 7. this methode has flaw bcz here we are given reference to the
  //original dataset ; we always have to make copy of the original data set 
  //so we have to use " slice()" this methode without argument simply copy
  //the array of original dataset;
   deletePersonHandler = (personIndex) => {  

    // const person = this.state.person.slice();
    // ... is a spread operator which make a list of array 
      const person = [...this.state.person];
      person.splice(personIndex , 1);
      this.setState({person : person})
            
   }

  // 9. we cant apply sudo selector in inline css
  //12. for use hover and sudo property in inline which
  // not by defaut possible , add radium package using 
  // npm install --save radium
  // if you got dependency error while installing package
  //then use at the end --legacy-peer-deps 

  //12. install styled-components package , and remove all
  //the radium traces for using normal css 

  render(){
    const style = {
      backgroundColor: 'green',
      color : 'white',
      font : 'inherit' ,
      border : '1px solid blue' ,
      padding : '8px' ,
      cursor : 'pointer',
      ':hover' :{
        backgroundColor: 'lightgreen',
        color : 'black'
      }
    }; // instead of this now we are using styled-component package 
    //where we can use normal css rule;

      let person = null;
      // 4.note: for convert array javascript to a valid jsx use map() methode
       // 5.this is basically list of all person  
       // 8.we should assign a "key prop" which make a track of which element
       //is updated , and re-render only that element not the whole list again
       //key = { unique elment} in database we have primary key , here we are using 
       // index bcz for every element their is different key
       //but index is also part of list i list changes every element get new
       //index , so we have to assign id in state.
      if(this.state.showPerson){
        person = (
          <div>
            {this.state.person.map((person , index) => {
               return <Person 
               click={() => this.deletePersonHandler(index)}
               name ={person.name}
               age = {person.age}
               key = {person.id}
               changed={ (event) => this.nameChangedHandler(event , person.id)} />  
            })}
          {/* <Person 
           name = {this.state.person[0].name} 
           age={this.state.person[0].age} 
           click={this.switchNameHandler.bind(this , 'Rohit-Arya')}>
             my hobbies is playing cricket</Person>
         <Person 
           name = {this.state.person[1].name} 
           age={this.state.person[1].age}
           changed={this.nameChangedHandler} /> */}
        
          </div>
        );
         
        //  style.backgroundColor = 'red';
        //  style[':hover'] = {
        //   backgroundColor: 'blue',
        //   color : 'white'
        // } //13. we are going use this in styled component itself
      }
      // 10. this will just turn array of string into one string //as "red bold"
      //  let classes = ['red' , 'bold'].join(' '); 

      const classes =[];
      if(this.state.person.length <= 2){
        classes.push('red'); // classes = ['red']
      }

      if(this.state.person.length <= 1){
        classes.push('bold'); // classes = ['red' , 'bold']
      }
    //11.classes in an array now so we have to pass the string
    // so inside return use classes.join(' ') which will it one string
  return (
   
       <div className="App">
      <h1>HI , i am rohit app</h1>
      <p className={classes.join(' ')}>This is really working</p>
       <StyledButton 
      //  style={style}
      alt = {this.state.showPerson}
       onClick={this.toggleNameHandler}>
       Toggle Person
       </StyledButton>  
       {person}

    </div>
    
   
  );

  // return React.createElement('div' , {className: 'App'} , createElement('h1' , null , 'does this work?'));
}
}
 export default App;
// export default Radium(App); //higher order component
{/* <Person name="ROhit" age ="23"> my hobbies is playing cricket</Person>
      <Person name = "shine" age= "22"></Person> */}

      {/* donot use parenthethis at the end of switchNameHandler() like this , it immediate call the methode but we have give reference. */}
       
      {/* //this methode can be ineffcient use bind methode instead */}
      
     {/* //inside the curly braces bcz we have act as javascrit code
      //and also we cannot  use block statement like if else inside {} these curly braces so use tenary oprator
         */}

     //till now we are using static data but in realworld there in no static data
     //we have fetch data from server so we have learn no how to use dyanamic data



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
 




