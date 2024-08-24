import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery:fetchBaseQuery({baseUrl :"https://jsonplaceholder.typicode.com"}),
    endpoints:(builder)=>({
        getTodos:builder.query({
            query:()=>({
                url:"/todos",
                method:"GET"
            })
        }),
        addTodos:builder.mutation({
            query:()=>({
                url:"/posts",
                method:"POST"
            })
        })
    })
})

export const {useGetTodosQuery , useAddTodosMutation}=baseApi