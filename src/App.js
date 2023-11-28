import './App.css';
import  { useState } from "react";

function App() {

  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  }
  return (
    <div className='App'>
      {age}
      <button onClick={increaseAge}>Increase Age</button> 
    </div>
  );
  
  
}

// const Users = (props) => {
//   return <h1>{props.name} {props.age}</h1>
// }

// const User = (props) =>{
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h1>{props.email}</h1>
//     </div>
//   );
    
// }

// const Job = (props) =>{
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   )
// }

export default App;
