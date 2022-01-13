import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISummaryDataResponse } from '../../API/covidAPI';
import { IGlobalData, ISummaryCountryData } from '../../models/ICovidData';
import { fetchSummaryData } from './ActionCreators';

interface ISummaryState {
    globalData: IGlobalData
    countries: ISummaryCountryData[]
    isLoading: boolean
    error: string
    show: boolean
    date: string
    searchCountry: string
}

const initialState: ISummaryState = {
    globalData: {
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
    },
    countries: [],
    searchCountry: '',
    date: '',
    isLoading: true,
    error: '',
    show: false
}

export const summarySlice = createSlice({
    name: 'summaryData',
    initialState,
    reducers: {
        setCountryName(state, action: PayloadAction<string>) {
            state.searchCountry = action.payload
        },
    },
    extraReducers: {
        [fetchSummaryData.fulfilled.type]: (state, action: PayloadAction<ISummaryDataResponse>) => {
            state.isLoading = false
            state.error = ''
            state.globalData = action.payload.Global
            state.countries = action.payload.Countries
            state.date = action.payload.Date
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

export const {setCountryName} = summarySlice.actions
export default summarySlice.reducer