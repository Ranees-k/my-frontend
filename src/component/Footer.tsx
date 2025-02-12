import Grid2 from "@mui/material/Grid2"; // Import Grid2 from Material UI
import { Box, Typography } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import logo from "../assets/Logo.svg"; 
import React from "react";
import './style.scss'

const Footer = () => {
  return (
    <Box className="footer">

      <Grid2 container spacing={3} justifyContent="center" className="footer-content">
        {/* Contact Information */}
        <Grid2 size={{xs:12,md:4}}     sx={{ order: { xs: 1, md: 1 } }} className="footer-section">
          <Typography variant="h6" className="footer-title">CONNECT WITH US</Typography>
          <Typography className="footer-text">
            <Phone className="footer-icon" /> +91 9567843340
          </Typography>
          <Typography className="footer-text">
            <Email className="footer-icon" />
             info@deepnetsoft.com
          </Typography>
        </Grid2>
        
        {/*company section*/}
        <Grid2 size={{xs:12,md:4}}     sx={{ order: { xs: 0, md: 2 } }} className="footer-section" >
        <img src={logo} alt="Deep Net Soft" className="footer-logo"  />
<Typography variant="h5" className="footer-brand">
  <span className="blue">DEEP</span>
  <span className="white"> NET</span>
  <span className="gray"> SOFT</span>
</Typography>
        </Grid2>

        {/* Address Section */}
        <Grid2 size={{xs:12,md:4}} sx={{ order: { xs: 2, md: 3 } }} className="footer-section">
          <Typography variant="h6" className="footer-title">FIND US</Typography>
          <Typography className="footer-text">
            <LocationOn className="footer-icon" />
             First floor, Geo Infopark,
          </Typography>
          <Typography className="footer-text">
          Infopark EXPY, Kakkanad
          </Typography>          
        </Grid2>
      </Grid2>

      <Box className="footer-bottom">
        <Typography className="footer-copy">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </Typography>
        <Box className="footer-links">
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
