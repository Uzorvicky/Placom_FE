import styled, { keyframes } from "styled-components";

interface CommonProps {
  width?: string;
  height?: string;
}
export const CardContainer = styled.div`
  display: flex;
  padding: 30px;
  margin: 1rem;
  overflow: hidden;
  align-items: center;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 550px;
  box-sizing: border-box;
  background: #fcfcfc;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 76px 45px -55px rgba(27, 123, 68, 0.17);
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0rem;
    /* visibility: hidden; */
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 3px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  cursor: not-allowed;
  z-index: 999999;
  top: 0;
  background-color: rgba(164, 162, 162, 0.1);
  height: 100%;
  width: 100%;
  @media screen and (max-width: 800px) {
    opacity: 0.1;
    background-color: transparent;
  }
`;

// Define the animation for the loader line
const loading = keyframes`
  0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
`;

// Define the LoaderLine component
export const LoaderLine = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ccc; */
  position: relative;

  &:before {
    top: 0;
    content: "";
    width: 50%;
    /* left: -100%; */
    height: 100%;
    display: block;
    position: absolute;
    animation: ${loading} 2s ease-in-out infinite;
    background-color: #f68b1e;
  }
`;

//Define the loader wrapper for absolute positioning
export const Loader = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  top: 0;
`;
