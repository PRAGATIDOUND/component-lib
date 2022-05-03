import React from 'react'

export const Nav = (props:any) => {
  return (
    <nav className='top-nav'>
      {props.children}
    </nav>
  )
}

//export default Nav
// import React from 'react'

// interface NavProps {

// }

// export const Nav = ({
   
//   ...props
// }: NavProps) => {
    
//   return (  
//     <>
//     <nav className='top-nav'>
//           </nav>
   
//   </>
  
//   );

// };