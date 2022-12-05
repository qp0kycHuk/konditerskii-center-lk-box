import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setReducer from './reducers/Set/SetSlice'
import candyReduser from './reducers/Candy/CandySlice'
import componentReduser from './reducers/Component/ComponentSlice'

const rootReduser = combineReducers({
    set: setReducer,
    candy: candyReduser,
    component: componentReduser,
})


export function setupStore() {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']