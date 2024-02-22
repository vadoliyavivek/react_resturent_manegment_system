import React from "react";
import './Contact.css';
import '../Header/Header.css';
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return(
        <>
            <header class="top-navbar">
    		    <nav class="navbar navbar-expand-lg navbar-light bg-light">
	    		    <div class="header__left">
		    		    <a class="navbar-brand img-margin" href="home.php">
			    		    <img src={logo} alt="" height="97px" className="border-radius: 50%" />
				        </a>
				        <div class="header__right " id="navbars-rs-food">
    					    <ul class="navbar-nav header__lists ml-auto">
		    				    <li class="nav-item"><Link class="nav-link" to="/Home">Home</Link></li>

			    			    <li class="nav-item"><Link class="nav-link" to="/Menu">Menu</Link></li>

    			    			<li class="nav-item"><Link class="nav-link" to="/Reservation">Reservation</Link></li>

		        				<li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>

		    	    			<li class="nav-item active"><Link class="nav-link" to="/Contact">Contact</Link></li>

			    	    		<li class="nav-item"><Link class="nav-link" to="/Feedback">Feedback</Link></li>

		    			    	<div class="dropdown">
                                    <li class="nav-item"><Link class="nav-link" to="/Profile"><FaUser /></Link></li>
				    			    <div class="dropdown-content">
                                        <Link class="nav-link" to="/Edit_profile">Edit Profile</Link>
						    		    <a href="/">Logout</a>
							        </div>
					    	    </div>
				    	    </ul>
			    	    </div>  
		    	    </div>
	    	    </nav>
    	    </header>

            <div class="all-page-title page-breadcrumb">
		        <div class="container text-center">
			        <div class="row">
			    	    <div class="col-lg-12">
			    	    	<h1>CONTACT US</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

            <div class="contact mt-125">
                <div class="container">
                    <div class="heading-title text-center">
				        <center>
                    	    <i><h2>Get In Touch For Any Query</h2></i>
					    </center>
					    <br></br>
					    <br></br>
                    </div>
                    
                    <table>
                        <tr>
                            <td>
                                <div class="contact-info">
                                    <div class="contact-icon">
                                        <CiLocationOn color="#d43031" class="svg"/>
                                    </div>
                                    <div class="contact-text">
                                        <h3>Our Head Office</h3>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div>

                                <div class="contact-info">
                                    <div class="contact-icon">
                                        <FaPhoneAlt color="#d43031" class="svg"/>
                                    </div>
                                    <div class="contact-text">
                                        <h3>Call for Help</h3>
                                        <p>+012 345 6789</p>
                                    </div>
                                </div>

                                <div class="contact-info">
                                    <div class="contact-icon">
                                        <MdEmail color="#d43031" class="svg"/>
                                    </div>
                                    <div class="contact-text">
                                        <h3>Email for Information</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <form id = "basic-form" action="" method="post"> 
                                    <div class="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
						                <input class="input1000" type="text" placeholder="Your Name" name="Name"/>
					                </div>

                                    <div class="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter Your Email">
						                <input class="input1000" type="email" id="email" placeholder="Your Email" name="email"/>
					                </div>

                                    <div class="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter subject">
						                <input class="input1000" type="text" id="subject" placeholder="Your subject" name="subject"/>
					                </div>

                                    <div class="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter message">
						                <textarea class="input1000" id="message" placeholder="Your message" name="message"/>
					                </div>

                                    <div>
                                        <center><button class="btn2" type="submit" name="save">Send Message</button></center>
                                    </div>
                                </form>
                            </td>
                        </tr>
                    </table>    
                </div>
            </div>
        
            <Footer/>
        </>
    )
}

export default Contact;