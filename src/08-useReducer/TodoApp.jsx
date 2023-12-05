import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
     
  }, [todos])  

  const handleNewTodo = (todo) => {

    dispatch({
      type: 'addTodo',
      payload: todo
    })

  }

  const handleDeleteTodo = (id) => {

    dispatch({
      type: 'removeTodo',
      payload: id
    })
  
  }

  const onToggleTodo = (id) => {
      
      dispatch({
        type: 'toggleTodo',
        payload: id
      })
  }

  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
          <div className="col-7">

            <TodoList 
              todos={todos} 
              onDeleteTodo={ id => handleDeleteTodo(id)} 
              onToggleTodo={onToggleTodo}
            />

          </div>

          <div className='col-5'>
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={ handleNewTodo }/>            
          </div>

        </div>

    </>
  )
}
