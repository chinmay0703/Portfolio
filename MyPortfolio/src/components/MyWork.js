import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import {
    AiFillGithub, AiFillCloud,
    AiOutlineArrowLeft
} from 'react-icons/ai';
import Footer from './Footer';

function MyWork() {
    return (
        <Fragment>
            <div>
                            <div className="col">
                <div className="p-2 slide-in-top">

                    <div className="row">
                        <div className="col-12 p-2">
                            <h1 className="ff-jose fw-bold ls-2" > Work Showcase</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a href='/'>  <h6 className="ff-jose fw-bold ls-2"><AiOutlineArrowLeft></AiOutlineArrowLeft>Home</h6></a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls3" className="carousel slide my-1" >
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
                                <a href="https://rebalance-chinmay0703.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillCloud /> Live - Link</a>
                            </div>

                        </div>

                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls10" className="carousel slide my-1" >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/Screenshot (138).png" className="d-block w-100  img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (153).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (154).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (139).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (140).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (141).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (142).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (143).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (144).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls10" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls10" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Hospital Erp(Firebase)</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/chinmay0703/FirebaseHospitalErp" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                                <a href="https://rebalance-9861b.web.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillCloud /> Live - Link</a>
                            </div>

                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls1" className="carousel slide my-1" >
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

                            <div id="carouselExampleControls4" className="carousel slide my-1" >
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

                            <div id="carouselExampleControls2" className="carousel slide my-1" >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/Screenshot (116).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (109).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (110).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (111).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (112).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (113).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (114).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (115).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (108).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (117).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (118).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (119).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (120).png" className="d-block w-100 img-responsive" height="225" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Screenshot (121).png" className="d-block w-100 img-responsive" height="225" alt="..." />
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
                                <h5 className="ff-jose my-1">ShopKaro(Mock-json)</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="https://github.com/chinmay0703/Thinsil-Technologies-Private-Limited" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                                </div>
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