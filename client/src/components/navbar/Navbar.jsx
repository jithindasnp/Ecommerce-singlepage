import React from 'react'
import { useNavigate } from 'react-router'
import logo from "../../images/logo-6 1.png"
import './navbar.css'


export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col">
                        <nav className="navbar navbar-dark navbar-expand-md ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-2 col ">
                                        <a className="navbar-brand" href="/">
                                            <img src={logo} className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-lg-9  col d-flex align-items-center">
                                        <div className="row">
                                            <div className=" collapse navbar-collapse " id="navbarSupportedContent">
                                                <div className="col-lg-4 col">
                                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                                        <li className="nav-item dropdown">
                                                            <a
                                                                className="nav-link dropDownBtn text-dark "
                                                                href="#"
                                                                role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"

                                                            >
                                                                Classifieds
                                                                <i class="fa-solid fa-angle-down ms-3"></i>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        Action
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        Another action
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        Something else here
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-5 col-auto">
                                                    <div className="input-group  w-100 p-0 m-0" style={{ backgroundColor: "white", borderRadius: "10%" }}>
                                                        <input type="text" className="form-control searchInp" placeholder="Search" style={{ border: "none" }} />
                                                        <div className="input-group-append searchInp" >
                                                            <button className="btn " type="button">
                                                                <i className="fa fa-search" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col  d-flex justify-content-end">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-1 mt-lg-0 mt-sm-1 d-flex align-items-center"><i class="fa-regular fa-heart"></i></div>
                                                        <div className="col-lg-4 col-sm-1 mt-lg-0 mt-sm-1 d-flex align-items-center"><i class="fa-regular fa-trash-can"></i></div>
                                                        <div className="col-lg-4 col-sm-1 mt-lg-0 mt-sm-1 d-flex align-items-center">
                                                            <ul className="navbar-nav   mb-lg-0">
                                                                <li className="nav-item  dropdown">
                                                                    <a
                                                                        className="nav-link p-0"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"

                                                                    >
                                                                        <i class="fa-sharp fa-solid fa-circle-user text-dark"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li>
                                                                            <a className="dropdown-item" href="/login">
                                                                                Login
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="/register">
                                                                                Register
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-1 col d-flex align-items-center" >
                                        <button type="button" onClick={() => { navigate('/cart') }} className="btn btn-info text-white" style={{ boxShadow: "3px  2px  10px #00C6D7" }}>
                                            CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon " />
                            </button>
                        </nav>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2  d-flex align-items-center ">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link p-0 navBottomLink"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"

                                >
                                    All Catogories
                                    <i class="fa-solid fa-angle-down ms-3"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10 col">
                        <div className="row">
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">Books</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">Electronics</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">real estate</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">Cars-bikes</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink"> Dorm-furniture</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink"> Men</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">Women</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink"> Music</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">hobbies Games</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">toys</div>
                            <div className="col-sm-auto col mt-md-0 mt-sm-1 mt-3 d-flex align-items-center navBottomLink">Kids</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
