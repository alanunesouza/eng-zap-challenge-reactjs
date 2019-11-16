import styled from 'styled-components';
import { darken } from 'polished';

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
  border: ${props => {
    if (props.portal.name === 'vivareal' && props.selected) {
      return `3px solid ${darken(0.05, '#1190cd')}`;
    }
    if (props.portal.name === 'grupozap' && props.selected) {
      return `3px solid ${darken(0.05, '#fff')}`;
    }

    return '';
  }};
  width: 140px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${props =>
    props.portalName !== '' && !props.selected ? '0.9' : '1'};

  :hover {
    opacity: 0.8;
  }
  img {
    width: 80px;
    height: 30px;
  }
`;
