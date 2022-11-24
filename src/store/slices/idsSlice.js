import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedIds: []
};

const idsSlice = createSlice({
    name: 'ids',
    initialState,
    reducers: {
        setIds: (state, action) => {
            if(state.selectedIds.includes(action.payload)){
                state.selectedIds = state.selectedIds.filter(id => id !==action.payload)
            }else{
                state.selectedIds = [...state.selectedIds, action.payload];
            }
        }
    }
})

export const {setIds} = idsSlice.actions;
export default idsSlice.reducer;