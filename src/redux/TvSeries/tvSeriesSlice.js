import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchDetail = createAsyncThunk('series/Detail', async (id) => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=girls/${id}`);
  const detail = await response.json();
  const { series } = detail;
  return series;
});
const initialState = [];
const tvSeriesSlice = createSlice({
  name: 'series',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => action.payload);
  },
});

const { reducer } = tvSeriesSlice;
export { fetchDetail };
export default reducer;
