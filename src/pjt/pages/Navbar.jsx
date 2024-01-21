// import { Tab, TabsContext } from "@mui/base";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import React from "react";
import { Box } from "@mui/system";
import { CssBaseline, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ color: "black", backgroundColor: "white" }} component='nav'>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        <Typography>Home</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
