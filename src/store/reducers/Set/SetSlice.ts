import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICandy } from "@src/models/ICandy";
import { ISet } from "@src/models/ISet";
import { ISetItem } from "@src/models/ISetItem";
import { fetchSetById, fetchSets, updateSet } from "./SetActions";


interface ISetState {
    currentSet?: ISet
    setList: ISet[]
    fetchLoading?: boolean
    fetchError?: string
    getLoading?: boolean
    getError?: string
    updateLoading?: boolean
    updateError?: string

}

const initialState: ISetState = {
    setList: []
}


export const setSlice = createSlice({
    name: 'set',
    initialState,
    reducers: {
        setCurrentSet(state, action: PayloadAction<ISet>) {
            state.currentSet = action.payload
        },
        
        addCandy(state, action: PayloadAction<ISetItem>) {
            if (!state.currentSet) return

            if (state.currentSet && !state.currentSet.items) {
                state.currentSet.items = []
            }

            state.currentSet.items.push(action.payload)
        },
        
        removeCandy(state, action: PayloadAction<ICandy>) {
            if (!state.currentSet) return

            state.currentSet.items = state.currentSet.items?.filter((c: ICandy) => c.id !== action.payload.id)
        }

    },
    extraReducers: (builder) => {
        // Fetch set by Id
        builder.addCase(fetchSets.pending.type, (state, action) => {
            state.fetchLoading = true
        })

        builder.addCase(fetchSets.fulfilled.type, (state, action: PayloadAction<ISet[]>) => {
            state.fetchLoading = false
            state.setList = action.payload
        })

        builder.addCase(fetchSets.rejected.type, (state, action: PayloadAction<string>) => {
            state.fetchLoading = false
            state.fetchError = action.payload
        })

        // Fetch set by Id
        builder.addCase(fetchSetById.pending.type, (state, action) => {
            state.getLoading = true
        })

        builder.addCase(fetchSetById.fulfilled.type, (state, action: PayloadAction<ISet>) => {
            state.getLoading = false
            state.currentSet = action.payload
        })

        builder.addCase(fetchSetById.rejected.type, (state, action: PayloadAction<string>) => {
            state.getLoading = false
            state.getError = action.payload
        })

        // Update set
        builder.addCase(updateSet.pending.type, (state, action) => {
            state.updateLoading = true
        })

        builder.addCase(updateSet.fulfilled.type, (state, action: PayloadAction<ISet>) => {
            state.updateLoading = false

            if (state.currentSet?.id == action.payload.id) {
                state.currentSet = action.payload
            }

            const setInListIndex = state.setList.findIndex((s) => s.id == action.payload.id)

            if (setInListIndex !== -1) {
                state.setList[setInListIndex] = action.payload
            }
        })

        builder.addCase(updateSet.rejected.type, (state, action: PayloadAction<string>) => {
            state.updateLoading = false
            state.updateError = action.payload
        })

    }
})

export default setSlice.reducer