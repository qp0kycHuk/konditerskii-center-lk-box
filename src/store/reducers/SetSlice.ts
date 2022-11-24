import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISet } from "@src/models/ISet";


interface ISetState {
    currentSet?: ISet
    loading: boolean
    error?: string
}

const initialState: ISetState = {
    loading: false
}

const fetchSet = createAsyncThunk(
    'set/get',
    async () => {
        const response = await fetch('http://localhost:3000/set/1')
        return await response.json()
    }
)


export const setSlice = createSlice({
    name: 'set',
    initialState,
    reducers: {
        initCurrentSet(state, action: PayloadAction<ISet>) {
            state.currentSet = action.payload
        }
    },
    extraReducers: {
        [fetchSet.fulfilled.type]: (state, action: PayloadAction<ISet>) => {

        }
    }
})

export default setSlice.reducer