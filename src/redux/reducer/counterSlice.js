import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAmount } from "../Api/counterApi";

const initialState = {
  value: 0,
};

export const AddAsyncAmount = createAsyncThunk(
  "counterSlice/asyncAdd",
  async (amount) => {
    const response = await fetchAmount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setIncrementAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddAsyncAmount.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const { increment, decrement, setIncrementAmount } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
