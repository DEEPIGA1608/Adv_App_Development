// RechargeHistory.js

// import React from 'react';
import './Rechargehis.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Rechargehis = () => {
  // Sample user data
  const userData = {
    userName: 'John Doe',
    phoneNumber: '+1234567890',
  };

  // Sample recharge history data
  const rechargeHistoryData = [
    { id: 1, planId: 101, planAmount: 20, date: '2022-03-15' },
    { id: 2, planId: 102, planAmount: 30, date: '2022-03-20' },
    { id: 3, planId: 103, planAmount: 25, date: '2022-03-25' },
  ];

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
    <div className="recharge-history-container">
      <h2 className="headingread">Recharge History of Users</h2>
      
      <table className="history-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Plan ID</th>
            <th>Plan Amount (USD)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rechargeHistoryData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{userData.userName}</td>
              <td>{userData.phoneNumber}</td>
              <td>{entry.planId}</td>
              <td>${entry.planAmount.toFixed(2)}</td>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Rechargehis;
