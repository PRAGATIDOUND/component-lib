import React from 'react';
import {Icon} from "./Icon"
interface ShowIconProps {
  Name:string,
  className:string,
  stroke:any,
  fill:any
 
}

export const ShowIcon = ({
  Name,
  className="small",
  stroke,
  fill,
  ...props
}: ShowIconProps) => {
  
   return (
<Icon name={Name} className={className} stroke={stroke} fill={fill}  ></Icon>
  );

};
