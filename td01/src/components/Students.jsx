import React from 'react';
import studentData from '../assets/data.json';

// Imports des composants Material UI
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Typography, 
    Box, 
    Avatar 
} from '@mui/material';

const Students = () => {
    
    // Logique de filtrage (inchangée, elle est parfaite)
    const uniqueStudents = [];
    const seenIds = new Set();

    studentData.forEach((item) => {
        if (!seenIds.has(item.student.id)) {
            seenIds.add(item.student.id);
            uniqueStudents.push(item.student);
        }
    });

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    fontFamily: 'Roboto Condensed', 
                    fontWeight: 'bold', 
                    color: 'var(--text-primary)', // Utilise votre variable CSS
                    mb: 3 
                }}
            >
                Annuaire des Étudiants
            </Typography>

            {/* TableContainer = Le cadre blanc avec ombre */}
            <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="student table">
                    
                    {/* En-tête du tableau */}
                    <TableHead sx={{ backgroundColor: '#f9fafb' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Profil</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Prénom</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>Nom</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Corps du tableau */}
                    <TableBody>
                        {uniqueStudents.map((student) => (
                            <TableRow
                                key={student.id}
                                sx={{ 
                                    '&:hover': { backgroundColor: '#f4f6f8' }, // Effet au survol
                                    cursor: 'default'
                                }}
                            >
                                {/* Colonne ID */}
                                <TableCell component="th" scope="row" sx={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                                    #{student.id}
                                </TableCell>

                                {/* Colonne Avatar (Initiales) */}
                                <TableCell>
                                    <Avatar 
                                        sx={{ 
                                            bgcolor: 'var(--text-accent)', // Bleu défini dans votre CSS
                                            width: 35, 
                                            height: 35,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {/* Affiche la 1ère lettre du Prénom et du Nom */}
                                        {student.firstname[0]}{student.lastname[0]}
                                    </Avatar>
                                </TableCell>

                                {/* Données Texte */}
                                <TableCell sx={{ fontWeight: 500 }}>{student.firstname}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{student.lastname}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Students;