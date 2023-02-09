import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchSeries = createAsyncThunk('list/FetchAll', async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const assets = await response.json();
  const { list } = assets;
  console.log(list);
  return list;
});
const initialState = [];
const tvSeriesListSlice = createSlice({
  name: 'list',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.fulfilled, (state, action) => action.payload);
  },

});
const { reducer } = tvSeriesListSlice;
export { fetchSeries };
export default reducer;
