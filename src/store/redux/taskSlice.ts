import BaseNetwork from '../../network/BaseNetwork';
import { Tasks, Paginate, TaskCreate } from './../../utilities/types';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const taskNetwork = new BaseNetwork<Tasks>('/tasks');

export const taskGetAll = createAsyncThunk(
    'tasks/getall',
    async (paginate: Paginate) => {
        return await taskNetwork.getAll(paginate);
    }
)
export const taskGet = createAsyncThunk(
    'tasks/getById',
    async (id: string) => {
        return await taskNetwork.getById(id);
    }
)
export const taskDelete = createAsyncThunk(
    'tasks/delete',
    async (id: string) => {
        return await taskNetwork.delete(id);
    }
)

export const taskCreate = createAsyncThunk(
    'tasks/create',
    async (task: TaskCreate) => {
        return await taskNetwork.create(task);
    }
)

interface InitialStateType {
    tasks: Tasks[],
    // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: InitialStateType = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(taskGetAll.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
        builder.addCase(taskGet.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
        });
        builder.addCase(taskCreate.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
        });
        builder.addCase(taskDelete.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload);
        });
    }
})


export default taskSlice.reducer;