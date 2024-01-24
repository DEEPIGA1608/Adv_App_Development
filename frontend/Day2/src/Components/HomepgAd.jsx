// import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "./HomepgAd.css";
const HomepgAd = () => {
  return (
    <>
    <div className='a1'>
   
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">
            Home
          </Button>
          <Button color="inherit">
            About
          </Button>
          <Button color="inherit">
            Plans
          </Button>
          <Button color="inherit">
            Contact
          </Button>
          <Button color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>

    <div className="hmc">
      <div className="image"><img src="https://th.bing.com/th/id/OIP.oEIysFZCTGKgH_vSTJermQAAAA?rs=1&pid=ImgDetMain"></img></div>
      < div className="text">
          <h2>Welcome to Mobile Recharge Admin Portal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Manage Your Mobile Recharge Services Easily</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
    </div>
    
    </>

  );
};

export default HomepgAd;
