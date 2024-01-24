import React from 'react'

const Sectioneight = () => {
  return (
    <>
        <div className='ms-5 ps-4'>
        <br />
            <div className='row gap-lg-2 rounded' >
                <div className=' rounded ms-5 col-5 shadow'style={{background:"#f6f5f4"}}>
                <i class="bi bi-eye"></i>
                <p className='fw-semibold'>Customize the info you track</p>
                <p>Create your own labels, tags, owners, and more, so everyone has context and everything stays organized</p>
                <img className='w-100' src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png" alt="" />
                </div>
                
                <div className=' rounded ms-5 col-5 shadow' style={{background:"#f6f5f4"}}>
                <i class="bi bi-palette"></i>
                <p className='fw-semibold'>Build any page, communicate any idea</p>
                <p>Create your own labels, tags, owners, and more, so everyone has context and everything stays organized</p>
                <img className='w-100' src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png" alt="" />
                </div>
                </div>
                <br />
                <div className='text-center'>
                    <p className='h3'>Notion adapts to your needs. It’s as minimal or <br /> as powerful as you need it to be.</p>
                </div>
                <div className='row'>
<div className='col-6 '>
    <img className='float-end' src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png" alt="" />
</div>
<div style={{fontSize:"15px",lineHeight:"10px"}} className='col-6'>
    <p className='fw-semibold'>Rahim Makani
</p>
    <p>Director of Product, Matchgroup</p>
</div>
</div>  
            </div>
            <br />
            <br />
    </>
  )
}

export default Sectioneight