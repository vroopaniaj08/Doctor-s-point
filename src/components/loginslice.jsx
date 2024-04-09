import {createSlice} from '@reduxjs/toolkit'
function loginStatus(){
    let obj = {
        id:undefined,isL:false,name:undefined,userType:undefined,token:undefined
    }
    let result = localStorage.getItem('LoginStatus')
    if(result !== null){
        result = JSON.parse(result)
        console.log(result)
        obj = result
    }
    console.log(obj)
    return obj;
}
const slice = createSlice({
    name:"Doctor",
    initialState:{
        value:loginStatus()
    },
    reducers:{
        loginInfo:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { loginInfo } = slice.actions
export default slice.reducer