import axios from "axios"
import React, { useState } from "react"
import {useEffect} from "react"


function Todo() {
    const [page,setPage] = useState(1)
    const [maxCount,setMaxCount] = useState(0)
    const [todo,setTodo] = useState([])
  
    useEffect(()=>{
      const todos = async()=>{
        let res = await axios.get(`http://localhost:8080/title?_page=${page}&_limit=3`)
        console.log(res)
        setTodo(res.data);
        setMaxCount(Number(res.headers["x-total-count"])) 
      }
      todos()
    },[page])
    return (
      <div className="App">
  
        {todo.map((element)=>(
          <div key ={element.id}>{element.todo}</div>
        ))}
  
        <button disabled = {page<=1} onClick={()=>{setPage(page-1)}}> {"<"} </button>
        <button disabled = {page*3>=maxCount} onClick={()=>setPage(page+1)}> {">"} </button>
      </div>
    );
  }

export default Todo