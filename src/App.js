import './App.css';
import  { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predictName, setPredictName] = useState(null)
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictName(res.data)

    });

  }

  return (
    <div className='App'>
      <input placeholder='Ex. Isabella ...' onChange={(event) => {
        setName(event.target.value)
      }}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {predictName?.name} </h1>
      <h1>Predicted Age: {predictName?.age} </h1>
      <h1>Count: {predictName?.count} </h1>
    </div>
  );
}

// function App() {
//   const[catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact)
//     });

//   }
//   useEffect(() => {
//     fetchCatFact();
//   }, []);
 
//   return (
//     <div className='App'>
//       <button onClick={fetchCatFact}>Get Cat Fact</button>
//       <p>{catFact}</p>
      
//     </div>
//   )
      
      /* {count}
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0);
      }}>Set To Zero</button> */
   
  
  

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
