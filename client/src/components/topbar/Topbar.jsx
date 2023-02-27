import React from 'react'
import './topbar.css'

export default function Topbar() {
  return (
    <>
    <div className="container-fluid topBar text-white">
        <div className="row">
            <div className="col-auto col-lg-2  d-flex  justify-content-end align-items-center"><i class="fa-solid fa-phone"></i>  +221 33 66 22</div>
            <div className="col-auto col-lg-2  d-flex  justify-content-end align-items-center"><i class="fa-solid fa-envelope "></i>  support@elextra.io</div>
            <div className="col-auto col-lg-2"></div>
            <div className="col-auto col-lg-2 d-flex  justify-content-end align-items-center"><i class="fa-solid fa-location-dot me-1"></i>  Locations</div>
            <div className="col-auto col-lg-2 d-flex  justify-content-end align-items-center"><p className='me-4 p-0 my-1 fs-5'>|</p>$ Dollar (US)<i class="fa-solid fa-caret-down ms-1"></i></div>
            <div className="col-auto col-lg-2 d-flex  align-items-center">EN<i class="fa-solid fa-caret-down ms-1"></i></div>
        </div>
    </div>
    </>
  )
}
