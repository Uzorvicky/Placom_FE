"use client";
import { HeadingWrapper, H1, H3, H4, MobileLogo } from "./headingStyles";
import { CSSProperties } from "react";

interface HeadingProps {
  heading?: string;
  subHeading?: string;
  subHeadingTwo?: string;
  align?: string;
  headingSize?: string;
  headingStyle?: CSSProperties;
  subHeadingStyle?: CSSProperties;
  noLogo?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  subHeadingTwo,
  align,
  headingSize,
  headingStyle,
  subHeadingStyle,
  noLogo,
}) => {
  return (
    <HeadingWrapper align={align}>
      {!noLogo && (
        <MobileLogo
          priority
          width={40}
          height={40}
          alt="FA Logo"
          src="/assets/FALogo.png"
        />
      )}
      <H1 style={headingStyle} fontSize={headingSize}>
        {heading}
      </H1>
      <H3 style={subHeadingStyle}>{subHeading}</H3>
      <H4>{subHeadingTwo}</H4>
    </HeadingWrapper>
  );
};

export default Heading;