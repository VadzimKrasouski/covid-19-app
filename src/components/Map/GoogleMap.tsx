import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import POLAND_CENTER from './polandCenter';
import mapStyles from './mapStyles';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;


export const GoogleMap = ({children = null, ...props}: any) => {
    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAP_KEY,
                }}
                defaultZoom={1}
                defaultCenter={POLAND_CENTER}
                margin={[30, 30, 30, 30]}
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                {...props}
            >
                {children}
            </GoogleMapReact>
        </Wrapper>
    )
}


