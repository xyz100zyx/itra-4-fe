import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/usersSlice";
import idsSlice from "./slices/idsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        users: userSlice,
        ids: idsSlice,
    }
})

export default store;