import React from 'react'
import {Link} from "react-router-dom"
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import { Logout } from './Logout';
export const Navbar = () => {
    const button={marginRight:'20px', fontSize:'1.2rem', fontWeight:'700', padding:'0.3rem 1.4rem'}
  return (
    <>
       <AppBar>
        <Toolbar>
            <Typography variant="h4" sx={{flexGrow:1}}>CANTEEN MANAGEMENT SYSTEM</Typography>
            <Button style={button} color="error" variant="contained" to="/login" component={Link}>Login</Button>
            <Button style={button} color="success" variant="contained" to="/signup" component={Link}>Signup</Button>
            <Logout/>
        </Toolbar>
       </AppBar>
    </>
  )
}
