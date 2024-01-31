// src/components/RechargeForm.jsx

import  { useState } from 'react';
import './Recharge.css';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const RechargeForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleRecharge = () => {
    // You can implement the recharge logic here
    // For now, let's just display a success message
    alert('Recharge Successful!');
  };
  

  return (
  <> <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
  <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      My App
    </Typography>
    <Button >
     <Link to="/homepguser"> Home</Link>
    </Button>
    <Button>
      <Link to="/plans">Plans</Link>
    </Button>
    <Button >
    <Link to="/feedback">Feedback</Link>
    </Button>
    <Button >
    <Link to="/contact">Contact</Link>
    </Button>
    <Button >
    <Link to="/profile">Profile</Link>
    </Button>
    <Button >
    <Link to="/">Logout</Link>
    </Button>
  </Toolbar>
</AppBar>
    <div className="recharge-form-container">
      <h2 className="h2re">Recharge Form</h2>
      <form className="formre">
        <div className="form-group">
          <label className="labelfe">Name:</label>
          <input className="inputfe"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label className="labelfe">Mobile Number:</label>
          <input className="inputfe"
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>
        <button className="recharge-button" onClick={handleRecharge}>
          Recharge Now
        </button>
      </form>
    </div>
    </>
  );
};

export default RechargeForm;
