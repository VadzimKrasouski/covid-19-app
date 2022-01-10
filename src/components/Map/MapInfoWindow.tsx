import React, { useEffect, useState } from 'react'
import { Marker } from './Marker'
import styled from 'styled-components'
import { GoogleMap } from './GoogleMap';
import { useAppSelector } from '../../hooks/redux';
import { ISummaryCountryData } from '../../models/ICovidData';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

`;

/*interface IMapsProps {
    countriesData: SummaryCountryData[]
}*/

interface ICountryOnMap {
    country: string
    alpha2: string
    latitude: number
    longitude: number
    show: boolean
}

const MapInfoWindow = React.memo(() => {
    const {countries} = useAppSelector(state => state.summaryDataReducer)
    const [countriesOnMap, setCountriesOnMap] = useState<ICountryOnMap[]>([])
    const [countryData, setCountryData] = useState<ISummaryCountryData | undefined>();

    const fetchCountriesCoords = () => {
        fetch('countries.json')
            .then((response) => response.json())
            .then((data) => {
                data.countries.forEach((country: ICountryOnMap) => {
                    country.show = false
                })
                setCountriesOnMap(data.countries)
            })
    }

    useEffect(() => {
        fetchCountriesCoords();
    }, [])

    const onChildMouseEnterHandler = (key: any, isLoading: boolean) => {
        if (isLoading)
            setCountriesOnMap(prevState => {
                return prevState.map(country => country.alpha2 === key ? {...country, show: true} : country)
            })
        setCountryData(countries.find(country => country.CountryCode === key))
    }

    const onChildMouseLeaveHandler = (key: any) => {
        setCountriesOnMap(prevState => {
            return prevState.map(country => country.alpha2 === key ? {...country, show: false} : country)
        })
    }

    if (!countriesOnMap || countriesOnMap.length === 0) {
        return null;
    }

    return (
        <Wrapper>
            <GoogleMap onChildMouseEnter={onChildMouseEnterHandler}
                       onChildMouseLeave={onChildMouseLeaveHandler}>
                {countriesOnMap && countriesOnMap.length ? countriesOnMap.map((country: ICountryOnMap) => {
                    const markerProps = {
                        key: country.alpha2,
                        lat: country.latitude,
                        lng: country.longitude,
                        country: country.country,
                        show: country.show,
                        countryData
                    }
                    return <Marker {...markerProps}/>
                }) : 'no countries'}
            </GoogleMap>
        </Wrapper>
    )
})

export default MapInfoWindow
