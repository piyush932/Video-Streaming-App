import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from './Reducers/SidebarSlice'


const store = configureStore({
    reducer:{
        sidebar : SidebarSlice,
    }
})

export default store;