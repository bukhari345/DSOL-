import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const apiUrl = 'http://localhost:3019/api/login';

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiUrl, {
        username: username,
        password: password
      });

      if (response && response.data) {
        console.log('Login successful:', response.data);
        alert('Login successful');
        navigate('/carform');
      } else {
        console.error('Login error: Unable to get response data');
        setError('Unable to process login. Please try again later.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Login error:', error.response.data);
        setError(error.response.data.message);
      } else {
        console.error('Login error:', error);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        {error && <Typography variant="body1" color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
