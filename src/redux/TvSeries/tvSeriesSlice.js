import { createSlice , createAsycnTunk } from "@reduxjs/toolkit";

const fetchDetail = createAsycnTunk('series/Detail', async(id)=>{
    const response = await fetch( `https://api.tvmaze.com/search/shows?q=girls/${id}`);
    const detail = await response.json();
    const {series} = detail;
    return series;
})
const initialState[];
const tvSeriesSlice = createSlice({
    name:'series',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchDetail.fullfilled,(state,action)=>action.payload);
    }
})
 export default tvSeriesSlice.reducer;