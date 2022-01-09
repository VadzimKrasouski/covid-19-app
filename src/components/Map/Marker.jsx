import React from 'react'
import styled from 'styled-components'
import { InfoWindow } from './InfoWindow'

const MarkerStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:hover {
    z-index: 10;
  }
`;



export const Marker = React.memo(({show, country, countryData}) => {
    return (
        <MarkerStyle>
            {
                show && countryData && <InfoWindow title={country} countryData={countryData}/>
            }
        </MarkerStyle>
    )
})


