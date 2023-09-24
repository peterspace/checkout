import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//================={Intermediate}==========================================
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import YandexPay from './components/YandexPay';

//==============={AIR}======================================================
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="app">
    <div className="relative bg-white w-full h-screen overflow-auto text-left text-sm text-gray-700">
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* ==================={USERS ONLY}======================== */}
        <Route path="/" element={<YandexPay />}>
          {/* Show to all */}

          <Route index element={<YandexPay />} />
          <Route path="/yandexPay" element={<YandexPay />} />
        </Route>
        {/* ==================={AGENTS ONLY}======================== */}
      </Routes>
    </BrowserRouter>
    </div>
    </div>

  );
}

export default App;
