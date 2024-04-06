import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({
    name:"Doctor",
    initialState:{
        value:{id:undefined,isL:false,name:undefined,userType:undefined,token:undefined}
    },
    reducers:{
        loginInfo:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { loginInfo } = slice.actions
export default slice.reducer