import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface stateInterface {
  isLoading: boolean;
  tempValues: string;
  result: string;
  history: string[];
  error: string | null;
}

const initialState: stateInterface = {
  isLoading: false,
  tempValues: "",
  result: "",
  history: [],
  error: "",
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    checkLoading: (state) => {
      state.isLoading = true;
    },
    addResult: (state, action) => {
      state.result = String(action.payload);
    },
    updateHistory: (state, action) => {
      state.history.push(action.payload);
    },
    clear: (state) => {
      state.history = [];
    },
  },
  selectors: {
    getResult: (state) => state.result,
    getIsLoading: (state) => state.isLoading,
    getHistory: (state) => state.history.reverse,
  },
});

export const { getResult, getHistory, getIsLoading } = resultSlice.selectors;
export const { checkLoading, clear, updateHistory, addResult } =
  resultSlice.actions;
export default resultSlice.reducer;
