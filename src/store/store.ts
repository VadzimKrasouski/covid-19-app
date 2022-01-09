import { combineReducers, configureStore } from '@reduxjs/toolkit';
import summaryDataReducer from './reducers/SummarySlice'
import countryDetailedDataReducer from './reducers/CountryDetailedDataSlice'
import countriesReducer from './reducers/CountriesSlice'

const rootReducer = combineReducers({
    summaryDataReducer,
    countryDetailedDataReducer,
    countriesReducer
})

export const setupStore = () => {
    return configureStore({
            reducer: rootReducer
        }
    )
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']