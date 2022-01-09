export interface IGlobalData {
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
}

export interface ICountry {
    Country: string
    Slug: string
    ISO2: string
}

export interface ISummaryCountryData {
    ID: string
    Country: string
    CountryCode: string
    Slug: string
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
    Date: string
}

export interface ICountryDetailedData {
    ID: string
    Country: string
    CountryCode: string
    Province: string
    City: string
    CityCode: string
    Lat: string
    Lon: string
    Confirmed: number
    Deaths: number
    Recovered: number
    Active: number
    Date: string
}

export interface ICountryWithCoords {
    country: string
    alpha2: string
    latitude: number
    longitude: number
}