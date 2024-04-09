import {configureStore} from '@reduxjs/toolkit'
import loginslice from './loginslice'

const store = configureStore({
    reducer:{
        userDetail:loginslice
    }
})

store.subscribe(()=>{
    let str = store.getState().userDetail.value
    console.log("from store", str)

    localStorage.setItem("LoginStatus",JSON.stringify(str))
    // let result = JSON.parse(localStorage.getItem('LoginStatus'))

})
export default store