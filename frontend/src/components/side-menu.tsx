import { Camera, Forum, Home, School, ShoppingBasket } from '@mui/icons-material';
import { AppBar, BottomNavigation, BottomNavigationAction, Button, Divider, Drawer, List, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: <Home />, text: 'Home', route: '/' },
  { icon: <School />, text: 'Courses', route: '/courses' },
  { icon: <ShoppingBasket />, text: 'Market', route: '/market' },
  { icon: <Camera />, text: 'Ai', route: '/crop-ai' },
  { icon: <Forum />, text: 'Forum', route: '/forum' },
];

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      {!isMobile ? (
        <Drawer variant={"permanent"}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: "#FFFFFF60",
              border: 'none',
            },
          }}
        >
          <Toolbar />
          <List sx={{ pt: 2, pb: 2, overflow: "hidden", pl: 1 }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Button
                  onClick={() => handleNavigation(item.route)}
                  sx={{
                    width: '60%',
                    height: '17%', // Ensure buttons take the full width of the parent
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                    backgroundColor: "#335E33",
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Change hover background color
                    },
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: { xs: 24, md: 40 }, color: "white" } })}
                  <Typography variant={"caption"} sx={{ mt: 1, color: "white" }}>
                    {item.text}
                  </Typography>
                </Button>
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
                icon={React.cloneElement(item.icon, { sx: { fontSize: { xs: 24, md: 40 } } })}
                onClick={() => handleNavigation(item.route)}
                sx={{
                  paddingTop: 1,
                }}
              />
            ))}
          </BottomNavigation>
        </AppBar>
      )}
    </>
  );
};

export default SideMenu;
