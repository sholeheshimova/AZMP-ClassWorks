import {configureStore} from "@reduxjs/toolkit"

import counterReducer from "../features/counterSlice"
import todoReducer from "../features/todoslice"

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        todos: todoReducer,
    },
})