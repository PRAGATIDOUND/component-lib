import React,{useState} from 'react';
import { homebaseSideNavConfig } from './HomeBase.types'
import './navbar.css';
import sidebarToggle from '../assets/sidebar_toggle.svg'
interface NavbarProps {
    fullView: boolean,
  
    toggleView: () => void,
  onClick?: () => void;
}

export const Navbar = ({
    fullView,
    toggleView,
   
  ...props
}: NavbarProps) => {
    const [fulllView, setFulllView] = useState(true);
 
    const parameter = window.location.pathname.split('/')[1];

    fullView=fulllView;
    toggleView=() => {
     
        setFulllView(prev => !prev);}
  

  return (  
    <aside className='homebase-side-nav ' data-size={fullView ? 'full' : 'min'}>
    
    <div className='homebase-side-nav_link '>
      <button className='homebase-side-nav_toggle naked' onClick={toggleView}>
        <img src={sidebarToggle}  alt='toggle' />
        <img src={sidebarToggle} alt='toggle' />
      </button>
    </div>
    
    { homebaseSideNavConfig.map((config, index) => <div className={`homebase-side-nav_link ${parameter === config.match ? 'active-link' : ''} }`} key={'full-view'+index}>
    
      <a href={""} className='naked img-link'>
      <div className='middle'>
        <img className="icon-link"src={config.src} alt={config.text} data-type='sidenav-icon'/>
       {fullView ? <span className='link-name'>{config.text}</span> : <></>}
       </div>
      </a>
     
    </div>)
  }
  </aside>
  
  
  
 

  );

};

// ${parameter === config.match ? 'active-link' : ''