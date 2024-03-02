"use client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./components/Loginform.jsx";
import CarForm from "./components/CarBooking.jsx";
import ThanksPage from './components/Thanks.jsx';
const Home = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/carform" element={<CarForm />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </Router>
  );
};

export default Home;
