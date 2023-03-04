import { ConfirmResponse } from './../../utilities/model';
import { UserType } from './../../utilities/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import BaseNetwork from '../../network/BaseNetwork';
import axiosInstance from '../../network/axiosInstance';

interface InitialStateAuthType {
    user: any,
    token: string
    isLogin: boolean,
    loading: boolean
    response: {
        statusCode: number,
        email: string
        error: string | undefined
    },
}

const initialStateAuth: InitialStateAuthType = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    response: {
        statusCode: 400,
        email: "",
        error: undefined
    },
}
interface ConfirmEmail {
    confirmCode: number,
    email: string
}
interface Register {
    email: string,
    fullName: string
}

export const confirmEmail = createAsyncThunk(
    '/auth/confirm',
    async (data: ConfirmEmail) => {
        const res = await axiosInstance.post('auth/confirmCode', {
            email: data.email,
            confirmCode: data.confirmCode
        });
        return res.data;
    })

export const register = createAsyncThunk(
    '/users/register',
    async (data: Register) => {
        const res = await axiosInstance.post('users/register', data);
        return res.data;
    })

export const login = createAsyncThunk(
    '/auth/login',
    async (email: string) => {
        const res = await axiosInstance.post('auth/login', {
            email: email
        });
        return res.data;
    })

const authSlice = createSlice({
    initialState: initialStateAuth,
    name: 'auth',
    reducers: {},
    extraReducers: (builder) => {
        //#region Confirm thunk
        builder.addCase(confirmEmail.fulfilled, (state, action: PayloadAction<ConfirmResponse>) => {
            console.log("Confirm email fulfilled");
            state.loading = false;
            state.response.statusCode = 200;
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(confirmEmail.pending, (state, action) => {
            console.log("confim email pending");
            state.loading = true;

        });
        builder.addCase(confirmEmail.rejected, (state, action) => {
            console.log("confim email rejected");
            state.loading = false;
            state.response.statusCode = 404;
            state.response.error = action.error.message;
        });
        //#endregion

        //#region Register thunk
        builder.addCase(register.fulfilled, (state, action) => {
            console.log("Register fulfilled")
            state.response.email = action.payload.email
            state.response.statusCode = 200;
            state.loading = false;
        });
        builder.addCase(register.pending, (state, action) => {
            console.log("Register pending")
            state.loading = true;
        })
        builder.addCase(register.rejected, (state, action) => {
            console.log("Register rejected")
            state.response.statusCode = 400;
            state.loading = false;
            state.response.error = action.error.message;
        });
        //#endregion

        //#region Login thunk
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("Login fulfilled");
            state.response.email = action.payload.email
            state.response.statusCode = 200;
            state.loading = false;
        });
        builder.addCase(login.pending, (state, action) => {
            console.log("Login pending");
            state.loading = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.response.statusCode = 400;
            state.loading = false;
            state.response.error = action.error.message;
        })
        //#endregion
    }

})

export default authSlice.reducer;