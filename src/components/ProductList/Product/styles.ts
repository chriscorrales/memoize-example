import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;

`;

export const ProductContainer = styled.div`
  padding: 0 25px;
  display: flex;
  flex-flow: row nowrap;
  padding: 30px 0 30px 30px;
  color: #111111;
  background-color: #ffffff;
  position: relative;
  flex: 1;
  max-width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 10px 5px;
  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #27ae60;
  }
`;

export const Image = styled.img`
  width: 255px;
  height: 249px;
  margin: 0 auto 0 0;
  overflow: hidden;
  border-width: 0;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export const Information = styled.div`
  width: 270px;
  min-height: 249px;
  background-size: auto;
  padding: 0 12px;
  display: flex;
  border-width: 0;
  position: relative;
  flex-flow: column nowrap;
  text-align: left;
  position: relative;
  flex: 1;
  max-width: 100%;
`;

export const Title = styled.div`
  margin: 20px 0 0;
`;

export const Category = styled.div`
  font-style: italic;
  margin: 20px 0 0;
`;
export const Price = styled.div`
  font-weight: 700;
  margin: 20px 0 0;
  color: #f12c0e !important;
`;
