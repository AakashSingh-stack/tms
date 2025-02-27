import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom"; // Import Link for navigation
import Login from "../Login/Login"; // Assuming Login component exists

export default function Navbar() {
  const [state, setState] = React.useState({ left: false });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  const toggleDrawer = (open) => {
    setState({ left: open });
  };

  const handleLoginLogout = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    setShowLogin(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setState({ left: false })}
    >
      <List>
        {["Home", "About us", "Contact us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={index === 0 ? "/" : index === 1 ? "/about" : "/contact"}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <InfoIcon />
                ) : (
                  <CallIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {isLoggedIn ? (
          [
            "Dashboard",
            "Transporter",
            "Vehicle",
            "Employee",
            "Client",
            "Order Booking",
            "Logout",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              {text === "Logout" ? (
                <ListItemButton onClick={() => handleLoginLogout(false)}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={Link}
                  to={`/${text.toLowerCase().replace(" ", "-")}`}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <DashboardIcon />
                    ) : index === 1 ? (
                      <EmojiTransportationIcon />
                    ) : index === 2 ? (
                      <AirportShuttleIcon />
                    ) : index === 3 ? (
                      <BadgeIcon />
                    ) : index === 4 ? (
                      <AssignmentIndIcon />
                    ) : index === 5 ? (
                      <StickyNote2Icon />
                    ) : (
                      <LogoutIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              )}
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
      <Button onClick={() => toggleDrawer(true)} style={{ color: "grey" }}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ sx: { boxShadow: "none" } }}
        BackdropProps={{ sx: { backgroundColor: "transparent" } }}
      >
        {list()}
      </Drawer>

      {showLogin && <Login onLogin={handleLoginLogout} />}
    </div>
  );
}
