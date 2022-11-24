import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import UsersService from "../../services/UsersService";

const initialState = {
    user: {},
    users: [],
    status: null,
    error: null,
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(_, {rejectWithValue, dispatch}){
        try{
            const response = await UsersService.fetchUsers().then(data=>data);
            const users = await response.data;
            return users;
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

export const deleteUsers = createAsyncThunk(
    'users/deleteUsers',
    async function(data, {rejectWithValue, dispatch}){
        try{
            const response = await UsersService.deleteUsers(data.ids);
            const users = await response.data;
            return Object.values(users);
        }catch(err){
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const blockUsers = createAsyncThunk(
    'users/blockUsers',
    async function(data, {rejectWithValue, dispatch}){
        try{
            const response = await UsersService.blockUsers(data.ids);
            const users = await response.data;
            return Object.values(users);
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

export const unblockUsers = createAsyncThunk(
    'users/blockUsers',
    async function(data, {rejectWithValue, dispatch}){
        try{
            const response = await UsersService.unblockUsers(data.ids);
            const users = await response.data;
            return Object.values(users);
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('token', state.user.token);
        },
        setFetchedUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = Object.values(action.payload);
            state.status = 'loaded';
        },
        [fetchUsers.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        },
        [deleteUsers.pending]: (state) => {
            state.status = 'loading';
        },
        [deleteUsers.fulfilled] : (state, action) => {
            state.status = 'loaded';
            state.users = action.payload;
        },
        [deleteUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [blockUsers.pending]: (state) => {
            state.status = 'loading';
        },
        [blockUsers.fulfilled] : (state, action) => {
            state.status = 'loaded';
            state.users = action.payload;
        },
        [blockUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {setUser, setFetchedUsers} = usersSlice.actions;
export default usersSlice.reducer;