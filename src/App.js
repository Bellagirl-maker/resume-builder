import './App.css';
import  { useState } from "react";

function App() {

  const [inputvalue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div className='App'>
      {inputvalue}
      <input type='text' onChange={handleInputChange}></input> 
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
