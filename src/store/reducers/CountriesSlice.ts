import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry } from '../../models/ICovidData';
import { fetchSummaryData } from './ActionCreators';

interface ICountryState {
    countries: ICountry[]
    isLoading: boolean
    error: string
}

const initialState: ICountryState = {
    countries: [],
    isLoading: true,
    error: ''
}

export const countriesSlice = createSlice({
    name: 'countryData',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSummaryData.fulfilled.type]: (state, action: PayloadAction<ICountry[]>) => {
            state.isLoading = false
            state.error = ''
            state.countries = action.payload
        },
        [fetchSummaryData.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchSummaryData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default countriesSlice.reducer