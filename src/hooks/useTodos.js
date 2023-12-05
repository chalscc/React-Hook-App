import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

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

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)


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
    
      const handleToggleTodo = (id) => {
          
          dispatch({
            type: 'toggleTodo',
            payload: id
          })
      }

      const todosCount = todos.length;

      const pendingTodosCount = todos.filter( todo => !todo.done ).length;


    return {
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo, 
        todos, 
        todosCount, 
        pendingTodosCount
    }
}
