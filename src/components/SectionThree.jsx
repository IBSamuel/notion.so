import React from 'react'

const SectionThree = () => {
  return (
    <>
    <br />
    <div id="carouselExampleInterval" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png" className="d-block w-100 rounded" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/4NsNEojqcfzqch9Eoum1Gm/9aa7d73ac74b60358499211eff4fd074/engineering-wiki-V2.png" className="d-block w-100 rounded" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/6Onv3yRAxJAzFIZJpuwb5E/24e411a845cfcb4a8e2848e9912a9d29/Q_A_Kombi_Hero_screenshot.png" className="d-block w-100 rounded" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png" className="d-block w-100 rounded" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-secondary rounded-5" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-secondary rounded-5" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default SectionThree