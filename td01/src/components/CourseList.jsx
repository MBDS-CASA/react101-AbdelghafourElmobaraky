import React from 'react';
import studentData from '../assets/data.json';

import { 
    Box, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    Paper, 
    Divider 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; 

const CourseList = () => {
    const uniqueCourses = [...new Set(studentData.map(item => item.course))];

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Roboto Condensed', fontWeight: 'bold', color: '#2c3e50' }}>
                Liste des Cours
            </Typography>

            <Paper elevation={2} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <List>
                    {uniqueCourses.map((course, index) => (
                        <React.Fragment key={index}>
                            <ListItem sx={{ 
                                '&:hover': { backgroundColor: '#f5f5f5' }, 
                                transition: 'background-color 0.3s' 
                            }}>
                                <ListItemIcon>
                                    <SchoolIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={course} 
                                    primaryTypographyProps={{ 
                                        fontWeight: 'medium', 
                                        fontFamily: 'Quicksand' 
                                    }} 
                                />
                            </ListItem>
                            {index < uniqueCourses.length - 1 && <Divider variant="inset" component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default CourseList;