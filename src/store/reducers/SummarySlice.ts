import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SummaryDataResponse } from '../../API/covidAPI';
import { GlobalData, SummaryCountryData } from '../../models/ICovidData';

interface SummaryState {
    globalData: GlobalData
    countries: SummaryCountryData[]
    isLoading: boolean
    error: string
}

const initialState: SummaryState = {
    globalData: {
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
    },
    countries: [],
    isLoading: true,
    error: ''
}

export const summarySlice = createSlice({
    name: 'summaryData',
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true
        },
        dataFetchingSccess(state, action: PayloadAction<SummaryDataResponse>) {
            state.isLoading = false
            state.error = ''
            state.globalData = action.payload.Global
            state.countries = action.payload.Countries
        },
        dataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default summarySlice.reducer