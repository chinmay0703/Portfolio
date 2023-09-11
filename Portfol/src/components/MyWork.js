import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Work Showcase</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/222.png" className="d-block w-100 img-responsive " height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/2.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/3.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/4.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/5.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">PizzaZone(Food Ordering System)</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/chinmay0703/PizzaZone" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                            </div>

                        </div>

                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/11.png" className="d-block w-100  img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/12.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/13.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/14.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Rebalance Physiotherapy Clinic</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/chinmay0703/Rebalance-Physiotherapy_Clinic" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/21.png" className="d-block w-100  img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/22.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/23.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Home-Services</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/chinmay0703/Home-Services" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/m-01.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/m-02.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/m-03.png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">Movie Searcher</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="https://github.com/chinmay0703/MovieSearcher" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyWork