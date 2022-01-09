import React from 'react'
import MapInfoWindow from './components/Map/MapInfoWindow';
import styled from 'styled-components';
import SummaryData from './components/SummaryData';

const Wrapper = styled.main`
  min-height: 100vh;
  background: #4d6059;
  overflow: hidden;
`;

const Home = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 33rem;
  @media only screen and (max-width: 1056px) {
    flex-direction: column;
    width: 100%;
    min-height: 50vh;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 33rem;
  @media only screen and (max-width: 1056px) {
    flex-direction: column;
    width: 100%;
    min-height: 50vh;
  }
`;

const Map = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  border-left: 1px solid black;
  @media only screen and (max-width: 1056px) {
    position: fixed;
    bottom:0;
    right: 0;
    left: 0;
    min-height: 300px;
    height: 50vh;
    border-top: 1px solid black;
  }
`;

const App = () => {
    return (
        <Wrapper>
            <Home>
                <LeftSide>
                    <SummaryData/>
                </LeftSide>
                <RightSide>
                    <Map>
                        <MapInfoWindow/>
                    </Map>
                </RightSide>
            </Home>
        </Wrapper>
    )
}

export default App
