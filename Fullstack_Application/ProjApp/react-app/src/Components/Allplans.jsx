import { useState, useEffect } from 'react';
import './Plan.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Select,MenuItem } from '@mui/material';
import axios from 'axios';

const Allplans = () => {
  const [activeTab, setActiveTab] = useState('prepaid');
  const [plans, setPlans] = useState([]);
  const [addons, setAddons] = useState([]);
  const token = localStorage.getItem('token');
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    fetchPlans(activeTab);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log('Active Tab:', tab); // Print the tab value in the console
    fetchPlans(tab); // Fetch plans based on the selected tab
  };

  
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  const fetchPlans = async (tab) => {
    try {
      let response;
      if (tab === 'addon') {
        response = await axios.get(`http://localhost:8080/api/addons/api/customer/addon`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAddons(response.data);
      } else {
        response = await axios.get(`http://localhost:8080/api/plans/customer/${tab}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPlans(response.data);
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  return (
    <><AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1282 }}>
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
      <div className="plans-container">
        <div className="tab-container">
          <div className={`tab ${activeTab === 'prepaid' ? 'active-tab' : ''}`} onClick={() => handleTabClick('prepaid')}>
            Prepaid Plans
          </div>
          <div className={`tab ${activeTab === 'postpaid' ? 'active-tab' : ''}`} onClick={() => handleTabClick('postpaid')}>
            Postpaid Plans
          </div>
          <div className={`tab ${activeTab === 'addon' ? 'active-tab' : ''}`} onClick={() => handleTabClick('addon')}>
            Add-on Data Plans
          </div>
        </div>
        <div className="plans-list">
          {activeTab === 'addon' ? (
            <>
              <div className={`plans-section ${activeTab === 'addon' ? 'active-section' : ''}`}>
                <h2 className="planh2">Add-on Plans</h2>
                {addons.map((addon, index) => (
                  <div key={index} className="plan-box">
                    <h3>{addon.addonName}</h3>
                    <p>Details: {addon.addonDetails}</p>
                    <p>Validity: {addon.addonValidity}</p>
                    <p>Amount: {addon.addonPrice}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="planh2">{activeTab === 'prepaid' ? 'Prepaid Plans' : 'Postpaid Plans'}</h2>
              {plans.map((plan, index) => (
                <div key={index} className={`plans-section ${plan.planType === activeTab ? 'active-section' : ''}`}>
                  <div className="plan-box">
                    <h3>{plan.planName}</h3>
                    <p>Details: {plan.planDetails}</p>
                    <p>Validity: {plan.planValidity}</p>
                    <p>Amount: {plan.planPrice}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Allplans;
