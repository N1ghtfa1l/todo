'use client'
import { useDispatch } from "react-redux";
import { removeTodo, Todo, toggleTodo, updateTodo } from "../../model/slice";
import { FC, useState } from "react";
import { Checkbox, IconButton, Stack, TextField, Typography } from "@mui/material";


interface IProps {
    todo: Todo
}

export const TodoItem: FC<IProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(todo.title);
    const [error, setError] = useState<string>('');

    const handleSave = () => {
        if (!title.trim()) {
            console.error('Поле не должно быть пустым');
            setError('Поле не должно быть пустым')
            return;
        }
        dispatch(updateTodo({ id: todo.id, title: title.trim() }));
        setIsEditing(false);
        setError('')
    };

    return (
        <Stack direction="row" alignItems="center" spacing={1} >
            <Checkbox checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
            {
                isEditing ? (
                    <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        size="medium"
                        error={!!error}
                        helperText={error}
                    />
                ) : (
                    <Typography sx={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
                        {todo.title}
                    </Typography>
                )
            }
            {
                isEditing ? (
                    <IconButton size="small" onClick={handleSave}>Сохранить</IconButton>
                ) : (
                    <IconButton size="small" onClick={() => setIsEditing(true)}>Изменить</IconButton>
                )
            }
            <IconButton size="small" onClick={() => dispatch(removeTodo(todo.id))}>Удалить</IconButton>
        </Stack >
    );
};