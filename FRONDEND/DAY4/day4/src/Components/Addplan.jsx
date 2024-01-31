// RegistrationForm.js

// import React from 'react';
import './Addplan.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Addplan = () => {
  return (<>
  
    <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My App
      </Typography>
      <Button>
        <Link to="/homepgad"> Home</Link>
      </Button>
      <Button>
        <Link to="/allplans">All Plans</Link>
      </Button>
      <Button>
        <Link to="/addplan">Add or Update Plans</Link>
      </Button>
      <Button>
        <Link to="/delplan">Delete Plans</Link>
      </Button>
      <Button>
        <Link to="/rehis">Recharge History</Link>
      </Button>
      <Button>
        <Link to="/adminprof">Profile</Link>
      </Button>
      <Button>
        <Link to="/">Logout</Link>
      </Button>
    </Toolbar>
  </AppBar>
    <div className="addplcontainer">
      <center><h2>Add or Update plans</h2></center>
      <form className="form" id="form">
        <div className="column one">
          <div className="field">
            <label>Plan Type:</label>
            <select id="PlanType" className="inputpl" name="PlanType">
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
              <option value="addon">Add On</option>
            </select>
          </div>
          <div className="field">
            <label >Plan Id:</label>
            <input  className="inputpl" type="number" required />
          </div>
          <div className="field">
            <label >Plan Name:</label>
            <input className="inputpl" type="text" required />
          </div>
          <div className="field">
            <label >Plan Amount:</label>
            <input className="inputpl" type="number"   required />
          </div>
        </div>
        <div className="column two">
          <div className="field">
            <label >Validity:</label>
            <input className="inputpl" type="number" required />
          </div>
          <div className="field">
            <label >Benefits:</label>
            <input className="inputpl" type="text"  />
          </div>

          <div className="field">
            <label className="Briefadpl">Features:</label>
            <textarea className="textareaadpl"></textarea>
          </div>
        </div>
        <center><input type="submit" value="UPDATE" className="registeradpl" /></center>
        
      </form>
    </div>
    </>
  );
};

export default Addplan;
