import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react'
import Home from './pages/home';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';
import {Login} from './pages/login'
import DevDashboard from './pages/dev'
import Verify from "./pages/otp";
import UserHome from './pages/user'
import Overview from '../src/Components/Overview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />{" "}
      <Route path="users/:companyName" element={<UserHome />}>
        <Route path="dashboard" element={<Overview />} />
      </Route>
      <Route path="/developer" element={<DevDashboard />} />
    </Routes>
  );
}

export default App;
