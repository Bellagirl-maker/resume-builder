import './App.css';
import  { useState } from "react";

function App() {

  const [textColor, setTextColor] = useState("black");
  return (
    <div className='App'>
      <button onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}>Change Color</button>
      <h1 style={{ color:textColor }}>THIS IS MY TEXT</h1>
      {/* {count}
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0);
      }}>Set To Zero</button> */}
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
