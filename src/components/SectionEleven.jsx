import React from 'react'
import "../styles/SectionTwo.css"

const SectionEleven = () => {
  return (
    <>
        <div>
            <div className="row w-75 mx-auto">
                <div className="col-lg-4">
                    <div className='rounded p-4' style={{background:"#9999996b"}}>
                    <p className='h1 text-primary'>1M+</p>
                    <small>community members</small>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className='rounded p-4' style={{background:"#9999996b"}}>
                    <p className='h1 text-primary'>150+</p>
                    <small>community groups</small>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className='rounded p-4' style={{background:"#9999996b"}}>
                    <p className='h1 text-primary'>50+</p>
                    <small>countries represented</small>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionEleven