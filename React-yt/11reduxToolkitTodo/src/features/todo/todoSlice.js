import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {     //{}, []
    todos: [{id: 1, text: "Hello World"}]           // this  object is state
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {                             // in context api we're writing on declarations only, here we write definitions also
        addTodo: (state, action) => {      // always state: present state and action:
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
       // updateTodo: () => {}
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer