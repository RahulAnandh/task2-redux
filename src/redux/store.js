import { configureStore } from '@reduxjs/toolkit'
import fleetReducer from './slices/fleet-slice';

const  store = configureStore(
  {
  reducer:{
            fleet:fleetReducer
  },
}
)
export default store