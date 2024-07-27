import { useMediaQuery } from '@mui/material';
import React from 'react';
import Header from './header';
import SideMenu from './side-menu';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //@ts-ignore
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
   <>
    <Header />
        <SideMenu />
        <main style={!isMobile?{marginLeft: "100px", marginTop:"50px"}:{marginTop:"50px"}}>{children}</main>
    </>
  );
};

export default MainLayout;
