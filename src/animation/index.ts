import styled, { keyframes } from "styled-components";

// Define the keyframes for the slide-in animation
export const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const FadingInDiv = styled.div`
  animation: ${fadeIn} 1s ease-in-out; /* Adjust the duration and timing function as needed */
`;

export const SlideFromTopDiv = styled.div`
  animation: ${slideInFromTop} 1s ease-in-out; /* Adjust the duration and timing function as needed */
`;

export const FadingOutElement = styled.div`
  animation: ${fadeOut} 1s ease-in-out; /* Adjust the duration and timing function as needed */
`;
