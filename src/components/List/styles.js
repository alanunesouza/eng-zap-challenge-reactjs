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
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 20px;
  width: 90%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 900px) {
    width: 40%;
  }

  h1 {
    font-size: 18px;
    color: #666;
    margin: 10px;
  }

  a {
    display: flex;
    margin: 10px;
    border-radius: 15px;
    background-color: #4fbfa5;
    padding: 10px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }

  img {
    cursor: pointer;
    height: 210px;
  }

  .css-br29ai {
    display: flex;
    flex: 1;
  }
  .css-19oq51w {
    display: none;
  }

  .css-1qrom1v img {
    height: 300px;
    width: 100%;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.a`
  display: flex;
  margin: 10px;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #4fbfa5;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
