import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
