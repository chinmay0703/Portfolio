import React, { Fragment } from 'react'
import Sidebar from './Sidebar'

function About() {
    return (
        <Fragment>
            <Sidebar></Sidebar>
            <div className="col py-3 d-flex align-items-center about-image">

                <div className="container">
                    <div className="row">




                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">About me</h1>
                                <hr></hr>
                                <p className='slide-in-bottom'>Ambitious full-stack developer, a self-led learner and team player  <br></br>

                                </p>
                                <p className='slide-in-bottom'>
                                    To secure a challenging position in a leading industry that recognizes and
                                    rewards excellence in teamwork and provides opportunities to further my
                                    education and expand my skill set. With a post-graduate degree from CDAC,
                                    I have developed a strong foundation in software development and possess
                                    expertise in various programming languages and frameworks.<br></br>
                                    to work on challenging and diverse projects with the latest technologies.
                                </p>
                                <p className='slide-in-bottom'>
                                    
                                    The technology I've worked on : <span className="text-red ls-2">Java , Spring-Boot , React.js , Javascript<br></br>
                                        My-SQL , Html , Css , Bootstrap </span>
                                </p>
                                <p className='slide-in-bottom'>
                                    Currently Learning Angular Framework.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/c.jpg" alt="..."></img>
                        </div>



                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default About