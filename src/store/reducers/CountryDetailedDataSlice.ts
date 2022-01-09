import { fetchCountryDetailedData } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountryDetailedData } from '../../models/ICovidData';

interface ICountryDetailedDataState {
    countries: ICountryDetailedData[]
    isLoading: boolean
    error: string
}

const initialState: ICountryDetailedDataState = {
    countries: [],
    isLoading: true,
    error: ''
}

export const countryDataSlice = createSlice({
    name: 'countryDetailedData',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCountryDetailedData.fulfilled.type]: (state, action: PayloadAction<ICountryDetailedData[]>) => {
            state.isLoading = false
            state.error = ''
            state.countries = action.payload
        },
        [fetchCountryDetailedData.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCountryDetailedData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default countryDataSlice.reducer