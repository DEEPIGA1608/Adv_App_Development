// Updateplans.js

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Addplan.css'; // Make sure to import your CSS file
import { AppBar, Toolbar, Typography, Button,Select,MenuItem } from '@mui/material';
import axios from 'axios';

const Updateplans = () => {
  const { planId } = useParams();
  const [plan, setPlan] = useState({
    planType: 'prepaid',
    planName: '',
    planAmount: '',
    planValidity: '',
    planDetails: '',
    features: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    const fetchPlanDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/plans/${planId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPlan(response.data);
      } catch (error) {
        console.error('Error fetching plan details:', error);
      }
    };

    fetchPlanDetails();
  }, [planId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditPlan = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:8080/api/plans/update/${planId}`, plan, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage('Updating Plan Successful!');
    } catch (error) {
      console.error('Error updating plan:', error);
      setSuccessMessage('Error updating plan');
    }
  };

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
        <div className="addplcontainer">
        <center><h2>Add Recharge plans</h2></center>
        <form className="form" id="form">
          <div className="column one">
            <div className="field">
              <label>Plan Type:</label>
              <select id="PlanType" className="inputpl" name="planType" value={plan.planType} onChange={handleChange}>
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
              </select>
            </div>
            <div className="field">
              <label>Plan Name:</label>
              <input className="inputpl" type="text" name="planName" value={plan.planName} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Plan Amount:</label>
              <input className="inputpl" type="number" name="planAmount" value={plan.planAmount} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Plan Validity:</label>
              <input className="inputpl" type="text" name="planValidity" value={plan.planValidity} onChange={handleChange} required />
            </div>
          </div>
          <div className="column two">
            <div className="field">
              <label className="Briefadpl">Plan Details:</label>
              <textarea className="textareaadpl" name="planDetails" value={plan.planDetails} onChange={handleChange}></textarea>
            </div>
            <div className="field">
              <label className="Briefadpl">Features:</label>
              <textarea className="textareaadpl" name="features" value={plan.features} onChange={handleChange}></textarea>
            </div>
          </div>
          <center>
            <input type="submit" value="SAVE" onClick={handleEditPlan} className="registeradpl" />
          </center>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </>
  );
};

export default Updateplans;
