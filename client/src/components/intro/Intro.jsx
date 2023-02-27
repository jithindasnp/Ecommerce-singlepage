import React from 'react'
import './intro.css'
import carouselImg from '../../images/Rectangle 9.png'


export default function Intro() {
    return (
        <>
            <div className="container-fluid introContainer my-5">
                <div className="row">
                    <div className="col-sm-12  d-flex justify-content-center">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner ">
                                <div className="carousel-item active ">
                                    <center>
                                        <img
                                            className="d-block w-75"
                                            src={carouselImg}
                                            alt="First slide"
                                        />
                                    </center>
                                    <div className="carousel-caption fs-3 d-flex ">
                                        <p>
                                            From students to senior citizens
                                            this web portal of <br />
                                            <b> "Products and Classifieds”</b><br />
                                            provides it all
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <center>
                                        <img
                                            className="d-block w-75 "
                                            src={carouselImg}
                                            alt="Second slide"
                                        />
                                    </center>
                                </div>
                                <div className="carousel-item">
                                    <center>
                                        <img
                                            className="d-block w-75"
                                            src={carouselImg}
                                            alt="Third slide"
                                        />
                                    </center>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
