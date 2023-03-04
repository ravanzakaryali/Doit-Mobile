import { AxiosResponse } from 'axios';
import axiosInstance from '../../network/axiosInstance';
import { ProjectModel } from './../../utilities/model';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface ProjectInitialState {
    lastProject: ProjectModel | null,
    projects: ProjectModel[] | null,
    sort: string,
    loading: boolean
}

const initialState: ProjectInitialState = {
    lastProject: null,
    projects: null,
    sort: 'updatedDate',
    loading: true
}

export const lastProjectAction = createAsyncThunk(
    '/projects/last',
    async () => {
        const res = await axiosInstance.get<any, AxiosResponse<ProjectModel>>('/projects/last');
        return res.data;
    })

export const projectGetAllAction = createAsyncThunk(
    '/projects/getAll',
    async (queryString: any) => {
        const res = await axiosInstance.get<any, AxiosResponse<ProjectModel[]>>(`/projects?page=${queryString.page}&limit=${queryString.limit}&sort=${queryString.sort}`);
        return res.data;
    })

const projectSlice = createSlice({
    initialState: initialState,
    name: 'ProjectSlice',
    reducers: {
        addSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
            state.projects = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(lastProjectAction.fulfilled, (state, action: PayloadAction<ProjectModel>) => {
            state.lastProject = action.payload;
        });
        builder.addCase(projectGetAllAction.fulfilled, (state, action: PayloadAction<ProjectModel[]>) => {
            state.loading = false;
            state.projects = [...state.projects || [], ...action.payload];
        });
        builder.addCase(projectGetAllAction.pending, (state) => {
            state.loading = true;
        });
    }
})

export const { addSort } = projectSlice.actions;
export default projectSlice.reducer;