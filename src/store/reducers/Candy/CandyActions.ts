import { createAsyncThunk } from "@reduxjs/toolkit"
import { SERVER_ERROR_MESSAGE } from "@src/const/Errors"
import { ICandy } from "@src/models/ICandy";
import { CandyApi } from "./CandyApi"

export const fetchCandies = createAsyncThunk(
    'candy/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await CandyApi.get()

            if (response.ok) {
                return (await response.json()) as ICandy
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)

export const updateCandy = createAsyncThunk(
    'candy/update',
    async (candy: ICandy, thunkAPI) => {
        try {
            const response = await CandyApi.update(candy.id, candy)

            if (response.ok) {
                return (await response.json()) as ICandy
            }

            throw new Error(response.statusText);

        } catch (e) {
            return thunkAPI.rejectWithValue(SERVER_ERROR_MESSAGE)
        }
    }
)
