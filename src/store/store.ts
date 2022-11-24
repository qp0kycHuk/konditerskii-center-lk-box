import { configureStore, combineReducers } from "@reduxjs/toolkit";


const rootReduser = combineReducers({})


export function setupStore() {
    return configureStore({
        reducer: rootReduser
    })
}

