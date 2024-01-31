// import React from 'react'
import { useState } from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  return (
    <>
        <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
                <form action="">
                    <h2><center>Sign up</center></h2>
                    <div >
                        <input type="text" placeholder='UserName' required onChange = {e => setUname(e.target.value)}/>
                        <div className='error'>{uname.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div >
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div >
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>

                   
                    
                    <div>
                        <input type="tel" placeholder='Phone Number' required  onChange = {e => setContactNo(e.target.value)}/>
                        <div className='error'>{contactNo.length !== 10?"Enter valid contact number ":""}</div>
                    </div>
                  <br/>

                      <center>
                        <Link to = "/"><button className = "signup-btn" type="submit"  color="primary">
                        Create Account
                      </button>
                      </Link></center>
                    
                    <div>
                        <p>Already have an Account? <Link to="/"><u>Sign In</u></Link> </p>
                    </div>
                </form>
            </div>
        </div>
        <div/>
</>
)
};
export default Signup