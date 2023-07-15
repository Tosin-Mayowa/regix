import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react'
import Home from './pages/home';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
