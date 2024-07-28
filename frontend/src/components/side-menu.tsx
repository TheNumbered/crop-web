import { Camera, Forum, Home, School, ShoppingBasket } from '@mui/icons-material';
import { AppBar, BottomNavigation, BottomNavigationAction, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: <Home sx={{ fontSize: { xs: 24, md: 40 } }} />, text: 'Home', route: '/' },
  { icon: <School sx={{ fontSize: { xs: 24, md: 40 } }} />, text: 'Courses', route: '/courses' },
  { icon: <ShoppingBasket sx={{ fontSize: { xs: 24, md: 40 } }} />, text: 'Market', route: '/market' },
  { icon: <Camera sx={{ fontSize: { xs: 24, md: 40 } }} />, text: 'Crop Ai', route: '/crop-ai' },
  { icon: <Forum sx={{ fontSize: { xs: 24, md: 40 } }} />, text: 'Forum', route: '/forum' },
];

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      {!isMobile ? (
        <Drawer variant={"permanent"}>
          <Toolbar/>
          <List sx={{ pt: 2, pb: 2 }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem button sx={{ flexDirection: 'column', alignItems: 'center' }} onClick={() => handleNavigation(item.route)}>
                  <ListItemIcon sx={{ minWidth: 'auto', mb: 1 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">{item.text}</Typography>} />
                </ListItem>
                {index === 0 && <Divider sx={{ my: 2 }} />}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      ) : (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
          <BottomNavigation showLabels>
            {menuItems.map((item, index) => (
              <BottomNavigationAction
                key={index}
                label={<Typography variant="caption">{item.text}</Typography>}
                icon={item.icon}
                onClick={() => handleNavigation(item.route)}
              />
            ))}
          </BottomNavigation>
        </AppBar>
      )}
    </>
  );
};

export default SideMenu;
