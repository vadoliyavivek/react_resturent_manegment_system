import React from "react";
import './Feedback.css';
import '../Header/Header.css';
import ReactStars from "react-rating-stars-component";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';

const ratingChanged = (newRating) => {
	console.log(newRating);
};

const Feedback = () => {
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

		    	    			<li class="nav-item"><Link class="nav-link" to="/Contact">Contact</Link></li>

			    	    		<li class="nav-item active"><Link class="nav-link" to="/Feedback">Feedback</Link></li>

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
			    	    	<h1>FEEDBACK</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

            <br></br>

            <div class="heading-title text-center">
		        <h2> Give's Your Review</h2>
	        </div>

			<div  class="flex-container">
            	<center>  
                	<form id = "basic-form" action="" method="post"> 

						<br></br>
	                    <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
							<input class="input100" type="text" placeholder=" Your Name" name="Name"/>
						</div>

            	        <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							<input class="input100" type="text" placeholder=" Your Email" name="Email"/>
						</div>

						<div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							<input class="input100" type="text" id="complain" placeholder=" Any Complain of Waiter" name="Email"/>
						</div>

						<table>
							<tr>
								<td>
									<h3 class="text-center">SERVICE</h3>
									<div class="star-margin">
										<ReactStars
    										count={5}
    										onChange={ratingChanged}
    										size={24}
    										activeColor="#d65106"
  										/>
									</div>
								</td>

								<td>
									<h3 class="text-center">CLEANNESS</h3>
									<div class="star-margin">
										<ReactStars
    										count={5}
    										onChange={ratingChanged}
    										size={24}
    										activeColor="#d65106"
  										/>
									</div>
										
								</td>
							</tr>
						</table>

						<div class="wrap-input100">
            	            <textarea class="input100" id="message" name="message" placeholder="Give Any Suggestion" required="required" data-validation-required-message="Please enter your message"></textarea>
                	    </div>

                    	<br></br><br></br>

                    	<div>
                        	<button class="btn2" type="submit" name="save">Send Message</button>
 	                   	</div>
    	                <br></br>
 
        	        </form>  
            	</center>  
        	</div>

            <Footer/>

        </>
    )
}

export default Feedback;