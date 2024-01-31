// Profile.js
import './Profile.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const Adminprof = () => {
  
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#8080ff',marginTop: -10,marginLeft:-10,width:1265 }} >
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
      <div className="proco">
        <center>
          <div className="he">PROFILE</div>
        </center>
        <center>
          <div className="profile-box">
            <img src="https://placekitten.com/150/150" alt="Profile Avatar" className="avatar" />
            <h2 className="proname">John Doe</h2>
            <div className="detail-item">
              <span className="label">Email:</span> john.doe@example.com
            </div>
            <div className="detail-item">
              <span className="label">Phone:</span> +1234567890
            </div>
            <p className="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        </center>
      </div>
    </>
  );
};

export default Adminprof;
