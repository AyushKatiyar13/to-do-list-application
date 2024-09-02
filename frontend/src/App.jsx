import './App.css';
import { useState } from "react";
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { useEffect } from "react";
 
function App() {
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }

    fetchTodos();
  }, []); 

  return (
    <div className="container">
       <CreateTodo /> 
       <Todos  todos={todos}/>
    </div>
  )
}

export default App
