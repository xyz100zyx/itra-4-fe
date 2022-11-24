import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from "../../services/AuthService";
import {setUser} from "./usersSlice";

const initialState = {
    status: null,
    error: null,
}

export const login = createAsyncThunk(
    'auth/login',
    async function (data, {rejectWithValue, dispatch} ){
        try{
            const response = await AuthService.login(data.email, data.password);
            const user = await response.data;
            dispatch(setUser(user))
        }catch(err){
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async function(data, {rejectWithValue, dispatch}){
        try{
            const response = await AuthService.register(data.first_name, data.second_name, data.email, data.password);
            const user = await response.data;
            dispatch(setUser(user));
        }catch(err){
            return rejectWithValue(err.response.data.message)
        }
    }

)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'loading';
        },
        [login.fulfilled]: (state) => {
            state.status = 'loaded';
        },
        [login.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [register.pending]: (state) => {
            state.status = 'pending';
        },
        [register.fulfilled]: (state) => {
            state.status = 'loaded';
        },
        [register.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


export default authSlice.reducer;