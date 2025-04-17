import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const intialState = {
    todos: [{
        id: 1,
        text: "Learn React",
        completed: false,
    }]
}

export const todoSlice = createSlice({
    name:  "todos",
    initialState: intialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo:(state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;