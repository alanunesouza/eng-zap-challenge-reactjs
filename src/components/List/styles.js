import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 20px;
  width: 80%;
  height: 250px;
  padding: 20px;

  img {
    cursor: pointer;
    width: 30%;
    height: 90%;
  }
`;
