
import "./Login.css";
import {Link} from 'react-router-dom';
import { useState } from "react";

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <div>
        <h2 >Login</h2>
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div className="input-box">
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>
                    <br/>
                    <Link to="/HomepgUser">
                        <button type="submit">
                        Sign In
                      </button>
                      </Link>
                      


<br></br>
<p>Don&rsquo;t have an Account?<Link to="/signup"> SignUp</Link></p>
      </div>
    </div>
  );
};

export default Login;