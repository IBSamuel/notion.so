import React from 'react'
import "../styles/SectionTwo.css"
import { useState } from 'react'

const SectionTwo = () => {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
  return (
    <>
       <section className=''>
       <div className='row justify-content-center gap-3' >
            <div style={{width:"14rem",background:"#f6f5f4"}} className='card border-0 col-3 shadow-sm rounded p-2' onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
                <div className=''>
                <span className='bg-light btn' ><i style={{color:'#9d34da'}} class="bi bi-stars h6"></i></span>
                <p className='h3 ps-2 pe-2'>AI</p>
               </div>
                
                <p className='fw-semibold'>Ask Literally Anything. Notion will answer.</p>
                <p className='text-danger learnMore fw-semibold'style={{color:'#9d34da'}}> Click  {isHovered && (<div>hi</div>)}</p>
            </div>
        </div>
       </section>
    </>
  )
}

export default SectionTwo