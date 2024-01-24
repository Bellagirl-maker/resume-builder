import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import  { useState } from "react";
// import Axios from "axios";

function App() {
  const [user, setUser] = useState("PedroTech");
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element ={<Home username={user} />} />
          <Route path='/profile' element ={<Profile username={user} setUser={setUser} />} />
          <Route path='/contact' element ={<Contact />} />
        </Routes>
      </Router>
    </div>
  )

  // const [name, setName] = useState("");
  // const [predictName, setPredictName] = useState(null)
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictName(res.data)

  //   });

  // }

  // return (
  //   <div className='App'>
  //     <input placeholder='Ex. Isabella ...' onChange={(event) => {
  //       setName(event.target.value)
  //     }}/>
  //     <button onClick={fetchData}>Predict Age</button>
  //     <h1>Name: {predictName?.name} </h1>
  //     <h1>Predicted Age: {predictName?.age} </h1>
  //     <h1>Count: {predictName?.count} </h1>
  //   </div>
  // );
}
export default App;

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


