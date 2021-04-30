import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    value: 0,
    sidebarOpen: false,
    isMobile: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setSidebarOpen: (state) => {
      state.sidebarOpen = true
    },
    setSidebarClose: (state) => {
      state.sidebarOpen = false
    },
    setIsMobile: (state) => {
      state.isMobile = true
    },
    setIsNotMobile: (state) => {
      state.isMobile = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSidebarOpen, setSidebarClose, setIsMobile, setIsNotMobile } = appSlice.actions

export default appSlice.reducer