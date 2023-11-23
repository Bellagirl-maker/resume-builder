import './App.css';

function App() {
  
  return (
    <div>
    <User name="Isabella" age={21} email="isabella@bella.com" />
    <User name="Freda" age={34} email="freda@bella.com" />
    <User name="Neeta" age={18} email="Neeta@bella.com" />
    <Job salary="9000" position="SeniorSDE" company="Amazon" />
    </div>
  );
}

const User = (props) =>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h1>{props.email}</h1>
    </div>
  );
    
}

const Job = (props) =>{
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
