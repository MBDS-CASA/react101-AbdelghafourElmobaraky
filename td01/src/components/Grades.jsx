import React from 'react';
import studentData from '../assets/data.json';

import { 
    Box, 
    Typography, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Chip // Composant pour créer les badges de notes
} from '@mui/material';

const Grades = () => {

    // Petite fonction pour déterminer la couleur du badge selon la note
    const getGradeColor = (grade) => {
        if (grade >= 90) return 'success';  
        if (grade >= 70) return 'primary';  
        if (grade >= 50) return 'warning';  
        return 'error';                     
    };

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    fontFamily: 'Roboto Condensed', 
                    fontWeight: 'bold', 
                    color: 'var(--text-primary)',
                    mb: 3 
                }}
            >
                Relevé de Notes
            </Typography>

            <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="grades table">
                    
                    {/* En-tête */}
                    <TableHead sx={{ backgroundColor: '#f9fafb' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Étudiant</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Cours</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Date</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Note</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Corps */}
                    <TableBody>
                        {studentData.map((item) => (
                            <TableRow
                                key={item.unique_id}
                                sx={{ 
                                    '&:hover': { backgroundColor: '#f4f6f8' },
                                    transition: 'background-color 0.2s' 
                                }}
                            >
                                {/* ID Technique */}
                                <TableCell sx={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                                    #{item.student.id}
                                </TableCell>

                                {/* Nom Complet */}
                                <TableCell sx={{ fontWeight: 500 }}>
                                    {item.student.firstname} {item.student.lastname}
                                </TableCell>

                                {/* Cours */}
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                        {item.course}
                                    </Typography>
                                </TableCell>

                                {/* Date */}
                                <TableCell sx={{ color: 'var(--text-secondary)' }}>
                                    {item.date}
                                </TableCell>

                                {/* Badge de Note (Chip) */}
                                <TableCell align="right">
                                    <Chip 
                                        label={item.grade} 
                                        color={getGradeColor(item.grade)} 
                                        variant={item.grade < 50 ? "outlined" : "filled"} 
                                        size="small"
                                        sx={{ fontWeight: 'bold', minWidth: '60px' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Grades;