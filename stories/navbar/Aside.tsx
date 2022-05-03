import React,{useState} from 'react';
import './navbar.css';

interface AsideProps {
    children:React.ReactNode,
    fullView: boolean,
    
}

export const Aside = ({
    children,
    fullView,
    ...props  
}: AsideProps) => {
    

  return (  
    <aside className='homebase-side-nav ' data-size={fullView ? 'full' : 'min'}>
        {children}
  </aside>
   );

};

