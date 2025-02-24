import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Login from '../Login/Login';

export default function Navbar() {
  const [state, setState] = React.useState({
    left: true, // Set to `true` to show the sidebar on page load
  });

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  const toggleDrawer = (open) => {
    setState({ ...state, left: open });
  };

  const handleLoginLogout = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    setShowLogin(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setState({ ...state, left: false })} // Hide sidebar when clicking on items
    >
      <List>
        {['Home', 'About us', 'Contact us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> :
                 index === 1 ? <InfoIcon /> : <CallIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {isLoggedIn ? (
          ['Dashboard', 'Transporter', 'Vehicle', 'Employee', 'Client', 'Order Booking', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <DashboardIcon /> :
                   index === 1 ? <EmojiTransportationIcon /> :
                   index === 2 ? <AirportShuttleIcon /> :
                   index === 3 ? <BadgeIcon /> :
                   index === 4 ? <AssignmentIndIcon /> :
                   index === 5 ? <StickyNote2Icon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => setShowLogin(true)}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Button to open the sidebar */}
      <Button onClick={() => toggleDrawer(true)} style={{color:'grey'}}><MenuIcon /></Button>
      <Drawer
  anchor="left"
  open={state.left}
  onClose={() => toggleDrawer(false)} // Close the sidebar when clicked outside
  PaperProps={{
    sx: {
      boxShadow: 'none', // Remove shadow
    },
  }}
  BackdropProps={{
    sx: {
      backgroundColor: 'transparent', // Set the backdrop to be transparent
    },
  }}
>
  {list()}
</Drawer>




      {/* Conditionally render Login component if needed */}
      {showLogin && <Login onLogin={handleLoginLogout} />}
    </div>
  );
}
