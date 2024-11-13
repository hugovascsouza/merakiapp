// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../pages/HomeLayout';
import MovementPage from '../pages/MovementPage';
import DietPage from '../pages/DietPage';
import QuietPage from '../pages/QuietPage';
import HappinessPage from '../pages/HappinessPage';

const AppRoutes = () => (
  <Routes>
    {/* Home Route */}
    <Route path="/" element={<HomeLayout />} />

    {/* Category Routes */}
    <Route path="/movement" element={<MovementPage />} />
    <Route path="/diet" element={<DietPage />} />
    <Route path="/quiet" element={<QuietPage />} />
    <Route path="/happiness" element={<HappinessPage />} />

  </Routes>
);

export default AppRoutes;
