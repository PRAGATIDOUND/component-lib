import React from 'react';
import './button.css';
interface ButtonProps {
  
  primary?: boolean;
  className:string;
 containOnlyIcon?:boolean;
  size?: 'small' | 'large';
  iconClass:string;
  source:string;
  label: string;
  
  onClick?: () => void;
}

export const Button = ({
  primary ,
  className,
  containOnlyIcon=false,
  size = 'small',
  iconClass,
  source,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--critical';
  // const text =  textPrimary?'button--textPrimary':'button--textSecondary';
var btnIconPadding="";
var showTextSecondary=false;
var abc=false;
  var image='';
  if(containOnlyIcon ){
    image='button-onlyIcon';
    btnIconPadding='button-onlyIconPadding';
    abc=true
}
if(label!=""){
  btnIconPadding="";
} 

  return (
    <>
    <button
      type="button"
      className={['button',className ,`button--${size}`, mode,image,btnIconPadding].join(' ')}
      {...props} 
    > 
    {abc&&<img className={[iconClass ].join('')}  style={{paddingRight:'8px'}} src={source} alt="" />}
      {label}
    </button>
    </>
  );

};
