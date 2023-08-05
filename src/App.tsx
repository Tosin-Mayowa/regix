import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react'
import Home from './pages/home';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';
import {Login} from './pages/login'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
