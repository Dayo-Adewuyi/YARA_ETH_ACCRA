import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { stat } from "fs";

export interface User {
  email: string;
  username: string;
  anonymous?: false;
  isVerified: false;
  usdbalance: number;
  btcbalance: number;
  ethbalance: number;
  maticbalance: number;
  version: number;
  createdAt: string;
  id: string;
}
type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      console.log(state.token, state.user);
      console.log(token, user)
      //localStorage.setItem("token", state.token);
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
