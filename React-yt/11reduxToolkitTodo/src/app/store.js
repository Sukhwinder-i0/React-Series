import { configureStore } from '@reduxjs/toolkit'  // Store Created
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})