import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchAssets = createAsyncThunk('list/FetchAll', async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const assets = await response.json();
  const { list } = assets;
  return list;
});
const initialState = [];
const tvSeriesListSlice = createSlice({
  name: 'list',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.fulfilled, (state, action) => action.payload);
  },

});
export default tvSeriesListSlice.reducer;