import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "@/entities/todo/model";

export const mainStore = configureStore({
    reducer: todoReducer
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;