import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/services/axiosInstance';
import { createAppSlice } from '../createAppSlice';
import { getKlinesParamsType, KlinesStateType } from '../../utils/Types/allTypes';

const initialState: KlinesStateType = {
  klinesData: [],
  klinesStatus: 'idle',
  klinesError: null,
}

export const GetKlines = createAsyncThunk('GetKlines', async (params: getKlinesParamsType, thunkAPI) => {
  try {
    const response = await api.get('klines', { params });
    return response.data;

  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: 'خطایی رخ داده است' });
  }
})

export const klinesSlice = createAppSlice({
  name: 'klines',
  initialState,
  reducers: {
    clearState: state => state = initialState
  },

  extraReducers(builder) {
    builder
      .addCase(GetKlines.pending, (state) => {
        state.klinesStatus = 'pending'
      })
      .addCase(GetKlines.fulfilled, (state, action) => {

        state.klinesData = action.payload;
        state.klinesStatus = 'fulfilled'
      })
      .addCase(GetKlines.rejected, (state, action) => {
        state.klinesError = action.payload
        state.klinesStatus = 'failed'
      })

  },
})
export default klinesSlice.reducer
export const { clearState } = klinesSlice.actions;


