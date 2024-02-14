import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default role is User
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
        role: role // Include role in the request
      });
      // Extract token from response
      const token = response.data.token;
      // Store token in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Redirect to home page
      navigate("/HomepgUser");
    } catch (error) {
      // Handle login error here
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email-id' required value={email} onChange={e => setEmail(e.target.value)} />
            <div className='error'>{email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email)) ? "Please enter your valid Email-ID" : ""}</div>
            <input type="password" pattern="/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
              title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" 
              placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
            <div className='error'>{password.length < 8 || !((/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ? "Please enter valid Password" : ""}</div>
            <div>
              <label htmlFor="role">Role:</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit">Sign In</button>
          </form>
          {error && <div className='error'>{error}</div>}
          <p>Dont have an Account? <Link to="/signup">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
