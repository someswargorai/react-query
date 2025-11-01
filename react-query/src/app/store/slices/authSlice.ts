import {createSlice} from '@reduxjs/toolkit';

const initialState={
    auth:[{
        id:1,
        name:"someswar"
    }]
}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        storeAuth:(state,action)=>{
            state.auth=action.payload
        }
    }
})

export const {storeAuth}= authSlice.actions;
export default authSlice.reducer;
