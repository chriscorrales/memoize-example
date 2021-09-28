import styled from 'styled-components';

export const Container = styled.div`
  width: 155px;
  height: 125px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  padding: 15px 0;
  align-items: center;
`;

export const Text = styled.h3`
  margin: 10px 0;
`;

export const Button = styled.button`
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
