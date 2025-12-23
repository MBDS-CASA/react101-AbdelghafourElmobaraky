import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
    // Style commun pour les boutons afin d'éviter la répétition
    const navLinkStyle = {
        color: 'var(--text-secondary)', // Gris défini dans votre CSS
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: '0.95rem',
        mx: 1, // Marge horizontale
        '&:hover': {
            color: 'var(--text-accent)', // Bleu défini dans votre CSS
            backgroundColor: 'transparent' // Évite le fond gris moche par défaut de MUI
        }
    };

    return (
        <AppBar 
            position="sticky" 
            sx={{ 
                backgroundColor: 'var(--bg-panel)', // Utilise le BLANC de votre CSS
                color: 'var(--text-primary)',       // Utilise le GRIS FONCÉ de votre CSS
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Ombre légère identique au CSS
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