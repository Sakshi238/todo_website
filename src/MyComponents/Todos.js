import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div  className='container'>
       <h3 classname="text-centre">Todos List</h3>
       <TodoItem todo={props.todo[0]}/>

    
    </div>
  )
}
