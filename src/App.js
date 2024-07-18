import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import the context provider
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard';
import Templates from './pages/Templates';

function App() {
  fetch (()){}
  return (
  
      <div>
      
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup-page" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login-page" element={<Login />} />
            <Route path="/back-to-login-page" element={<Login />} />
            <Route path="/dashboard" element={<Chart />} />
            <Route path="/create" element={<Dashboard />} />
            <Route path="/editor" element={<Chart/>} />
            <Route path="/template" element={<Templates />} />

          </Routes>
        
      </div>

  );
}

export default App;
