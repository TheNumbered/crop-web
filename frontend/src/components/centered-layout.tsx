import { AppBar, Theme, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url("/clek.jpg")', // Ensure the image path is correct
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency as needed
          color: '#fff',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6">
            Crop Web
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Child components (like Sign Up form) will be rendered here */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 64px)' }}>
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
