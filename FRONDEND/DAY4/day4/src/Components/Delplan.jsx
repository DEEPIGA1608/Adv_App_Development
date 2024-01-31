// DeletePlan.js
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import './Delplan.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Delplan= () => {
  const [planType, setPlanType] = useState('prepaid');
  const [planId, setPlanId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    // Perform plan deletion logic here

    // For demo purposes, just display a success message
    setSuccessMessage('Plan deleted successfully!');
  };

  return (
    <>
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
    <div className="delete-plan-container">
      <h2 className="heading">Delete Plan</h2>
      <form onSubmit={handleDelete} className="delete-form">
        <div className="form-group">
          <label className="labeldpl">Plan Type:</label>
          <select
            id="deletePlanType"
            value={planType}
            onChange={(e) => setPlanType(e.target.value)}
            className="delete-select"
          >
            <option value="prepaid">Prepaid</option>
            <option value="postpaid">Postpaid</option>
            <option value="addon">Add-on</option>
          </select>
        </div>
        <div className="form-group">
          <label className="labeldpl">Plan ID:</label>
          <input
            type="text"
            id="deletePlanId"
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
            placeholder="Enter plan ID"
            required
            className="delete-input"
          />
        </div>
        <button type="submit" className="delete-button">
          Delete
        </button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
    </>
  );
};

export default Delplan;
