import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stateType, title } from "./Types";

const initialState: stateType = {
  isLoading: false,
  data: null,
  error: null,
};

export const fetchData = createAsyncThunk(
  "Snapshot/fetchdata",
  async (title: title = "flower", { rejectWithValue }) => {
    const url: string = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a7010e99aa73e312b6111242b43af75&per_page=12&format=json&nojsoncallback=1&tags=${title}`;
    try {
      const res = await axios.get(url);
      if (res.data.code && res.data.code !== 200) {
        return rejectWithValue(res.data.message);
      }
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const snapshotSlice = createSlice({
  name: "Snapshot",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        (state.data = action.payload), (state.isLoading = false);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default snapshotSlice.reducer;
