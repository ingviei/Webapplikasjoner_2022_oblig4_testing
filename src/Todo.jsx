import { useState } from "react"

export const Todo = () => {

const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState("Item1")

const changeHandler = (e) => {
  setTodo(e.target.value);
};

const clickHandler = () => {
   setTodoList((prev) => [...prev, todo]);
};


    return (
    <>  
      <button onClick={clickHandler}>Legg til et gjøremål</button>
      <input type="text" onChange={changeHandler}/>
       <h1>{todo}</h1>
       <div>{JSON.stringify(todoList)}</div>
        <p>{todoList}</p>
    </>
      
    )
}