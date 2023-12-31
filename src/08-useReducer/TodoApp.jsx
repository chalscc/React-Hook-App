import React, { useEffect } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodos } from '../hooks'

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
     
  }, [todos])  
  

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
          <div className="col-7">

            <TodoList 
              todos={todos} 
              onDeleteTodo={ id => handleDeleteTodo(id)} 
              handleToggleTodo={handleToggleTodo}
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
