import GoogleMapReact from 'google-map-react'
import { useCallback, useEffect, useState } from 'react'
import POLAND_CENTER from './polandCenter'
import Marker from './Marker'
import React from 'react'
import mapStyles from './mapStyles'
import { SummaryCountryData } from '../../models/ICovidData'

interface IMapsProps {
    countriesData: SummaryCountryData[]
}

interface ICountryCoords {
    country: string
    alpha2: string
    alpha3: string
    numeric: number
    latitude: number
    longitude: number
}

const Maps = React.memo(({countriesData}: IMapsProps) => {
    const [coords, setCoords] = useState<ICountryCoords[]>([])
    const [countriesCoords, setCountriesCoords] = useState<ICountryCoords[]>([])
    const [countryData, setCountryData] = useState<SummaryCountryData | string>('loading');

    const fetchCountriesCoords = async () => {
        fetch('countries.json')
            .then((response) => response.json())
            .then((data) => {
                setCoords(data.countries)
            })
    }

    const findCountryData = (countryCode: string) => {
        let data = countriesData.find(country => country.CountryCode === countryCode)
        if (data) {
            setCountryData(data)
        } else {
            setCountryData('Data not found')
        }
    }

    useEffect(() => {
        fetchCountriesCoords();
    }, [])

    if (!coords || coords.length === 0) {
        return null;
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY || ''}}
            defaultZoom={1}
            defaultCenter={POLAND_CENTER}
            margin={[30, 30, 30, 30]}
            options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}

        >
            {coords.length && coords.map(country => {
                const markerProps = {
                    key: country.country,
                    lat: country.latitude,
                    lng: country.longitude,
                    country: country.country,
                    countryCode: country.alpha2,
                    countryData: countryData,
                    onMarkerHandler: findCountryData
                }
                return <Marker {...markerProps}/>
            })}
        </GoogleMapReact>
    )
})

export default Maps
