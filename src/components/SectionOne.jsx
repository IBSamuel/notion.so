import React from 'react'
import "../styles/SectionOne.css"
const SectionOne = () => {
  return (
    <>
        <section>
            <div className='text-center'>
                <p className='h1s'>Write, plan, share. <br />With AI at your side.</p>
                <p className='black h3'>Notion is the connected workspace where better, faster work happens.</p>
                <br />
                <br />
                <span className='blackBackground p-2 rounded text-light fw-semibold h5'>Get Notion free 
                 </span><span className='text-primary h5'>Request a demo →</span>
                 <br />
                 <br />
                 <br />
                <div className=' mx-auto'>
                    <img className='w-50' src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/4qPZTqxXRCDQiimE4c9xXc/eb57558f50ee6fac68dc04e3b5099c8a/home-hero.png" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionOne