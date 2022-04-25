import React,{useState} from 'react';
import './inputField.css';
import close from '../assets/Close-Small.svg';
import search from '../assets/search.svg';
interface InputFieldProps {
  searchIcon?:boolean;
  onClick?: () => void;
}
interface SearchInputFieldProps{

}
export const InputField = ({
searchIcon=false ,
  ...props
}: InputFieldProps) => {
  var searchBox="";
  const [text,setText]=useState("");
  const[showCross,setShowCross]=useState(false)
  const inputHandler=(e)=>{
    setText(e.target.value); 
   
}
if(searchIcon===true){
  searchBox='searchBox';
}
  function abc(){
setText("");
  }
function xx(e){
setShowCross(true);

}
  return (
  <div className={["box",searchBox].join(' ')} >
    {searchIcon&&<a href=""><img className='search' src={search} alt=""  /></a>}
   <input type="text" className='inputtext' placeholder='Placeholder text' value={text} onChange={inputHandler} onClick={xx}/>
   {showCross&&<a className='closebtn' onClick={abc}><img className='close' src={close} alt=""  /></a>}
    </div>
  );

};

