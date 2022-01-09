import axios from 'axios'
import { ICountry, ICountryDetailedData, IGlobalData, ISummaryCountryData } from '../models/ICovidData'

export interface ISummaryDataResponse {
    ID: string
    Global: IGlobalData
    Countries: ISummaryCountryData[]
    Date: string
    error: string
}
interface ICountriesResponse {
    data: ICountry[]
}
export interface ICountryDetailedDataResponse {
    data: ICountryDetailedData[]
}

const instance = axios.create({
    baseURL: 'https://api.covid19api.com',
})

export const covidAPI = {
    getSummaryData() {
        return instance.get<ISummaryDataResponse>('/summary')
    },
    getCountries() {
        return instance.get<ICountriesResponse>('/countries')
    },
    getCountryData(country: string) {
        return instance.get<ICountryDetailedDataResponse>(`/country/${country}`)
    }
}