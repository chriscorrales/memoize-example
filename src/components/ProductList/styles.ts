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
