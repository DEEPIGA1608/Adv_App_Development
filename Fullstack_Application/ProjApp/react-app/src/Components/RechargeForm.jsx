import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  Card,
  CardContent,AppBar, Toolbar
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RechargeForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const { planId } = useParams();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planData, setPlanData] = useState({
    planType: '',
    planName: '',
    planValidity: '',
    planDetails: '',
    planPrice: 0,
  });

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`http://localhost:8080/api/plans/${planId}`, { headers });
        setSelectedPlan(response.data);
        setPlanData(response.data);
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchPlanData();
  }, [planId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRecharge = async () => {
    try {
      const formData = {
        customerId,
        mobilenumber,
        planId,
        planPrice: selectedPlan?.planPrice || 0,
      };

      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post('http://localhost:8080/api/recharges', formData, { headers });

      console.log('Recharge successful:', response.data);
      window.alert("Recharge Successful");
    } catch (error) {
      console.error('Error during recharge:', error);
    }
  };

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
      <Card variant="outlined" sx={{ width: '400px', margin: '50px auto' }}>
        <CardContent>
          <Typography variant="h6">Plan Details</Typography>
          <form>
            <InputLabel htmlFor="planName">Plan Name:</InputLabel>
            <Typography paragraph>{selectedPlan?.planName}</Typography>

            <InputLabel htmlFor="planDetails">Plan Details:</InputLabel>
            <Typography paragraph>{selectedPlan?.planDetails}</Typography>

            <InputLabel htmlFor="planPrice">Plan Price:</InputLabel>
            <Typography variant="subtitle1" >
              ${selectedPlan?.planPrice}
            </Typography>

            <InputLabel htmlFor="planValidity">Plan Validity:</InputLabel>
            <Typography variant="subtitle1" >
              {selectedPlan?.addonValidity}
            </Typography>

            <InputLabel htmlFor="customerId">Customer ID:</InputLabel>
            <TextField
              type="text"
              id="customerId"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              fullWidth
              margin="normal"
            />

            <InputLabel htmlFor="mobileNumber">Mobile Number:</InputLabel>
            <TextField
              type="text"
              id="mobileNumber"
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
              fullWidth
              margin="normal"
            />

           

            <Button variant="contained" color="primary" onClick={handleRecharge} style={{ marginTop: 20 }}>
              Recharge Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
    </>
  );
};

export default RechargeForm;
