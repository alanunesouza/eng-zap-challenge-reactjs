import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 20px;

  @media (min-width: 768px) {
    width: 60%;
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
    width: 40%;
    margin: 10px;

    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .css-1qrom1v img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid #eee;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    width: 90%;
  }

  span {
    padding: 10px;
    align-items: center;
    display: flex;

    svg {
      fill: #666;
      margin-right: 5px;
    }
  }
`;

export const FooterImages = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;

export const Value = styled.text`
  font-size: 20px;
  font-weight: 500;
  padding: 15px;
`;
