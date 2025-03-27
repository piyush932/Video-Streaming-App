import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isSidebarOpen:false,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen=!state.isSidebarOpen;
        },
        closeSidebar:(state)=>{
            state.isSidebarOpen = false;
        }
    }
})

export const {toggleSidebar,closeSidebar} = SidebarSlice.actions;
export default SidebarSlice.reducer;