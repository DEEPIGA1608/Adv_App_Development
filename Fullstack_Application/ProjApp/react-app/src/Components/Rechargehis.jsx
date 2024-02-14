import  { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar,Select,MenuItem } from '@mui/material';

const Rechargehis= () => {
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    const fetchRechargeHistory = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        if (!token) {
          setError('Token not available. Please log in.');
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:8080/api/recharges', { headers });
        setRechargeHistory(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching recharge history:', error);
        setRechargeHistory([]);
        setError('Error fetching recharge history. Please check your authentication.');
      }
    };

    fetchRechargeHistory();
  }, []);

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
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30, paddingBottom: 30 }}>
          Recharge History
        </Typography>

        {error && <Typography variant="body1" color="error">{error}</Typography>}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Recharge ID</TableCell>
                <TableCell>Customer ID</TableCell>
                <TableCell>Plan Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Plan ID</TableCell>
                <TableCell>Addon ID</TableCell>
                <TableCell>Mobile Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rechargeHistory.map((historyItem) => (
                <TableRow key={historyItem.rechargeId}>
                  <TableCell>{historyItem.rechargeId}</TableCell>
                  <TableCell>{historyItem.customerId}</TableCell>
                  <TableCell>{historyItem.planPrice}</TableCell>
                  <TableCell>{historyItem.status}</TableCell>
                  <TableCell>{historyItem.date}</TableCell>
                  <TableCell>{historyItem.planId}</TableCell>
                  <TableCell>{historyItem.addonId}</TableCell>
                  <TableCell>{historyItem.mobilenumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Link to="/AdminHomePage">
          <Button variant="outlined" color="primary" style={{ marginTop: 30 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Rechargehis;
