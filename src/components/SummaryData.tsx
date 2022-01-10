import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSummaryData } from '../store/reducers/ActionCreators';
import styled from 'styled-components';
import MyModal from './MyModal';

const Wrapper = styled.div`
  margin: 0 2rem;
`;

const GlobalData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  padding: 2px;
`;

const TotalStat = styled.div`
  display: flex;
  flex-direction: column;
`

const ListCountries = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Country = styled.div`
  min-width: 320px;
  width: 40%;
  border: 2px solid #24282b;
  margin: 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    border: 2px solid black;
    cursor: pointer;
  }
`;

const CountryInfo = styled.div`
  display: flex;

  > * {
    padding: 2px;
  }

`

const SummaryData = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useAppDispatch()
    const {globalData, countries, isLoading, error, data} = useAppSelector(state => state.summaryDataReducer)
    useEffect(() => {
        dispatch(fetchSummaryData())
    }, [dispatch])

const OnClickCountryHandler = () => {
    setModal(true)

}
    return (
        <Wrapper>
            <GlobalData>
                <Title>
                    <h1>Global Statistic</h1>
                    <span>Last Updated on {data}</span>
                </Title>
                <TotalStat>{isLoading && <h1>LOADING...</h1>}
                    {error && <h1>ERRORR!!!!</h1>}
                    <span>Total Confirmed: {globalData.TotalConfirmed}</span>
                    <span>Total Deaths: {globalData.TotalDeaths}</span>
                </TotalStat>
            </GlobalData>
            <ListCountries>
                <MyModal visible={modal} setVisible={setModal}>
                    {'text'}
                </MyModal>
                {countries.map((country) =>
                    (
                        <Country key={country.ID} onClick={OnClickCountryHandler}>
                            <Title>
                                {country.Country}
                            </Title>
                            <CountryInfo>
                                <span>Deaths: {country.TotalDeaths}</span>
                                <span>Confirmed: {country.TotalConfirmed}</span>
                                <span>Recovered: {country.TotalRecovered}</span>
                            </CountryInfo>
                        </Country>
                    )
                )}
            </ListCountries>


            <div className='search'>
                <div className='search__container'>
                    <div className='search__title'>
                        <h3>Search your country</h3>
                    </div>
                    <div className='search__input'>
                        {/*<input type='text' value={'Russia'}/>*/}
                    </div>
                    <div className='search__data'>
                        <span>30 Oct 2021</span>
                    </div>
                </div>
            </div>
            <div className='table'>
                Table
            </div>
        </Wrapper>
    )
}

export default SummaryData
