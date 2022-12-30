import { Photo } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type GoodsState = {
  data: Photo[];
  loading: boolean;
  error: boolean;
};

const initialState: GoodsState = {
  data: [],
  loading: false,
  error: false,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default photosSlice.reducer;
export const { actions } = photosSlice;

const fetchPhotos = async () => {
  const URL =
    "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
  const photosFrom = await axios.get(URL);
  return photosFrom.data;
};

export const init = createAsyncThunk("photos/fetch", () => fetchPhotos());
