import styled from 'styled-components';

export const ContainerList = styled.div`
  display: grid;
  min-height: 618px;
  grid-template-columns: repeat(2, calc(((100% - 1140px) / 2) + 555px));
  grid-template-rows: repeat(2, auto);
  width: 1140px;
  grid-gap: 30px;
  margin: 20px 0 0;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 90%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;
  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: #008abf;
  }
`;
