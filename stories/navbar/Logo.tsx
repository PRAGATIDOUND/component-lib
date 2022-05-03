import React from 'react'
import logo from "../assets/logo.svg"
interface LogoProps {
    href:string,
  
  onClick?: () => void;
}

export const Logo = ({
    href,
    onClick,
  ...props
}: LogoProps) => {
    
  return (  
    <>
    <div className='brand'>
    <a href={href}><img src={logo} alt="brand" /></a>  
    </div>
   
  </>
  
  );

};