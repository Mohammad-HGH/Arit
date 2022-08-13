import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/img/Group.png";
import logo_1 from "./assets/img/Group (1).png";
import Rect from "./assets/img/Rectangle 3.png";
import arrow from "./assets/svg/Polygon 1.svg";
import Gp_img from "./assets/img/Group 848.png";
import hangout from "./assets/img/Ellipse 45.png";
import sq_icon from "./assets/img/Vector.png";
import num_01 from "./assets/img/01.png";
import num_02 from "./assets/img/02.png";
import num_03 from "./assets/img/03.png";
import num_04 from "./assets/img/04.png";
import num_05 from "./assets/img/05.png";
import head_txt from "./assets/img/head_txt.png"

// icons
import ins from './assets/svg/Instagram - Negative.svg'
import face from './assets/svg/Facebook - Negative.svg'
import linked from './assets/svg/LinkedIn - Negative.svg'
import twitter from './assets/svg/Twitter - Negative.svg'

import triangle from './assets/svg/Polygon 2.svg'

// brnads
import poplin from "./assets/img/logo/poplin.png";
import asto from "./assets/img/logo/asto.png";
import dnevnik from "./assets/img/logo/dnevnik.png";
import sailing from "./assets/img/logo/sailing.png";
import optilogic from "./assets/img/logo/optilogic.png";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" className="br-bottom" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="img-fluid" alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto nav-group">
                            <Nav.Link href="#home" className="active-nav-item position-relative">
                                Services
                                <img src={triangle} className="pointer" alt=""/>
                            </Nav.Link>
                            <Nav.Link href="#home" className="nav-item">
                                Careers
                            </Nav.Link>
                            <Nav.Link href="#home" className="nav-item">
                                FAQs
                            </Nav.Link>
                            <Nav.Link href="#home" className="nav-item">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#home" className="nav-item">
                                Aboutus
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">
                        <Button variant="primary" className="nav-button">
                            Get in touch
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="custom-bg">
                <div className="container">
                    <div className="row mb-5 pb-5">
                        <div className="col-12 col-md-7 position-relative d-flex justify-content-center flex-column">
                            <div>
                                <img
                                    src={arrow}
                                    className="img-fluid position-absolute arrow-svg d-none d-lg-block"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img className="img-fluid mb-3" src={head_txt} alt=""/>
                            </div>
                            <div>
                                <p className="p-part-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Id
                                    vulputate sodales orci ut semper mollis etiam.
                                </p>
                            </div>
                            <div>
                                <Button variant="primary" className="nav-button mb-5">
                                    Get early access
                                </Button>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <img src={Rect} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 pt-5 pb-5">
                        <div className="col-12 col-md-7 person-bg position-relative">
                            <img
                                src={hangout}
                                className="img-fluid position-absolute hangout-svg d-none d-md-block"
                                alt=""
                            />
                            <div>
                                <h3 className="head-part-1">Services</h3>
                            </div>
                            <div>
                                <p className="p-part-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br/>
                                    adipiscing elit Id vulputate sodales orci ut
                                    <br/>
                                    semper mollis etiam.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <img src={Gp_img} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 pb-5">
                        <h3 className="head-part-1">Workflow</h3>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className="col-12 col-md-2 d-flex flex-column text-center">
                            <div className="arrow">
                                <img src={sq_icon} className="img-fluid" alt=""/>
                            </div>
                            <div className="arrow">
                                <h2>Idea</h2>
                            </div>
                            <div className="arrow">
                                <p className="p-part">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Id
                                    vulputate sodales orci ut semper mollis etiam.
                                </p>
                            </div>
                            <div className="arrow">
                                <img src={num_01} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column text-center">
                            <div className="arrow">
                                <img src={sq_icon} className="img-fluid" alt=""/>
                            </div>
                            <div className="arrow">
                                <h2>Product design</h2>
                            </div>
                            <div className="arrow">
                                <p className="p-part">
                                    Lorem ipsum dolor sit

                                    amet,
                                    <br/>
                                    consectetur

                                    adipiscing elit
                                    <br/>
                                    Id

                                    vulputate sodales orci

                                    ut
                                    <br/>
                                    semper mollis

                                    etiam.
                                </p>
                            </div>
                            <div className="arrow">
                                <img src={num_02} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column text-center">
                            <div className="arrow">
                                <img src={sq_icon} className="img-fluid" alt=""/>
                            </div>
                            <div className="arrow">
                                <h2>MVP</h2>
                            </div>
                            <div className="arrow">
                                <p className="p-part">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Id
                                    vulputate sodales orci ut semper mollis etiam.
                                </p>
                            </div>
                            <div className="arrow">
                                <img src={num_03} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column text-center">
                            <div className="arrow">
                                <img src={sq_icon} className="img-fluid" alt=""/>
                            </div>
                            <div className="arrow">
                                <h2>Scaling</h2>
                            </div>
                            <div className="arrow">
                                <p className="p-part">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Id
                                    vulputate sodales orci ut semper mollis etiam.
                                </p>
                            </div>
                            <div className="arrow">
                                <img src={num_04} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column text-center">
                            <div className="arrow">
                                <img src={sq_icon} className="img-fluid" alt=""/>
                            </div>
                            <div className="arrow">
                                <h2>Maintence </h2>
                            </div>
                            <div className="arrow">
                                <p className="p-part">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Id
                                    vulputate sodales orci ut semper mollis etiam.
                                </p>
                            </div>
                            <div className="arrow">
                                <img src={num_05} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-1"></div>
                    </div>
                    <div className="row mb-5 pb-5">
                        <h3 className="head-part-1">Testimonials</h3>
                    </div>
                    <div className="row d-flex flex-row justify-content-center align-items-center">
                        <div className="col-12 col-md-1 mx-4">
                            <img src={asto} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-md-2 mx-4">
                            <img src={dnevnik} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-md-2 mx-4">
                            <img src={poplin} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-md-2 mx-4">
                            <img src={sailing} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-md-2 mx-4">
                            <img src={optilogic} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-md-1"></div>
                    </div>


                </div>
            </div>
            <div className="footer-bg">
                <div className="p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-5 mt-5 pt-5 pb-5">
                                    <img src={logo_1} className="img-fluid d-none d-md-block" alt=""/>
                                </div>
                                <div className="mb-5 mt-5 pt-5 pt-md-0">
                                    <h1>Why Choose Us</h1>
                                </div>
                                <div className="mb-5 mt-5">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        <br/>
                                        adipiscing elit Id vulputate sodales
                                        orci
                                        <br/>
                                        ut
                                        semper mollis etiam.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 position-md-relative d-flex justify-content-center">
                                <div className="mt-5 pt-5 position-md-absolute form-style">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Email address"/>

                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputPassword1"
                                                   placeholder="Password"/>
                                        </div>

                                        <button type="submit" className="w-full btn btn-primary-1">
                                            GET STATRTED
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h1>
                                FOLLOW US
                            </h1>

                            <div className="d-flex flex-row justify-content-around mt-5 mb-5">
                                <div><img className="img-fluid" src={face} alt=""/></div>
                                <div><img className="img-fluid" src={twitter} alt=""/></div>
                                <div><img className="img-fluid" src={ins} alt=""/></div>
                                <div><img className="img-fluid" src={linked} alt=""/></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-3 footer-item">
                            <h2>Company</h2>
                            <li className="first-child">About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0 footer-item">
                            <h2>Resources</h2>
                            <li className="first-child">Proposal Template</li>
                            <li>Invoice Template</li>
                            <li>Tuturoial</li>
                            <li>How to write a contract</li>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-righter pt-5">
                <section>
                    <p>
                        Copyright @ARIT 2022. All Rights Reserved.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
