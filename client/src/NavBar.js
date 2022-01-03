import React from 'react'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {

    const Item = styled.div `
    font-size: 15pt;
    text-align: center;
    padding-top: 5%;
    `;

    return (
 
            <Grid container>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink activeStyle exact to="/">Home</NavLink></Item>
            </Grid>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink exact to="/newevent">New Event</NavLink></Item>
            </Grid>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink activeStyle exact to="/login">Login</NavLink></Item>
            </Grid>
            </Grid>
  
    )
}

export default NavBar
