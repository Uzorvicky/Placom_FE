import styled from "styled-components";
import Image from "next/image";

interface HeadingWrapperProps {
  align?: string;
}

export const HeadingWrapper = styled.div<HeadingWrapperProps>`
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    text-align: center;
    margin-bottom: 1rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

interface H1Props {
  fontSize?: string;
}

export const H1 = styled.h1<H1Props>`
  color: #878d99;
  font-size: ${({ fontSize }) => fontSize || "38px"};
  font-weight: 900;
  line-height: 50px;
  font-style: normal;
  letter-spacing: -0.05em;

  @media screen and (max-width: 800px) {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    padding: 0 !important;
  }
`;

export const H3 = styled.h3`
  color: #0a0a0a;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  font-style: normal;
  /* font-family: "Poppins"; */

  @media screen and (max-width: 800px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
  }
`;

export const H4 = styled.h4`
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  font-style: normal;

  @media screen and (max-width: 800px) {
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
  }
`;

export const MobileLogo = styled(Image)`
  object-fit: cover;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;