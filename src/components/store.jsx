import {configureStore} from '@reduxjs/toolkit'
import loginslice from './loginslice'

const store = configureStore({
    reducer:{
        Lslice:loginslice
    }
})

export default store