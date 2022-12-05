import { createAsyncThunk } from "@reduxjs/toolkit"
import { SERVER_ERROR_MESSAGE } from "@src/const/Messages"
import { ISetComponent } from "@src/models/ISetComponent";
import { ComponentApi } from "./ComponentApi"

export const fetchComponents = createAsyncThunk(
    'component/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await ComponentApi.get()

            if (response.ok) {
                return (await response.json()) as ISetComponent
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)

export const updateComponent = createAsyncThunk(
    'component/update',
    async (component: ISetComponent, thunkAPI) => {
        try {
            const response = await ComponentApi.update(component.id, component)

            if (response.ok) {
                return (await response.json()) as ISetComponent
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)
