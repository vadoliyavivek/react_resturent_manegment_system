import React from "react";
import './Login.css';
import './util1.css';
import './Registration.jsx'
import logo from './images/logo.png';

const Login = () => {
    return (
		<div class="b">
        <div class="limiter" >
            <div class="container-login100">
                <div class="wrap-login100 p-t-85 p-b-20">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-37">
						    Sign In
					    </span>

                        <span class="login100-form-avatar">
						    <img src={logo} alt=""/>
					    </span>

                        <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
						    <input class="input100 input1" type="text" name="email" />
						    <span class="focus-input100" data-placeholder="Email"></span>
					    </div>

                        <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						    <input class="input100 input1" type="password" name="pass" required/>
						    <span class="focus-input100" data-placeholder="Password"></span>
					    </div>

                        <div class="container-login100-form-btn5">
						    <a href="/Home" class="login100-form-btn5 input1" type="submit" value="Login" name="login">LOGIN</a>
					    </div>
                        <br></br>

                        <ul class="login-more p-t-190">
						    <li class="m-b-8">
							    <span class="txt1">
								    Forgot 
    							</span>
							    <a href="src/Login/Registration.jsx" class="txt2">
								    Username / Password?
    							</a>
	    					</li>
    						<li>
	    						<span class="txt1">
		    						Don’t have an account? 
			    				</span>
    							<a href="/Registration" rel="" class="txt2">
	    							Sign up
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

export default Login;