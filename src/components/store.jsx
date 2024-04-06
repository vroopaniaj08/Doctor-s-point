import {configureStore} from '@reduxjs/toolkit'
import loginslice from './loginslice'

const store = configureStore({
    reducer:{
        userDetail:loginslice
    }
})

export default store