import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSummaryData } from '../../store/reducers/ActionCreators';
import styled from 'styled-components';
import ListCountries from './ListCountries';

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
`;

const SearchCountry = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const SearchTitle = styled.label`
  font-weight: 900;
  margin-bottom: 8px;
`

const Input = styled.input`
  background: #4d6059;
  height: 2rem;
  border: 1px solid black;
  border-radius: 0;

  :hover {
  }

  :focus {

  }
`

const SummaryData = () => {
    const dispatch = useAppDispatch()
    const {
        globalData,
        countries,
        isLoading,
        error,
        date,
        searchCountry
    } = useAppSelector(state => state.summaryDataReducer)
    const [valueInput, setValueInput] = useState('');
    useEffect(() => {
        dispatch(fetchSummaryData())
    }, [dispatch])

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    return (
        <Wrapper>
            <GlobalData>
                <Title>
                    <h1>Global Statistic</h1>
                    <span>Last Updated on {date}</span>
                </Title>
                <TotalStat>{isLoading && <h1>LOADING...</h1>}
                    {error && <h1>ERRORR!!!!</h1>}
                    <span>Total Confirmed: {globalData.TotalConfirmed}</span>
                    <span>Total Deaths: {globalData.TotalDeaths}</span>
                </TotalStat>
            </GlobalData>
            <SearchCountry>
                <SearchTitle>
                    Search your country
                </SearchTitle>
                <Input placeholder={'Country...'} value={valueInput} onChange={onChangeInputHandler}/>
            </SearchCountry>
            <ListCountries countries={countries.filter(country =>
                country.Country.toLowerCase().startsWith(valueInput.toLowerCase()))}/>
        </Wrapper>
    )
}

export default SummaryData
