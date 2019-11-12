import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.strong`
  display: flex;
  flex: 1;
  text-align: center;
  font-size: 22px;
  color: #fff;
  margin: 10px;
`;

export const PortalButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const PortalButton = styled.a`
  display: flex;
  margin: 20px;
  border-radius: 15px;
  background-color: ${props =>
    props.portal.name === 'vivareal' ? '#1190cd' : '#fff'};

  width: 140px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
  img {
    width: 80px;
    height: 30px;
  }
`;
