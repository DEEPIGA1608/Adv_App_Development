import axios from 'axios';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button,Select,MenuItem } from '@mui/material';
import './Addplan.css';
import { Link } from 'react-router-dom';

const AddPlanAddon = () => {
  const [addon, setAddon] = useState({
    addonName: '',
    addonPrice: '',
    addonDetails: '',
    addonValidity: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddon(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
      const response = await axios.post('http://localhost:8080/api/addons/api/admin/addon', addon, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setSuccessMessage('Addon added successfully');
        setAddon({
          addonName: '',
          addonPrice: '',
          addonDetails: '',
          addonValidity: ''
        });
      } 
    } catch (error) {
      console.error('Error saving addon:', error);
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
        <center><h2>Add Addon Plans</h2></center>
        <form className="form" onSubmit={handleSubmit}>
          <div className="column">
            <div className="field">
              <label>Addon Name:</label>
              <input className="inputpl" type="text" name="addonName" value={addon.addonName} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Addon Price:</label>
              <input className="inputpl" type="number" name="addonPrice" value={addon.addonPrice} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Addon Validity:</label>
              <input className="inputpl" type="text" name="addonValidity" value={addon.addonValidity} onChange={handleChange} required />
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label>Addon Details:</label>
              <textarea className="textareaadpl" name="addonDetails" value={addon.addonDetails} onChange={handleChange}></textarea>
            </div>
          </div>
          <center>
            <input type="submit" value="SAVE" className="registeradpl" />
          </center>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        
      </div>
    </>
  );
};

export default AddPlanAddon;
