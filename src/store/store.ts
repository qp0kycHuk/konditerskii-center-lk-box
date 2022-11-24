import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setReducer from './reducers/SetSlice'

const rootReduser = combineReducers({
    setReducer
})


export function setupStore() {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']