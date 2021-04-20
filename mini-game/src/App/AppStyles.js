import styled from 'styled-components';

export default styled.main`
  .field {
    background-color: white;
    border: 1px solid black;
    width: 500px;
    height: 500px;
    position: relative;
  }
  .player {
    background-color: black;
    position: absolute;
    width: 50px;
    height: 50px;
  }
  .exit {
    border: 4px solid black;
    position: relative;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
  }
`;
