import React,{useState} from 'react';
import { homebaseSideNavConfig } from './HomeBase.types';
interface NavitemProps {
   href:string,
    imgsrc:string,
    linktext:string,
    fullView: boolean,
    active:boolean,
    
  onClick?: () => void;
}

export const Navitem = ({
  href,
    imgsrc,
    linktext,
    fullView,
    active,
  
  ...props
}: NavitemProps) => {
    
    const [setact, setSetact] = useState(false);
    var parameter = window.location.pathname.split('/')[1];
   var current_link=false;
    
   

  return (  
    <>
    
     <div className={`homebase-side-nav_link  ${setact ? 'active-link' : ''} `} >
    
      <a href={href} className='naked img-link' onClick={(e)=>{e.preventDefault();setSetact(true);}} >
      <div className="middle">
        <img className="icon-link"src={imgsrc} alt={""} data-type='sidenav-icon'/> 
       {fullView ? <div className='link-name'>{linktext}</div> : <></>}
       </div>
      </a>
     
    </div>
  </>
  
  );

};