import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <Grid container>
        <Grid item xs={3} md={3} s={3}>
        <div className='nav-bar-item' >
            <NavLink 
            activeStyle={{color: 'white'}}
            exact to="/">
                Home
            </NavLink></div>
        </Grid>
        <Grid item xs={3} md={3} s={3}>
        <div className='nav-bar-item' >
            <NavLink
            activeStyle={{color: 'white'}}
            exact to="/newevent">
                New Event
            </NavLink></div>
        </Grid>
        <Grid item xs={3} md={3} s={3}>
        <div className='nav-bar-item' >
            <NavLink 
            activeStyle={{color: 'white'}}
            exact to="/mynotes">
                My Notes
            </NavLink></div>
        </Grid>
        <Grid item xs={3} md={3} s={3}>
        <div className='nav-bar-item'>
            <NavLink
            activeStyle={{color: 'white'}}
            exact to="/login">
                Logout
            </NavLink></div>
        </Grid>
        </Grid>
    )
}

export default NavBar
