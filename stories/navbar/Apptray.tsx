import React from 'react'
import AppTray from "../assets/AppTray.svg"
interface ApptrayProps {
  
  className:string;
  onClick?: () => void;
}

export const Apptray = ({
  className,
    onClick,
  ...props
}: ApptrayProps) => {
    
  return (  
    <>
   
   <button><img  className={className}src={AppTray} alt="brand" /></button> 
   
   
  </>
  
  );

};
export default Apptray;