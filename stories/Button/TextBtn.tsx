import React from 'react';
import './button.css';
import'./TextBtn.css';
interface TextBtnProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
   containOnlyIcon?:boolean;
    textPrimary?:boolean;
    textCritical?:boolean;
    size?: 'small' | 'large';
    iconClass:string;
    source:string;
    label: string;
    
    onClick?: () => void;
  }
  
/**
 * Primary UI component for user interaction
 */
export const TextBtn = ({
  primary ,
  textPrimary,
  textCritical,
  containOnlyIcon=false,
  size = 'small',
  iconClass,
  source,
  label,
  ...props
}: TextBtnProps) => {
  var text =  textPrimary?'button--textPrimary':'button--textSecondary';
var btnIconPadding="";
var showTextSecondary=false;
var abc=false;
  var image='';
  if(containOnlyIcon ){
    image='button-onlyIcon';
    btnIconPadding='button-onlyIconPadding';
    abc=true;
   
}
if(label!=""){
  btnIconPadding="";
} 
if(textCritical===true){
  text="textCritical";
  iconClass=iconClass+"critical";
  }
  
if(text==='button--textSecondary' ){
  iconClass=iconClass+"sec";
 console.log(iconClass)
}


  return (
    <button
      type="button"
      className={['button', `button--${size}`,image,text,btnIconPadding].join(' ')}
      {...props} 
    > 
   {abc&& <img className={[iconClass ].join('')}  style={{paddingRight:'8px'}} src={source} alt="" />}
      {label}
    </button>
  );

};
