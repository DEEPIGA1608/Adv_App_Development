import "./Login.css";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
const Signup = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("User");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        role: role
      });
      // Handle successful signup here
      console.log(response.data);
      navigate("/");
    } catch (error) {
      // Handle signup error here
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form onSubmit={handleSubmit}>
            <h2><center>Sign up</center></h2>
            <div>
              <input type="text" placeholder='Name' required onChange={e => setName(e.target.value)} />
              <div className='error'>{name.length === 0 ? "Enter Your Name" : ""}</div>
            </div>

            <div>
              <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email)) ? "Please enter your valid Email" : ""}</div>
            </div>

            <div>
              <input type="password" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
              <div className='error'>{password.length < 8 ? "Password must be at least 8 characters" : ""}</div>
            </div>

            <div>
              <input type="password" placeholder='Confirm Password' required onChange={e => setConfirmPassword(e.target.value)} />
              <div className='error'>{confirmPassword !== password ? "Passwords do not match" : ""}</div>
            </div>

            <div>
              <label htmlFor="role">Role:</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <br />

            <center>
              <button className="signup-btn" type="submit" color="primary">
                Create Account
              </button>
            </center>

            {error && <div className='error'>{error}</div>}

            <div>
              <p>Already have an Account? <Link to="/"><u>Sign In</u></Link> </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
