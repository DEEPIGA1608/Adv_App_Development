import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Delplan.css';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const DeletePlan = () => {
  const [planId, setPlanId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://localhost:8080/api/plans/del/${planId}`, config);
      setSuccessMessage('Plan deleted successfully!');
    } catch (error) {
      console.error('Error deleting plan:', error);
      setSuccessMessage('Error deleting plan');
    }
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#8080ff', marginTop: -10, marginLeft: -10, width: 1282 }}>
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
            <MenuItem value="add-plan">
              <Link to="/addplan">Add Recharge plans</Link>
            </MenuItem>
            <MenuItem value="add-addon">
              <Link to="/addplanaddon">Add Addon plans</Link>
            </MenuItem>
          </Select>
          <Button>
            <Link to="/delplan">Edit Plans</Link>
          </Button>
          <Button>
            <Link to="/rehis">User History</Link>
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
        <h2 className="heading">Edit Plan</h2>
        <form onSubmit={handleDelete} className="delete-form">
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
          <div className="button-container">
            <button type="submit" className="delete-button">
              Delete
            </button>
            <Link to={`/updateplans/${planId}`}>
              <button type="button" className="update-button1">
                Update
              </button>
            </Link>
          </div>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </>
  );
};

export default DeletePlan;
