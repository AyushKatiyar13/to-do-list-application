import { useState } from "react";
import './CreateTodo.css';

const CreateTodo = () => {
    const [value1,setvalue1] = useState("");
    const [value2,setvalue2] = useState("");
  return (
    <div>
        <input type="text" placeholder="Enter a title" onChange={(e)=>{
            setvalue1(e.target.value);
        }}/> <br />
        <input type="text" placeholder="Enter a description" onChange={(e)=>{
            setvalue2(e.target.value);
        }} /> <br />
        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: value1,
                    description: value2
                })
            }).then(async (res)=>{
                const data = await res.json();
                alert("todo added");
            })
        
        }}>Create Todo</button>
    </div>
  )
}

export default CreateTodo