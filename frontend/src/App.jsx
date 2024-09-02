 
// import { useState } from "react";
// import CreateTodo from "./components/CreateTodo"
// import Todos from "./components/Todos"

import { useState } from "react";
import { useEffect } from "react";
 

 //https://sum-server.100xdevs.com/todos
 
 

function App() {
  // const [todos,setTodos] = useState([]);
  // fetch("http://localhost:3000/todos").then(async (res)=>{
  //   const data = await res.json();
  //   setTodos(data.todos);
  // })
   

  // return (
  //   <div>
  //      <CreateTodo /> 
  //      <Todos  todos={todos}/>
  //   </div>
  // )

  //  const [todos,setTodos] = useState([]);
   


     return (
       <div>
          <Todoss id={3} />
       </div>
     )
}
function Todoss({id}){

  const [todos,setTodos] = useState([]);
  async function fetchTodos(){
    const res = await fetch("https://sum-server.100xdevs.com/todo/"+`?id=${id}`);
    const data = await res.json();
    console.log(data.todo)
    setTodos(data.todo);
  }
 
     
   

  return ( 
    <div>
      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
    </div>
  )
}
export default App
