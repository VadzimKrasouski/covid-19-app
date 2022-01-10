import MyModal from '../UI/MyModal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ISummaryCountryData } from '../../models/ICovidData';

interface IProps {
    countries: ISummaryCountryData[]
}

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
  justify-content: center;

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

const ListCountries = ({countries}:IProps) => {
    const [modal, setModal] = useState(false);

    const OnClickCountryHandler = () => {
        setModal(true)
    }
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default ListCountries
