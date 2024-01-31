// import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Contact = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
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
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! If you have any questions, suggestions, or
          just want to say hello, feel free to reach out to us.
        </p>

        <p>
          You can contact us via email at{' '}
          <a href="mailto:contact@example.com">contact@example.com</a>.
        </p>

        <p>
          Alternatively, you can connect with us on social media. Follow us on
          Twitter, Facebook, and Instagram for the latest updates and news.
        </p>

        <p>
          Our office is located at 123 Main Street, Cityville, State, Zip Code.
          Feel free to drop by during our business hours.
        </p>

        <p>
          Thank you for considering us. We look forward to hearing from you soon!
        </p>
      </div>
    </>
  );
};

export default Contact;
