'use client'
import { CardContainer, Overlay, LoaderLine, Loader } from "./cardStyles";
import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  width?: string | number;
  height?: string | number;
  styles?: CSSProperties;
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
}

const Card = ({ 
  width, 
  height, 
  styles, 
  className, 
  children, 
  isLoading = false 
}: CardProps) => {
  
  return (
      <CardContainer
    // isLoading={isLoading}
    // width={width}
    // height={height}
    className={className || (styles as string)} // Note: You might want to handle styles differently
  >
    {isLoading && (
      <Loader>
        <LoaderLine></LoaderLine>
      </Loader>
    )}
    
    {isLoading && <Overlay></Overlay>}
    {children}
  </CardContainer>
  )
};

export default Card;