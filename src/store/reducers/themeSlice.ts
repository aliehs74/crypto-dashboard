import { createAppSlice } from "../createAppSlice";
export interface themeSliceType {
  theme: string
}

const initialState: themeSliceType = {
  theme: 'light'
}

export const themeSlice = createAppSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const oldTheme = state.theme;
      state.theme = oldTheme === 'light' ? 'dark' : 'light';
    }
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;