import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fleetKey: "",
}

export const fleetSlice = createSlice({
  name: 'fleet',
  initialState,
  reducers: {
    saveFleetKey: (state,action) => {
      state.fleetKey = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveFleetKey} = fleetSlice.actions

export default fleetSlice.reducer