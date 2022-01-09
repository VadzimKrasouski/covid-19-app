import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => props.visible ? 'flex' : 'none'};
  background: rgba(0,0,0, 0.5);
  
  
`;

const ModalContent = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;
`
const MyModal = ({children, visible, setVisible}) => {
    return (
        <Wrapper {...visible} onClick={() => setVisible(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </Wrapper>
    );
};

export default MyModal;