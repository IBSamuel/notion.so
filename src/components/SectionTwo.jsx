import React from 'react'
import "../styles/SectionTwo.css"
const SectionTwo = () => {
  return (
    <>
       <section className=''>
       <div className='row justify-content-center gap-3'>
            <div style={{width:"18rem"}} className='card border col-3 shadow rounded p-2' id="learnMore" >
                <div className='d-flex'>
                <span className='bg-light btn' ><i style={{color:'#9d34da'}} class="bi bi-stars h6"></i></span>
                <span className='h3 ps-2 pe-2'>AI</span>
                <span className='fw-semibold rounded mt-2'><span style={{color:'#9d34da', background:"#cc96ec"}} className='p-1 rounded'>Now with Q&A </span></span>
               </div>
                <br />
                <p style={{color:'#9d34da'}}>Centralize your knowledge . No more hunting for answers</p>
                <p className='text-danger learnMore fw-semibold'> Learn more →</p>
            </div>
            <div style={{width:"18rem"}} className='card border col-3 shadow rounded p-2' id="learnMore" >
                <div className='d-flex'>
                <span className='bg-light btn' ><i  class="text-danger bi bi-book-half h6"></i></span>
                <span className='h3 ps-2 pe-2'>Wikis</span>
                <span className='fw-semibold rounded mt-2'></span>
               </div>
                <br />
                <p>Manage complex projects without the chaos</p>
                <p className='text-danger learnMore fw-semibold text-primary'> Learn more →</p>
            </div>
            <div style={{width:"18rem"}} className='card border col-3 shadow rounded p-2' id="learnMore" >
                <div className='d-flex'>
                <span className='bg-light btn' ><i  class="bi bi-stars h6"></i></span>
                <span className='h3 ps-2 pe-2'>Project</span>
                <span className='fw-semibold rounded mt-2'></span>
               </div>
                <br />
                <p>Ask Literally anything. Notion will answer you</p>
                <p style={{color:'#9d34da'}} className='learnMore fw-semibold text-primary'> Learn more →</p>
            </div>
            <div style={{width:"18rem"}} className='card border col-3 shadow rounded p-2' id="learnMore" >
                <div className='d-flex'>
                <span className='bg-light btn' ><i style={{color:'#9d34da'}} class="bi bi-stars h6"></i></span>
                <span className='h3 ps-2 pe-2'>AI</span>
                <span className='fw-semibold rounded mt-2'><span style={{color:'#9d34da', background:"#cc96ec"}} className='p-1 rounded'>Now with Q&A </span></span>
               </div>
                <br />
                <p>Ask Literally anything. Notion will answer you</p>
                <p style={{color:'#9d34da'}} className='learnMore fw-semibold'> Learn more →</p>
            </div>
        </div>
       </section>
    </>
  )
}

export default SectionTwo