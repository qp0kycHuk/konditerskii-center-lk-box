import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setReducer from './reducers/Set/SetSlice'
import CandySlice from './reducers/Candy/CandySlice'

const rootReduser = combineReducers({
    set: setReducer,
    candy: CandySlice,
})


export function setupStore() {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']