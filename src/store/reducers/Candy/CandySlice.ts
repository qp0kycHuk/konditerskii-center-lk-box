import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICandy } from "@src/models/ICandy";
import { updateCandy, fetchCandies } from "./CandyActions";


interface ICandyState {
    candyList: ICandy[]
    fetchLoading?: boolean
    fetchError?: string
    getLoading?: boolean
    getError?: string
    updateLoading?: boolean
    updateError?: string

}

const initialState: ICandyState = {
    candyList: []
}


export const candySlice = createSlice({
    name: 'candy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch candy 
        builder.addCase(fetchCandies.pending.type, (state, action) => {
            state.fetchLoading = true
        })

        builder.addCase(fetchCandies.fulfilled.type, (state, action: PayloadAction<ICandy[]>) => {
            state.fetchLoading = false
            state.candyList = action.payload
        })

        builder.addCase(fetchCandies.rejected.type, (state, action: PayloadAction<string>) => {
            state.fetchLoading = false
            state.fetchError = action.payload
        })

        // Update candy by Id
        builder.addCase(updateCandy.pending.type, (state, action) => {
            state.updateLoading = true
        })

        builder.addCase(updateCandy.fulfilled.type, (state, action: PayloadAction<ICandy>) => {
            state.updateLoading = false

            const candyInListIndex = state.candyList.findIndex((s) => s.id == action.payload.id)

            if (candyInListIndex !== -1) {
                state.candyList[candyInListIndex] = action.payload
            }
        })

        builder.addCase(updateCandy.rejected.type, (state, action: PayloadAction<string>) => {
            state.updateLoading = false
            state.updateError = action.payload
        })

    }
})

export default candySlice.reducer