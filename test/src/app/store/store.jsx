import {configureStore} from '@reduxjs/toolkit'
import sumSlice from '../../features/sumSlice/sumSlice'
export default configureStore({
    reducer:{
        sum:sumSlice,
    }
})