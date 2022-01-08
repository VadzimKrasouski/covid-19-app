import { createAsyncThunk } from '@reduxjs/toolkit';
import { covidAPI } from '../../API/covidAPI';

/*export const  fetchSummaryData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(summarySlice.actions.dataFetching())
        const response = await covidAPI.getSummaryData()
        dispatch(summarySlice.actions.dataFetchingSccess(response.data))
    } catch (e) {
        let message = 'Unknown Error'
        if (e instanceof Error) message = e.message
        dispatch(summarySlice.actions.dataFetchingError(message))
    }
}*/

export const  fetchSummaryData = createAsyncThunk(
    'fetchSummary',
    async(_, thunkAPI) => {
        try {
            const response = await covidAPI.getSummaryData()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)