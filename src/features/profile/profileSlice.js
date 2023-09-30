
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userProfile, changeUserName } from '../../api/user'

import { signOut } from '../auth/authSlice'

export const userProfileAsync = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { getState, dispatch}) => {
    const token = getState().auth.token
    try {
      return await userProfile(token)
    }
    catch (error){
      if (error.type === 'tokenExpired'){
        dispatch(signOut(true))
        throw new Error()
      }
      throw error
    }
  },{
    condition: (_, { getState }) => {
      const { pending, data } = getState().profile
      return !pending && !data
    }
  }
)

export const changeUserNameAsync = createAsyncThunk(
  'profile/putUserName',
  async (name, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
    try {
      return await changeUserName(token, name)
    }
    catch (error){
      if (error.type === 'tokenExpired'){
        thunkAPI.dispatch(signOut(true))
        throw new Error()
      }
      throw error
    }
  }
)

const initialState = {
  data: null,
  pending: false,
  error: null,
  changeUserNamePending: false,
  changeUserNameError: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.data = null
      console.log('clear profile')
    },
    clearChangeUserNameError: (state) => {
      state.changeUserNameError = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfileAsync.pending, (state) => {
          state.pending = true
          state.error = null
      })
      .addCase(userProfileAsync.fulfilled, (state, action) => {
          state.pending = false
          state.data = action.payload
      })
      .addCase(userProfileAsync.rejected, (state, action) => {
          state.pending = false
          state.error = action.error.message || null
      })

      .addCase(changeUserNameAsync.pending, (state) => {
          state.changeUserNamePending = true
          state.changeUserNameError = null
      })
      .addCase(changeUserNameAsync.fulfilled, (state, action) => {
          state.changeUserNamePending = false
          state.data = action.payload
      })
      .addCase(changeUserNameAsync.rejected, (state, action) => {
          state.changeUserNamePending = false
          state.changeUserNameError = action.error.message || null
      });
  },
})

export const { clearProfile, clearChangeUserNameError } = profileSlice.actions

export default profileSlice.reducer
