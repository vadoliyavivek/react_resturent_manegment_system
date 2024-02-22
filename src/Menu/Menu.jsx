import React from "react";
import './Menu.css';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import logo from '../Header/images/logo.png';
import pizaa from '../images/pizza.jpg';
import fastfood from '../images/fastfood.jpeg';
import burgger from '../images/burgger.jpg';
import Dishes from '../images/1.jpg';
import juice from '../images/juice.jpg';
import calldrinks from '../images/calldrinks.jpg';
import Footer from "../footer/footer";
import { FaUser } from "react-icons/fa";

const Menu = () => {
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
			    	    	<h1>SPECIAL MENU</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>
            <div id="restaurant-menu">
                <div class="container">
                    <table>
                        <tr>
                            <td>
                                <h2 class="menu-section-title">PIZZA</h2>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <Link to="/Menu/Pizaa">
                                                <img src={pizaa} class="menu-item-product1" width={500} height={400} alt="" />
                                            </Link>
                                        </div>
                                    </center>
                                </div>  
                            </td>

                            <td>
                                <h2 class="menu-section-title">FastFood</h2>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <Link to="/Menu/Fastfood">
                                                <img src={fastfood} class="menu-item-product1" width={500} height={400} alt="" />
                                            </Link>
                                        </div>
                                    </center>
                                </div>  
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h2 class="menu-section-title">BURGGER</h2>
                                <a href="menu/pizza.php">
                                    <div class="menu-section">
                                        <center>
                                            <div class="menu-item">
                                                <Link to="/Menu/Burger">
                                                    <img src={burgger} class="menu-item-product1" width={500} height={400} alt="" />
                                                </Link>
                                            </div>
                                        </center>
                                    </div>  
                                </a> 
                            </td>

                            <td>
                                <h2 class="menu-section-title">All Dishes</h2>
                                <a href="menu/fastfood.php">
                                    <div class="menu-section">
                                        <center>
                                            <div class="menu-item">
                                                <Link to="/Menu/All_dishes">
                                                    <img src={Dishes} class="menu-item-product1" width={500} height={400} alt="" />
                                                </Link>
                                            </div>
                                        </center>
                                    </div>  
                                </a> 
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h2 class="menu-section-title">JUICE</h2>
                                <a href="menu/pizza.php">
                                    <div class="menu-section">
                                        <center>
                                            <div class="menu-item">
                                                <Link to="/Menu/Juice">
                                                    <img src={juice} class="menu-item-product1" width={500} height={400} alt="" />
                                                </Link>
                                            </div>
                                        </center>
                                    </div>  
                                </a> 
                            </td>

                            <td>
                                <h2 class="menu-section-title">Colddrinks</h2>
                                <a href="menu/fastfood.php">
                                    <div class="menu-section">
                                        <center>
                                            <div class="menu-item">
                                                <Link to="/Menu/Drinks">
                                                    <img src={calldrinks} class="menu-item-product1" width={500} height={400} alt="" />
                                                </Link>
                                            </div>
                                        </center>
                                    </div>  
                                </a> 
                            </td>
                        </tr>
                    </table>     
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Menu;