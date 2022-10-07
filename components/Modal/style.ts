import styled from "styled-components";

const Fade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Body = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  margin: auto;
  z-index: 101;
`;

export { Body, Fade };
