import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../feat/todos/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer.reducer,
    },
})