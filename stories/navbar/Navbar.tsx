import React,{useState} from 'react';
import { homebaseSideNavConfig } from './HomeBase.types'
import { Navitem } from './Navitem';
import { NavToggle } from './NavToggle';
import { Aside } from './Aside';
import './navbar.css';
import sidebarToggle from '../assets/sidebar_toggle.svg'
import project from '../assets/Projects.svg'
import profile from '../assets/Profile.svg'
import community from '../assets/Community.svg'
import estimates from '../assets/Estimates.svg'
import transaction from '../assets/Transactions.svg'
interface NavbarProps {
  children:React.ReactNode,
     toggleView: () => void,
    onClick?: () => void;
}

export const Navbar = ({
  children,
    toggleView,
  ...props
}: NavbarProps) => {
    const [View, setView] = useState(true); //set view as full or halfside

    toggleView=() => {
     
        setView(prev => !prev);}
 

  return (  
    <>
     <Aside fullView={View}  >
    <NavToggle onClick={toggleView}/>
    <Navitem  href={"#"} imgsrc={project} linktext={"Projects"} fullView={View} active={false}    />
      <Navitem href={"#"} imgsrc={profile} linktext={"Profile"} fullView={View} active={false}    />
      <Navitem href={"#"} imgsrc={community} linktext={"Estimates"} fullView={View} active={false}    />
      <Navitem href={"#"} imgsrc={estimates} linktext={"Profile"} fullView={View} active={false}    />
      <Navitem href={"#"} imgsrc={transaction} linktext={"Transaction"} fullView={View} active={false}    />
      {children}
    </Aside>
  </>
   );

};

