import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISetComponent } from "@src/models/ISetComponent";
import { updateComponent, fetchComponents } from "./ComponentActions";


interface IComponentState {
    componentsList: ISetComponent[]
    fetchLoading?: boolean
    fetchError?: string
    getLoading?: boolean
    getError?: string
    updateLoading?: boolean
    updateError?: string

}

const initialState: IComponentState = {
    componentsList: []
}


export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch component 
        builder.addCase(fetchComponents.pending.type, (state, action) => {
            state.fetchLoading = true
        })

        builder.addCase(fetchComponents.fulfilled.type, (state, action: PayloadAction<ISetComponent[]>) => {
            state.fetchLoading = false
            state.componentsList = action.payload
        })

        builder.addCase(fetchComponents.rejected.type, (state, action: PayloadAction<string>) => {
            state.fetchLoading = false
            state.fetchError = action.payload
        })

        // Update component by Id
        builder.addCase(updateComponent.pending.type, (state, action) => {
            state.updateLoading = true
        })

        builder.addCase(updateComponent.fulfilled.type, (state, action: PayloadAction<ISetComponent>) => {
            state.updateLoading = false

            const componentInListIndex = state.componentsList.findIndex((s) => s.id == action.payload.id)

            if (componentInListIndex !== -1) {
                state.componentsList[componentInListIndex] = action.payload
            }
        })

        builder.addCase(updateComponent.rejected.type, (state, action: PayloadAction<string>) => {
            state.updateLoading = false
            state.updateError = action.payload
        })

    }
})

export default componentSlice.reducer