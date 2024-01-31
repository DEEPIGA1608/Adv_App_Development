// FeedbackFormNeat.js

// import React from 'react';
import './Feedback.css';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Feedback = () => {
  return (
    <>
    <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
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
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form className="feedback-form">
        <div className="questionfe">
          <label className="labelfe">How satisfied are you with our Prepaid plans?</label>
          <select id="prepaidfe" name="prepaid" className="selectfe">
            <option >Very Satisfied</option>
            <option >Satisfied</option>
            <option >Neutral</option>
            <option>Unsatisfied</option>
            <option >Very Unsatisfied</option>
          </select>
        </div>

        <div className="questionfe">
          <label className="labelfe">How satisfied are you with our Postpaid plans?</label>
          <select id="postpaid" name="postpaid" className="selectfe">
            <option >Very Satisfied</option>
            <option>Satisfied</option>
            <option >Neutral</option>
            <option >Unsatisfied</option>
            <option>Very Unsatisfied</option>
          </select>
        </div>

        <div className="questionfe">
          <label className="labelfe">How satisfied are you with our Add-on Data plans?</label>
          <select id="addon" name="addon" className="selectfe">
            <option>Very Satisfied</option>
            <option>Satisfied</option>
            <option >Neutral</option>
            <option>Unsatisfied</option>
            <option >Very Unsatisfied</option>
          </select>
        </div>

        <div className="questionfe">
          <label className="labelfe">Additional Comments:</label>
          <textarea id="comments" name="comments" rows="4" className="selectfe"></textarea>
        </div>

        <center><button type="submit">Submit Feedback</button></center>
      </form>
    </div>
    </>
  );
};

export default Feedback;
