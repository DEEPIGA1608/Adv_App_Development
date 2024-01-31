// Plans.js

import  { useState } from 'react';
import './Plan.css';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Plans = () => {
  const [activeTab, setActiveTab] = useState('prepaid');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <> <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My App
      </Typography>
      <Button color="inherit">
      <Link to="/homepguser"> Home</Link>
      </Button>
      <Button color="inherit">
        <Link to="/plans">Plans</Link>
      </Button>
      <Button color="inherit">
      <Link to="/feedback">Feedback</Link>
      </Button>
      <Button color="inherit">
      <Link to="/contact">Contact</Link>
      </Button>
      <Button color="inherit">
      <Link to="/profile">Profile</Link>
      </Button>
      <Button><Link to="/">Logout</Link>
      </Button>
    </Toolbar>
  </AppBar>
  
    <div className="plans-container">
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'prepaid' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('prepaid')}
        >
          Prepaid Plans
        </div>
        <div
          className={`tab ${activeTab === 'postpaid' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('postpaid')}
        >
          Postpaid Plans
        </div>
        <div
          className={`tab ${activeTab === 'addon' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('addon')}
        >
          Add-on Data Plans
        </div>
      </div>

      <div className="plans-list">
        <div className={`plans-section ${activeTab === 'prepaid' ? 'active-section' : ''}`}>
          <h2 className="planh2">Prepaid Plans</h2>
          <p>Plan details go here...</p>
        </div>

        <div className={`plans-section ${activeTab === 'postpaid' ? 'active-section' : ''}`}>
          <h2 className="planh2">Postpaid Plans</h2>
          <div className="plan-box">
            <h3>Rs.498</h3>
            <p>Unlimited calls</p>
            <p>Unlimited messages</p>
            <p>1.5GB per Day</p>
            <Link to="/recharge"><button>Recharge</button></Link>
          </div>
          <div className="plan-box">
            <h3 >Rs.498</h3>
            <p>Unlimited calls</p>
            <p>Unlimited messages</p>
            <p>1.5GB per Day</p>
          </div>
        </div>

        <div className={`plans-section ${activeTab === 'addon' ? 'active-section' : ''}`}>
          <h2 className="planh2">Add-on Data Plans</h2>
          <p>Plan details go here...</p>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default Plans;
