import React from 'react';
import { Typography, Container } from '@mui/material';

const ThanksPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="body1">
        Your response has been added successfully.
      </Typography>
    </Container>
  );
};

export default ThanksPage;
