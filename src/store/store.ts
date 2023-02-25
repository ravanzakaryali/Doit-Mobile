import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/taskSlice";
import memberSlice from "./redux/memberSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        members: memberSlice
    }
})

export type StoreType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch