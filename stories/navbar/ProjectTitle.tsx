import React,{useState} from 'react';
import arrow from "../assets/Arrow.svg"
interface ProjectTitleProps {
    title:string,
  onClick?: () => void;
}

export const ProjectTitle = ({
    title,
    onClick,
  ...props
}: ProjectTitleProps) => {
    
  return (  
    <><div className="project-title">
    <button><span className='project-name'>{title}</span><img src={arrow} alt="down-arrow" /></button>   
    </div>
  
  </>
  
  );

};