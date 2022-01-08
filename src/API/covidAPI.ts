import axios from 'axios'
import { Country, CountryDataByDay, GlobalData, SummaryCountryData } from '../models/ICovidData'

export interface SummaryDataResponse {
    ID: string
    Message: string
    Global: GlobalData
    Countries: SummaryCountryData[]
    Date: string
    error: string
}
interface CountriesResponse {
    data: Country[]
}
interface CountryDataResponse {
    data: CountryDataByDay[]
}

const instance = axios.create({
    baseURL: 'https://api.covid19api.com',
})

export const covidAPI = {
    getSummaryData() {
        return instance.get<SummaryDataResponse>('/summary')
    },
    getCountries() {
        return instance.get<CountriesResponse>('/countries')
    },
    getCountryData(country: string) {
        return instance.get(`/country/${country}`)
    }
}