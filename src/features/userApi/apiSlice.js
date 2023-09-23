import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk(
  "api/fetchProductData",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default apiSlice.reducer;
