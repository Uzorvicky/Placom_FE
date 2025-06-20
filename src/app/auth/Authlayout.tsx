"use client";
import Header from "@/shared/registerHeader";
import styled from "styled-components";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
//   login: boolean;
//   register: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children,}) => {
  return (
    <Layout>
      <HeaderWrapper>
        <Header 
        // isAuthScreen 
        // login={login} register={register}
         />
      </HeaderWrapper>
      <Body>{children}</Body>
    </Layout>
  );
};

export default AuthLayout;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background:"#0F6862";

  @media screen and (max-width: 800px) {
    padding: 0 0.5rem;
    max-height: 100vh;
  }
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 1rem;

  @media screen and (max-width: 800px) {
    margin-top: 0.2rem;
  }
`;

export const HeaderWrapper = styled.div`
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;