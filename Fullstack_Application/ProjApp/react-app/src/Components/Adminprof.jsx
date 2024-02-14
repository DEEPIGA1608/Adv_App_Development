// Profile.js

import { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Select,MenuItem } from '@mui/material';

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Use local storage to get user email and password
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1282 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button><Link to="/homepgad"> Home</Link></Button>
          <Button><Link to="/allplans">All Plans</Link></Button>
          <Select
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Add Plans or Addons' }}
          style={{ color: '#4d0099' }}
        >
          <MenuItem value="" disabled>
            Add Plans
          </MenuItem>
          <MenuItem value="add-plan"><Link to="/addplan" >Add Recharge plans</Link></MenuItem>
          <MenuItem value="add-addon"><Link to="/addplanaddon" >Add Addon plans</Link></MenuItem>
        </Select>
          <Button><Link to="/delplan">Edit Plans</Link></Button>
          <Button><Link to="/rehis">User History</Link></Button>
          <Button><Link to="/adminprof">Profile</Link></Button>
          <Button><Link to="/">Logout</Link></Button>
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
              <span className="label">Email:</span> {userEmail}
            </div>
            <div className="detail-item">
              <span className="label">Password:</span> {userPassword}
            </div>
            <p className="bio">
              My Email id is {userEmail}.Password of my account is {userPassword}.This is a comfortable platform for recharge.Making use of it to the fullest
            </p>
           </div>
        </center>
      </div>
    </>
  );
};

export default Profile;
