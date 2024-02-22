import React from "react";
import './Reservation.css';
import '../Header/Header.css';
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';

const Reservation = () => {
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

    			    			<li class="nav-item active"><Link class="nav-link" to="/Reservation">Reservation</Link></li>

		        				<li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>

		    	    			<li class="nav-item"><Link class="nav-link" to="/Contact">Contact</Link></li>

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
			    	    	<h1>RESERVATION</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

			<div  class="flex-container">
            	<div class="heading-title text-center">
                	<h2>BOOKING TABLE</h2>
            	</div>

            	<center>  
                <form id = "basic-form" action="" method="post"> 
                    
                    <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
						<input class="input100" type="text" placeholder=" Name" name="Name"/>
					</div>

                    <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
						<input class="input100" type="text" placeholder=" Email" name="Email"/>
					</div>

                    <tabel>
                        <tr>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter mobile">
						            <input class="input10" type="text" placeholder=" Mobile" name="mobile"/>
					            </div>
                            </td>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter person">
						            <input class="input10" type="number" placeholder=" How Many Person" name="person" min="1"/>
					            </div>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Date">
						            <input class="input10" type="date" id="date" placeholder=" Date" name="date"  />
					            </div>
                            </td>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Time">
						            <input class="input10" type="time" placeholder=" Time" name="time"/>
					            </div>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Date">
                                    <select class="input10" name="food" required>
                                            <option>FOOD</option>
                                            <option>PIZAA</option>
                                            <option>FAST FOOD</option>
                                            <option>BURGGER</option>
                                            <option>JUICE</option>
                                        </select>
					            </div>
                            </td>
                            <td>
                                <div class="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Time">
                                    <select class="input10" name="occasion">
                                        <option >Occasion</option>
                                        <option >Birthday Party</option>
                                        <option >Anniversary</option>
                                        <option >Day Salebration</option>
                                        <option >Datting</option>
                                        <option >Wadding</option>
                                        <option >Other</option>
                                    </select>
					            </div>
                            </td>
                        </tr>
                    </tabel>

                    <br></br><br></br>

                    <div>
                        <center><button class="btn2" type="submit" name="save">Book Table</button></center>
                    </div>
                    <br></br>
 
                </form>  
            </center>  
        </div>
        <Footer/>
        
        </>
    )
}

export default Reservation;