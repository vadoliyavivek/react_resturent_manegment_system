import React from "react";
import './Menu.css';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import d1 from '../images/dishes/1.jpg';
import d2 from '../images/dishes/2.jpg';
import d3 from '../images/dishes/3.jpg';
import d4 from '../images/dishes/4.jpg';
import d5 from '../images/dishes/5.jpg';
import Footer from "../footer/footer";

const Dishes = () => {
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
                            <h1>ALL DISHES</h1>
                        </div>
                    </div>
                </div>
            </div>

            <table>
                <tr>
                    <td>
                        <div class="con">
                            <img src={d1} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Gujarati Dish</h3></td>
                                <h3 class="text-right">₹ 250</h3>
                            </tr>       
                            <h4>So Yummy</h4>
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
                            <img src={d2} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Panjabi Dish</h3></td>
                                <h3 class="text-right">₹ 200</h3>
                            </tr>       
                            <h4>Yummy 👌👌</h4>
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
                            <img src={d3} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Gujarati Dish</h3></td>
                                <h3 class="text-right">₹ 300</h3>
                            </tr>       
                            <h4>😋😋😋</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <button class="btn2" type="submit" name="order">ORDER</button>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div class="con">
                            <img src={d4} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">West Dish</h3></td>
                                <h3 class="text-right">₹ 280</h3>
                            </tr>       
                            <h4>😜😜😜</h4>
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
                            <img src={d5} height="250px" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Kathiyavadi Dish</h3></td>
                                <h3 class="text-right">₹ 250</h3>
                            </tr>       
                            <h4>So Yummy</h4>
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
export default Dishes;