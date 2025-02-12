import React, { useState } from "react";
import Grid2 from "@mui/material/Grid2";
import "./style.scss";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="header">
      <Grid2 container className="header-container">
        {/* Mobile Menu Icon */}
        <Grid2 size={{xs:12}} className="menu-icon">
          <IconButton onClick={handleDrawerToggle} className="menu-button">
            <MenuIcon />
          </IconButton>
        </Grid2>
        {/* Navigation Section */}
        <Grid2 size={{xs:12}} className="nav-container">
          <nav>
            <ul>
              <li><a href="/" className="nav-link">HOME</a></li>
              <li><a href="/menu" className="nav-link active">MENU</a></li>
              <li><a href="/reservation" className="nav-link">MAKE A RESERVATION</a></li>
              <li><a href="/contact" className="nav-link">CONTACT US</a></li>
            </ul>
          </nav>
        </Grid2>

         {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <nav className="mobile-nav">
          <ul>
            <li><a href="/" onClick={handleDrawerToggle}>HOME</a></li>
            <li><a href="/menu" onClick={handleDrawerToggle}>MENU</a></li>
            <li><a href="/reservation" onClick={handleDrawerToggle}>MAKE A RESERVATION</a></li>
            <li><a href="/contact" onClick={handleDrawerToggle}>CONTACT US</a></li>
          </ul>
        </nav>
      </Drawer>
      </Grid2>
    </header>
  );
};

export default Header;
