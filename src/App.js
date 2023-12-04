import './App.css';
import  { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("")
  const handleChange = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    setTodoList([...todoList, newTask]);
  }

  const deleteTask = (taskName) =>{
    
    setTodoList(todoList.filter((task) => task !== taskName));
  }
  return (
    <div className='App'>
      <div className='addTask'>
        <input type="text" onChange={(handleChange)}></input>
        <button onClick={addTask}>Add</button>
      </div>
      <div className='lists'>
        {todoList.map((task) => {
          return (
            <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>

          ) 
          
          

        })}
      </div>
      </div>
  )
      
      /* {count}
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0);
      }}>Set To Zero</button> */}
   
  
  

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
