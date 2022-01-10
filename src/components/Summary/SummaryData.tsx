import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSummaryData } from '../../store/reducers/ActionCreators';
import styled from 'styled-components';
import ListCountries from './ListCountries';
import { IGlobalData } from '../../models/ICovidData';

const Wrapper = styled.div`
  margin: 0 2rem;
`;
const GlobalData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
`;
const Title = styled.div`
  padding: 2px;
  width: 100%;
`;
const TotalStat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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


interface IStats {
    isLoading: boolean
    error: string
    globalData: IGlobalData
}

const SummaryData = () => {
    const dispatch = useAppDispatch()
    const {
        globalData,
        countries,
        isLoading,
        error,
        date,
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
                <Stats isLoading={isLoading} error={error} globalData={globalData}/>
            </GlobalData>
            <SearchCountry>
                <SearchTitle>
                    Search your country
                </SearchTitle>
                <Input placeholder={'Country...'} value={valueInput} onChange={onChangeInputHandler}/>
            </SearchCountry>
            <ListCountries isLoading={isLoading} error={error} countries={countries.filter(country =>
                country.Country.toLowerCase().startsWith(valueInput.toLowerCase()))}/>
        </Wrapper>
    )
}

export default SummaryData

const Stats = ({isLoading, error, globalData}: IStats) => {
    if (error) {
        return <TotalStat><h1>{error}</h1></TotalStat>;
    }

    if (isLoading) {
        return <TotalStat><h1>Loading...</h1></TotalStat>;
    }

    if (!globalData) {
        return <TotalStat><h1>No Results Found</h1></TotalStat>;
    }

    return (
        <TotalStat>
            <span>Total Confirmed: {globalData.TotalConfirmed}</span>
            <span>Total Deaths: {globalData.TotalDeaths}</span>
        </TotalStat>
    )
}