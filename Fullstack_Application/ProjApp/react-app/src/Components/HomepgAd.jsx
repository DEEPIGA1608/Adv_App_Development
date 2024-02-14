// import React from 'react'
import "./HomepgAd.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button,Select,MenuItem } from '@mui/material';

const HomepgAd = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
    <div>
        

    <div className="site-contentn" id="homeusbag">
  <br></br><br></br>
  <div className="rown">
    <div className="col-sm-4">
      <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSc1Io0gTHDYAz1BzGbFgrSAXpnDedKtYjalH_GS3yR8lz89kYb" alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2 className='hn'>Prepaid</h2>
        <p className='np'> Prepaid services operate on a pay-before-you-use model. Users need to add funds or credits to their accounts in advance, and these funds are then deducted as they use the service. This system offers flexibility and control over expenses, as users can manage their usage based on the available balance. Prepaid services are commonly used in telecommunications, travel, and various online platforms.Prepaid services offer several advantages.
         Firstly, they provide users with better control over their expenses, as they can only use the amount that has been preloaded. Additionally, prepaid services are often more accessible, allowing individuals without a traditional credit history to participate. Moreover, prepaid arrangements can help prevent overspending and surprise bills, making them a popular choice for budget-conscious consumers.
    </p></div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Postpaid</h2>
        <p className='np'>
          Postpaid services operate on a pay-after-you-use model. Users are billed for their usage at the end of a billing cycle, typically on a monthly basis. With postpaid plans, customers can use services first and pay for them later. This model is often associated with subscription-based services, such as mobile plans, internet services, and utility bills. Users may receive a detailed invoice showing the charges for the services used during the billing period.
        Postpaid services come with several advantages. Firstly, users enjoy the convenience of using services without the need to prepay, and they only pay for what they have consumed at the end of the billing cycle. Postpaid plans often offer more flexibility in terms of usage and can be suitable for individuals with varying monthly needs. Additionally, postpaid plans may come with additional perks, such as discounts, loyalty rewards, and premium services.
  </p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTIKM3RplM1JMU7Rq_lTuciOi5qOwX6enufC1DtaOP8HfCv74" alt="" className="img-circle"/>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-4">
       <img src="https://img.freepik.com/free-vector/mobile-phones-5g-network-abstract-concept-illustration_335657-3884.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=ais" alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2  className='hn'>Add-On Data</h2>
        <p className='np'>Add-On Data services allow users to supplement their existing data plans with additional data allowances. Users can purchase these add-ons when they need extra data beyond their regular plan limits. This is a convenient option for individuals who may temporarily require more data for specific activities, such as streaming videos or downloading large files. Add-On Data is typically available at a fixed price and is valid for a specific duration or until the user exhausts the additional data quota.
    .</p>
        </div>
    </div>
  </div>
   
      
  </div>
  
</div>



 


    
 




</>
  )
}

export default HomepgAd