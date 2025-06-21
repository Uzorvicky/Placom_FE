'use client';
import styled from 'styled-components';

export const VerifyForgotPasswordWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding-top: 2rem;
  }
`;


export const ButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    flex: 1;
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;