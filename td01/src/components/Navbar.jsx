import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
    const navLinkStyle = {
        color: 'var(--text-secondary)', 
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: '0.95rem',
        mx: 1, 
        '&:hover': {
            color: 'var(--text-accent)', 
            backgroundColor: 'transparent' 
        }
    };

    return (
        <AppBar 
            position="sticky" 
            sx={{ 
                backgroundColor: 'var(--bg-panel)', 
                color: 'var(--text-primary)',       
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
                borderBottom: '1px solid var(--border-color)'
            }}
        >
            <Toolbar>
                {/* Titre / Logo */}
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1, 
                        fontFamily: 'Roboto Condensed', 
                        fontWeight: 'bold',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    Gestion Étudiants
                </Typography>
                
                {/* Liens de Navigation */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button component={Link} to="/" sx={navLinkStyle}>
                        Home
                    </Button>
                    <Button component={Link} to="/courses" sx={navLinkStyle}>
                        Cours
                    </Button>
                    <Button component={Link} to="/students" sx={navLinkStyle}>
                        Étudiants
                    </Button>
                    <Button component={Link} to="/grades" sx={navLinkStyle}>
                        Notes
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;