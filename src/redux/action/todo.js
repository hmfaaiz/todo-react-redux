import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actionType"

export const addTodo = (data) => (
    {
        type: ADD_TODO,
        payload: data
    })

export const updateTodo = (data, id) => (
    {
        type: UPDATE_TODO,
        payload: { todo: data, todoId: id }
    })

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        payload: id
    })