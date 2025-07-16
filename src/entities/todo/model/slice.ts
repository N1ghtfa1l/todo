import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodosState {
    items: Todo[];
}

const initialState: TodosState = {
    items: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        updateTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
            const todo = state.items.find(todo => todo.id === action.payload.id);
            if (todo) todo.title = action.payload.title;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer