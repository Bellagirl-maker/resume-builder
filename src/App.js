import './App.css';

function App() {
  
  const users = [
    { name: "Isabella", age:21 },
    { name: "Freda", age:22 },
    { name: "Nathan", age:23 },
    ];
return (
    <div className='App'>
      {users.map((user, key) =>{
       return(
        <Users name={user.name} age={user.age} />
       )

      })}

      {/* {age >= 18 ? <h1>OVERAGE</h1>:<h1>UNDERAGE</h1>}
      <h1 style={{color: isRed ? "red" : "green"}}> THIS IS COLOR</h1>
      {isRed && <button>THIS IS A BUTTON</button>} */}
     </div>
    // <div>
    // <User name="Isabella" age={21} email="isabella@bella.com" />
    // <User name="Freda" age={34} email="freda@bella.com" />
    // <User name="Neeta" age={18} email="Neeta@bella.com" />
    // <Job salary="9000" position="SeniorSDE" company="Amazon" />
    // </div>
  );
}

const Users = (props) => {
  return <h1>{props.name} {props.age}</h1>
}

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