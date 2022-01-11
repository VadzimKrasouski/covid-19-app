import MyModal from '../UI/MyModal';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ISummaryCountryData } from '../../models/ICovidData';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCountryDetailedData } from '../../store/reducers/ActionCreators';
import Charts from '../Charts';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 8px;
`;
const Country = styled.div`
  min-width: 280px;
  width: 33%;
  border: 2px solid #24282b;
  margin: 8px 0;
  padding: 4px;
  display: flex;
  flex-direction: column;

  :hover {
    border: 2px solid black;
    cursor: pointer;
  }

  @media only screen and (max-width: 1360px) {
    width: 100%;
  }
`;
const Title = styled.div`
  padding: 2px;
  font-weight: 600;
`;
const CountryInfo = styled.div`
  display: flex;

  > * {
    padding: 2px;
  }
`;

interface IProps {
    countries: ISummaryCountryData[]
}

const ListCountries = React.memo(({countries}: IProps) => {
    const dispatch = useAppDispatch()
    const [modal, setModal] = useState(false);
    const [countryName, setCountryName] = useState<string>();
    const {isLoading, countryData} = useAppSelector(state =>
        state.countryDetailedDataReducer)

    useEffect(() => {
        if (modal && countryName != null) {
            dispatch(fetchCountryDetailedData(countryName))
        }
    }, [countryName, dispatch])

const onClickHandler =(country:string) =>{
        setCountryName(country)
    setModal(true)
}
    return (
        <Wrapper>
            <MyModal visible={modal} setVisible={setModal}>
                {isLoading && <h1>Loading...</h1>}
                {!isLoading && <Charts countryData={countryData}/>}
            </MyModal>
            {countries.map((country) =>
                (
                    <Country key={country.ID} onClick={() => onClickHandler(country.Country)}>
                        <Title>
                            {country.Country}
                        </Title>
                        <CountryInfo>
                            <span>Deaths: {country.TotalDeaths} (+{country.NewDeaths})</span>
                            <span>Confirmed: {country.TotalConfirmed} (+{country.NewConfirmed})</span>
                            <span>Recovered: {country.TotalRecovered} (+{country.NewRecovered})</span>
                        </CountryInfo>
                    </Country>
                )
            )}
        </Wrapper>
    )
})

export default ListCountries
