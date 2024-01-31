// Plans.js

import  { useState } from 'react';
import './Plan.css';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Allplans = () => {
  const [activeTab, setActiveTab] = useState('prepaid');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>  <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
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

export default Allplans;
