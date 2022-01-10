import { fetchCountryDetailedData } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountryDetailedData } from '../../models/ICovidData';

interface ICountryDetailedDataState {
    countryClicked: string | undefined
    countryData: ICountryDetailedData[]
    isLoading: boolean
    error: string
}

const initialState: ICountryDetailedDataState = {
    countryClicked: undefined,
    countryData: [],
    isLoading: true,
    error: ''
}

export const countryDataSlice = createSlice({
    name: 'countryDetailedData',
    initialState,
    reducers: {
        setCountryName(state, action: PayloadAction<string>) {
            state.countryClicked = action.payload
        }
    },
    extraReducers: {
        [fetchCountryDetailedData.fulfilled.type]: (state, action: PayloadAction<ICountryDetailedData[]>) => {
            state.isLoading = false
            state.error = ''
            state.countryData = action.payload
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