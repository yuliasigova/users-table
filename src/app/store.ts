import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from "./api/usersApi";
import userReduser from "./api/userSlice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        users: userReduser,
    
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(usersApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
