import { covidAPI } from "../../API/covidAPI";
import { AppDispatch } from "../store";
import { summarySlice } from "./SummarySlice";

export const  fetchSummaryData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(summarySlice.actions.dataFetching())
        const response = await covidAPI.getSummaryData()
        dispatch(summarySlice.actions.dataFetchingSccess(response.data))
    } catch (e) {
        let message = 'Unknown Error'
        if (e instanceof Error) message = e.message
        dispatch(summarySlice.actions.dataFetchingError(message))
    }
}

