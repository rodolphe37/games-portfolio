import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(43vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #38006b;
  width: 100%;
  max-width: 53vw;
  height: 690px;
  background: #111;
  box-shadow: 1px 3px 21px white;
`;
