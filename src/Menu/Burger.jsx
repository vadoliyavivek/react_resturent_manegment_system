import React from "react";
import './Menu.css';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import fast1 from '../images/fastfood/fast1.jpg';
import fast2 from '../images/fastfood/fast2.jpg';
import fast3 from '../images/fastfood/fast3.jpg';
import fast4 from '../images/fastfood/fast4.jpg';
import Footer from "../footer/footer";

const Burger = () => {
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

			    			    <li class="nav-item active"><Link class="nav-link" to="/Menu">Menu</Link></li>

    			    			<li class="nav-item"><Link class="nav-link" to="/Reservation">Reservation</Link></li>

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
                            <h1>BURGGER</h1>
                        </div>
                    </div>
                </div>
            </div>

            <table>
                <tr>
                    <td>
                        <div class="con">
                            <img src={fast1} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Beef Burgers</h3></td>
                                <h3 class="text-right">₹ 180</h3>
                            </tr>       
                            <h4>Amezing</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <Link to="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="con">
                            <img src={fast2} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Turkey Burgers</h3></td>
                                <h3 class="text-right">₹ 150</h3>
                            </tr>       
                            <h4>Very Testy</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <Link to="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="con">
                            <img src={fast3} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Veggie Burgers</h3></td>
                                <h3 class="text-right">₹ 200</h3>
                            </tr>       
                            <h4>So Yammy</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <Link to="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </Link>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div class="con">
                            <img src={fast4} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Bison Burgers</h3></td>
                                <h3 class="text-right">₹ 170</h3>
                            </tr>       
                            <h4>So Sweet</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <Link to="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </Link>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            <Footer />
        </>
    )
}
export default Burger;