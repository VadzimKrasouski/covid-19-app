import { combineReducers, configureStore } from '@reduxjs/toolkit';
import summaryDataReducer from './reducers/SummarySlice'

const rootReducer = combineReducers({
    summaryDataReducer
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