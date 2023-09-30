
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userLogin } from '../../api/user'


export const signInAsync = createAsyncThunk(
  'auth/signIn',
  async (credentials) => {
    return await userLogin(credentials.email, credentials.password)
  }
);

const signInToken = localStorage.getItem('signInToken') || null

const initialState = {
  token: signInToken,
  isAuthenticated: signInToken !== null,
  rememberMe: true,
  pending: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe
    },
    setToken: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
      console.log(state.token)
    },
    signOut: (state, action) => {
      console.log('SIGN OUT')
      state.token = null
      state.isAuthenticated = false;
      if (localStorage.getItem('signInToken')){
          localStorage.removeItem('signInToken')
      }
      state.error = action.payload ? 'We are sorry, your session has expired.' : null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.pending = true
        state.error = null
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.pending = false
        state.token = action.payload
        state.isAuthenticated = true
        state.error = null
        if (state.rememberMe){
            localStorage.setItem('signInToken', state.token)
        }
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.pending = false
        state.error = action.error.message
      });
  },
});

export const { toggleRememberMe, setToken, signOut } = authSlice.actions

export default authSlice.reducer
