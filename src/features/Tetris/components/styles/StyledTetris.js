import styled from 'styled-components';
// BG Image
import bgImage from '../../img/bg.png';
import bgAside from '../../img/tetris-original.png'

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  background-position: bottom;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  margin-top: -32px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 15px;
    background-color: rgba(255,255,255,0.6);
    margin: 21px;
    border-radius: 10px;
    border: 3px solid #38006b;
    box-shadow: -1px 8px 19px black;
  }
  .aside2 {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 15px;
    background-color: rgba(0,0,0,0.4);
    border-radius: 10px;
    border: 1px solid #38006b;
    box-shadow: -1px 8px 19px black;
    position: absolute;
    text-align: center;
    color: white;
    margin-left: 520px;
    margin-top: 533px;
    background: url(${bgAside});
    background-position: initial;
    background-size: 68%;
  }
  .colorBack {
    font-family: Pixel,Arial,Helvetica,sans-serif;
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    max-width: 186px;
    height: 119px;
    border-radius: 7px;
    box-shadow: 1px 2px 6px grey;
    padding: 1px;
  }
  .colorBack >p {
    margin-top: -19px;
}
`;
