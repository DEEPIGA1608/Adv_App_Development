// Profile.js

import { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const RechargeHistoryTable = () => {
  // Dummy recharge history data, replace it with your actual data
  const rechargeHistory = [
    { id: 1, date: '2024-01-30', amount: 20 },
    { id: 2, date: '2024-01-29', amount: 15 },
    // Add more history items as needed
  ];

  return (
    <div className="recharge-history">
      <h3>Recharge History</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rechargeHistory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Profile = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

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
      <div className="proco">
        <center>
          <div className="he">PROFILE</div>
        </center>
        <center>
          <div className="profile-box">
            <img src="https://placekitten.com/150/150" alt="Profile Avatar" className="avatar" />
            <h2 className="proname">John Doe</h2>
            <div className="detail-item">
              <span className="label">Email:</span> john.doe@example.com
            </div>
            <div className="detail-item">
              <span className="label">Phone:</span> +1234567890
            </div>
            <p className="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="detail-item">
              <span className="label">Recharge History:</span>
              {showHistory ? (
                <span className="link" onClick={toggleHistory}>
                  Hide History
                </span>
              ) : (
                <span className="link" onClick={toggleHistory}>
                  View History
                </span>
              )}
            </div>
            {showHistory && <RechargeHistoryTable />}
          </div>
        </center>
      </div>
    </>
  );
};

export default Profile;
