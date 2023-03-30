import React from 'react'
import Todo from './Todo'

export default function Skaiciuokle({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    }) 
  )
}
