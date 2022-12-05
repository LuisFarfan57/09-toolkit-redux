import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/api/todosApi'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <strong>{completed ? 'Done' : 'Pending'} </strong>
            {title}
          </li>
        ))}
      </ul> */}

      <button onClick={() => setTodoId(todoId + 1)}>
        Next todo
      </button>
      <button onClick={() => setTodoId(todoId - 1)}>
        Previous todo
      </button>
    </>
  )
}
