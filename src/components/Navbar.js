import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#f0f0f0',
              letterSpacing: '0.15rem',
            }}
          >
            Career Connect
          </Typography>
          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#f0f0f0',
                fontWeight: '600',
                textTransform: 'none',
                marginRight: '20px',
                '&:hover': {
                  backgroundColor: 'rgba(240, 240, 240, 0.1)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/assessments"
              sx={{
                color: '#f0f0f0',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(240, 240, 240, 0.1)',
                },
              }}
            >
              Skill Tests
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
