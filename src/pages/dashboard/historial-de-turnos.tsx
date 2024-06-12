import React, { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Tabs, Tab, Box, Typography, Button, Paper } from '@mui/material';

const HistorialDeTurnos = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <DashboardLayout>
      <Box sx={{ width: '100%', typography: 'body1', mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Mis Turnos
        </Typography>
        <Paper elevation={3} sx={{ width: '80%', mx: 'auto', p: 2, mt: 2 }}>
          <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab label="Agendar Turno" />
            <Tab label="Ver Historial" />
          </Tabs>
          {tabValue === 0 && (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography>No users for this project yet</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Agendar Turno
              </Button>
            </Box>
          )}
          {tabValue === 1 && (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography>No users for this project yet</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default HistorialDeTurnos;
