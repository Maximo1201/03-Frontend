import React, { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Tabs, Tab, Box, Typography, Button } from '@mui/material';

const HistorialDeTurnos = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <DashboardLayout>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Mis Turnos
        </Typography>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="Agendar Turno" />
          <Tab label="Ver Historial" />
        </Tabs>
        {tabValue === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography>No users for this project yet</Typography>
            {/* Aquí puedes agregar el formulario de Agendar Turno */}
            <Button variant="contained" color="primary">
              Agendar Turno
            </Button>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography>No users for this project yet</Typography>
            {/* Aquí puedes agregar el contenido del Historial */}
          </Box>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default HistorialDeTurnos;
