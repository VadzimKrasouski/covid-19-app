import { createAsyncThunk } from '@reduxjs/toolkit';
import { covidAPI } from '../../API/covidAPI';

export const fetchSummaryData = createAsyncThunk(
    'summaryData',
    async (_, thunkAPI) => {
        try {
            const response = await covidAPI.getSummaryData()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)
export const fetchCountryDetailedData = createAsyncThunk(
    'country/detailedData',
    async (country: string, thunkAPI) => {
        try {
            const response = await covidAPI.getCountryData(country)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)
export const fetchCountries = createAsyncThunk(
    'country/detailedData',
    async (_, thunkAPI) => {
        try {
            const response = await covidAPI.getCountries()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)
 