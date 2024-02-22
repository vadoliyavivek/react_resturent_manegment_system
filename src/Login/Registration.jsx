import React from "react";
import './Login.css';
import './util1.css';
import logo from './images/logo.png';

const Registration = () => {
    return(
		<div class="b">
	        <div class="limiter" >
    	        <div class="container-login100">
        	        <div class="wrap-login100 p-t-25 ">
            	        <form class="login100-form validate-form">
                	        <span class="login100-form-title p-b-37">
						        Sign Up
					    	</span>

	                        <span class="login100-form-avatar">
    	                        <img src={logo} alt=""/>
						    </span>

	                        <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter username">
							    <input class="input100 input1" type="text" name="name"/>
							    <span class="focus-input100" data-placeholder="Name"></span>
						    </div>

                	        <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							    <input class="input100 input1" type="text" name="email"/>
							    <span class="focus-input100" data-placeholder="Email"></span>
						    </div>

   		                    <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Mobile Number">
							    <input class="input100 input1" type="text" name="mobile"/>
							    <span class="focus-input100" data-placeholder="Mobile Number"></span>
						    </div>

	                        <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
							    <input class="input100 input1" type="password" name="pass"/>
						    	<span class="focus-input100" data-placeholder="Password"></span>
						    </div>
                                    
                	        <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						    	<input class="input100 input1" type="password" name="cpass"/>
					    		<span class="focus-input100" data-placeholder="Conform Password"></span>
					    	</div>

							<div class="container-login100-form-btn5">
							    <a href="/Home" class="login100-form-btn5 input1" type="submit" value="Login" name="login">Registration</a>
						    </div>

	                        <br></br>

	                        <ul class="login-more p-t-50">
				    			<li class="m-b-8">
			    					<span class="txt1">
	    								Forgot
    								</span>
	    							<a href="Login.jsx" class="txt2">
									    Username / Password?
								    </a>
							    </li>
							    <li>
								    <span class="txt1">
								    	Do You have an account?
								    </span>
							    	<a href="/" class="txt2">
							    		Sign In
						    		</a>
						    	</li>
					    	</ul>
                    	</form>
                	</div>
            	</div>
        	</div>
		</div>
    )
}

export default Registration