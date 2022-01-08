import React from 'react'
import { useEffect } from 'react';
import './App.scss'
import Maps from './components/map/Maps';
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchSummaryData } from './store/reducers/ActionCreators';


const App = () => {
    const dispatch = useAppDispatch()
    const {globalData, countries, isLoading, error} = useAppSelector(state => state.summaryDataReducer)

    useEffect(() => {
        dispatch(fetchSummaryData())
    }, [])
    return (
        <div className='App'>
            <div className='home'>
                <div className='home__left'>
                    {isLoading && <h1>LOADING...</h1>}
                    {error && <h1>ERRORR!!!!</h1>}
                    <h3>Total Confirmed: {globalData.TotalConfirmed}</h3>
                    <h3>Total Deaths: {globalData.TotalDeaths}</h3>
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
                </div>
                <div className='home__right'>
                    <div className='map'>
                        <div className='map__container'>
                            <div className='map__state'>
                            </div>
                            <div className='map__explorer'>
                                <Maps countriesData={countries}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
