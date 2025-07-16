'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/entities/todo/model/slice';
import { TextField, Button, Stack } from '@mui/material';

export const AddTodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!title.trim()) {
            setError('Поле не должно быть пустым');
            console.error('Поле не должно быть пустым');
            return;
        }
        dispatch(addTodo({ id: String(Date.now()), title: title.trim(), completed: false }));
        setTitle('');
        setError('');
    };

    return (
        <Stack direction="row" spacing={1}>
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Новая задача"
                error={!!error}
                helperText={error}
                fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>
                Добавить
            </Button>
        </Stack>
    );
};