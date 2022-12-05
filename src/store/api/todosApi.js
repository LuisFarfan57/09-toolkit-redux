import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  // Nombre
  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),

  // Rutas extras que llamamos mediante los custom hooks
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`
    })
  })
})

// Crea automaticamente los custom hooks para los endpoints que creamos
export const { useGetTodosQuery, useGetTodoQuery } = todosApi
