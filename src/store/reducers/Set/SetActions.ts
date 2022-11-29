import { createAsyncThunk } from "@reduxjs/toolkit"
import { SERVER_ERROR_MESSAGE } from "@src/const/Errors"
import { ISet } from "@src/models/ISet";
import { SetApi } from "./SetApi"

export const fetchSetById = createAsyncThunk(
    'set/get',
    async (setId: string, thunkAPI) => {
        try {
            const response = await SetApi.get(setId)

            if (response.ok) {
                return (await response.json()) as ISet
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)

export const updateSet = createAsyncThunk(
    'set/update',
    async (set: ISet, thunkAPI) => {
        try {
            const response = await SetApi.update(set.id, set)

            if (response.ok) {
                return (await response.json()) as ISet
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)

export const fetchSets = createAsyncThunk(
    'set/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await SetApi.get()

            if (response.ok) {
                return (await response.json()) as ISet
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)