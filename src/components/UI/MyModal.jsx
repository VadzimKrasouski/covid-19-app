import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => props.visible ? 'flex' : 'none'};
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: #4d6059;
  min-width: 500px;
  min-height: 400px;
  height: 100px;
`
const MyModal = ({children, visible, setVisible}) => {
    return (
        <Wrapper visible={visible} onClick={() => setVisible(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </Wrapper>
    );
};

export default MyModal;