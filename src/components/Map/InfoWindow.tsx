import React from 'react';
import styled from 'styled-components';
import { ISummaryCountryData } from '../../models/ICovidData';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  color: #fff;
  min-width: 120px;
  position: relative;
  top: 8px;
  left: 8px;
`;
const Info = styled.div`
  background: rgba(255, 255, 255, 0.8);
  min-width: 120px;
  padding: 4px;
  z-index: 5;
`;
const TotalConfirmed = styled.div`
  color: blue;
`;
const TotalDeaths = styled.div`
  color: red;
`;

interface IProps {
    title: string
    countryData: ISummaryCountryData
}

export const InfoWindow = ({title, countryData}: IProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Info>
                <TotalConfirmed>{'Total Confirmed: ' + countryData.TotalConfirmed}</TotalConfirmed>
                <TotalDeaths>{'Total Deaths: ' + countryData.TotalDeaths}</TotalDeaths>
            </Info>
        </Wrapper>
    )
}