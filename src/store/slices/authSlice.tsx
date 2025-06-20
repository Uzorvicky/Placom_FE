// store/slices/authSlices.ts
import { User, AuthState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Helper function to get initial state
const getInitialState = (): AuthState => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;

    return {
      user: user,
      isAuthenticated: !!user,
      access_token: token,
    };
  }

  return {
    user: null,
    isAuthenticated: false,
    access_token: null,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = action.payload ? true : false;
      // Also update localStorage
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.access_token = action.payload;
      if (action.payload) {
        localStorage.setItem("authToken", action.payload);
      } else {
        localStorage.removeItem("authToken");
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.access_token = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, setAuthToken, logout } = authSlice.actions;
export default authSlice.reducer;
