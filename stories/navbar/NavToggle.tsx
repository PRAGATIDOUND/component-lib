import React from 'react'
import sidebarToggle from '../assets/sidebar_toggle.svg'
interface NavToggleProps {
  
  
  onClick?: () => void;
}

export const NavToggle = ({
 
    onClick,
  ...props
}: NavToggleProps) => {
    
  return (  
    <>
    <div className='homebase-side-nav_link top '>
      <button className='homebase-side-nav_toggle naked' onClick={onClick}>
        <img src={sidebarToggle}  alt='toggle' />
        <img src={sidebarToggle} alt='toggle' />
      </button>
    </div>
   
  </>
  
  );

};