"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
const VehicleForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    carModel: '',
    price: '',
    phoneNumber: '',
    city: '',
    maxPictures: '',
    pictures: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3019/vehicles/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Optionally, reset form fields after successful submission
      setFormData({
        carModel: '',
        price: '',
        phoneNumber: '',
        city: '',
        maxPictures: '',
        pictures: []
      });

      alert('Form submitted successfully!');
      navigate('/thanks');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <Container maxWidth="sm">
    <Typography variant="h4" gutterBottom>
      Vehicle Information Form
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Car Model (min. 3 letters)"
        name="carModel"
        value={formData.carModel}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        inputProps={{ minLength: 3 }}
      />

      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        type="number"
      />

      <TextField
        label="Phone Number (exactly 11 digits)"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        inputProps={{ pattern: "[0-9]{11}" }}
      />

      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        label="Max Pictures (1-10)"
        name="maxPictures"
        value={formData.maxPictures}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        type="number"
        inputProps={{ min: 1, max: 10 }}
      />

      <input
        type="file"
        name="pictures"
        onChange={handleChange}
        multiple
        style={{ display: 'none' }} // Hide the file input for now
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  </Container>
  );
};

export default VehicleForm;
