import React from 'react';
import './button.css';
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
 containOnlyIcon?:boolean;
  // textPrimary?:boolean;
  size?: 'small' | 'large';
  iconClass:string;
  source:string;
  label: string;
  
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary ,
  // textPrimary,
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
    <button
      type="button"
      className={['button', `button--${size}`, mode,image,btnIconPadding].join(' ')}
      {...props} 
    > 
    {abc&&<img className={[iconClass ].join('')}  style={{paddingRight:'8px'}} src={source} alt="" />}
      {label}
    </button>
  );

};
