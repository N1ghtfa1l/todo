'use client'
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import { RootState } from '@/app/store/mainStore';
import { AddTodoForm } from '@/features/todoForm';
import { TodoItem } from '@/entities/todo/ui/todoItem';

export const TodoList = () => {
    const todos = useSelector((state: RootState) => state.items);

    return (
        <Stack spacing={2}>
            <AddTodoForm />
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </Stack>
    );
};