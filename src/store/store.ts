import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/taskSlice";
import memberReducer from "./redux/memberSlice";
import authReducer from "./redux/authSlice";
import projectReducer from "./redux/projectSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        members: memberReducer,
        auth: authReducer,
        project: projectReducer
    }
})

export type StoreType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch