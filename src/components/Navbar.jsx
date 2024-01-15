import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg border">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img style={{width:"100px"}} src="https://get.site/wp-content/uploads/2021/10/notion-logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-sm-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Product <i class="bi bi-chevron-down"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Download <i class="bi bi-chevron-down"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Solutions <i class="bi bi-chevron-down"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources <i class="bi bi-chevron-down"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <ul className='navbar-nav mb-2 mb-lg-0'>
          <li className="nav-item">
              <a className="nav-link" href="#">Request a demo |</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </>
  )
}

export default Navbar