import React from 'react'

const SectionSeven = () => {
  return (
    <>
    <section className='ms-5 ps-5'>
<div style={{background:"#f6f5f4"}} className='rounded w-75 ms-5 p-5 '>

  <div  className=''>
  <span><i class="bi bi-shuffle text-primary h2"></i></span>
    <p className='fw-semibold'>Visualize, filter & sort any way you want</p>
    <span>
    Show only tasks assigned to you, or items marked as urgent. Break <br /> down any project in the way that’s most helpful to you.
    </span>
  </div>
  <br />
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active border">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/calendar.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/gallery.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/kanban.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/table.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/timeline.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
    </section>

    </>
  )
}

export default SectionSeven