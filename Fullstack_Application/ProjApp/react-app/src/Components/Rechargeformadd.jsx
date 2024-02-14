import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,AppBar, Toolbar
} from '@mui/material';
import axios from 'axios';

// AddonsForm component
const Rechargeformadd = () => {
  const { addonId } = useParams();
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [mobilenumber, setPhone] = useState('');
  const [customerId, setCustomerId] = useState('');

  // Fetch addon data on component mount
  useEffect(() => {
    const fetchAddonData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`http://localhost:8080/api/addons/${addonId}`, { headers });
        setSelectedAddon(response.data);
      } catch (error) {
        console.error('Error fetching addon data:', error);
      }
    };

    // Call the fetchAddonData function
    fetchAddonData();
  }, [addonId]);

  // Handle input changes
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  // Handle purchase button click
  const handlePurchase = async () => {
    try {
      // Prepare data for submission
      const formData = {
        customerId,
        mobilenumber,
        addonId,
        planPrice: selectedAddon?.addonPrice || 0,
      };

      // Make a POST request to the backend API for purchasing addon
      const token = localStorage.getItem('token');
      const headers = {
        Authorization:` Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post(`http://localhost:8080/api/recharges`, formData, { headers });

      console.log('Addon purchase successful:', response.data);
      window.alert("Addon Purchase SuccessFul");

      // Additional logic after successful purchase if needed

    } catch (error) {
      console.error('Error during addon purchase:', error);
    }
  };

  // Render the component
  return (
    <>
     <AppBar position="static" style={{ backgroundColor: '#8080ff', marginTop: -10, marginLeft: -10, width: 1265 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button>
            <Link to="/homepguser"> Home</Link>
          </Button>
          <Button>
            <Link to="/plans">Plans</Link>
          </Button>
          <Button>
            <Link to="/feedback">Feedback</Link>
          </Button>
          <Button>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button>
            <Link to="/profile">Profile</Link>
          </Button>
          <Button>
            <Link to="/">Logout</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
          Addon Purchase Form
        </Typography>

        {selectedAddon && (
          <Card variant="outlined" sx={{ marginBottom: 3 }}>
            <CardContent>
              {/* Render addon details */}
              <Typography variant="h6">{selectedAddon.addonName}</Typography>
              <Typography paragraph>{selectedAddon.addonDetails}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Price: ${selectedAddon.addonPrice}
              </Typography>

              {/* Render form */}
              <form>
                {/* Input for customer ID */}
                <TextField
                  label="Customer ID"
                  type="text"
                  value={customerId}
                  onChange={handleCustomerIdChange}
                  fullWidth
                  margin="normal"
                  color="success"
                  style={{ marginBottom: 20 }}
                />

                {/* Input for phone number */}
                <TextField
                  label="Phone Number"
                  type="text"
                  value={mobilenumber}
                  onChange={handlePhoneChange}
                  fullWidth
                  margin="normal"
                  color="success"
                  style={{ marginBottom: 20 }}
                />

                {/* Purchase button */}
                <Button variant="contained"  onClick={handlePurchase} style={{ marginTop: 20 }}>
                  Recharge
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Link to go back */}
        <Link to="/UserHomePage">
          <Button variant="outlined"  style={{ marginTop: 50 }}>
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Rechargeformadd;