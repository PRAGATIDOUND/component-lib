
import React,{useState} from 'react';
import {Logo} from "./Logo";
import arrow from "../assets/Arrow.svg"
import "./topnav.css";
import { Apptray } from './Apptray';
import { Nav } from './Nav';
import { Button } from '../Button/Button';
 import {ProjectTitle} from "./ProjectTitle";
interface TopNavbarProps {
    title:string,
}

export const TopNavbar = ({
   title, 
  ...props
}: TopNavbarProps) => {
    
    
  return (  
    <>
   <Nav>
   <Logo href={"#"}/>
<ProjectTitle title={"project name"} />

<div className='left-grid'>
<Button primary={true} className={"left-btn"}containOnlyIcon={false} size={"small"} iconClass={""} source={""} label={"Share"}/>
<Apptray className="app-tray"/>


</div>
</Nav>
     
</>
  
  );

};