import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// IMPORT CONTEXT
import AuthProvider from "./context/AuthContext";

// IMPORT COMPONENT
import Layout from "./components/Layout";

// IMPORT PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccesfully from "./pages/ResetSuccesfully";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import Article from "./pages/ArticleLanding";
import BMI from "./pages/KalkulatorBMI";
import PilihJadwalDokter from "./pages/PilihJadwalDokter";
import KonfirmasiJanjiTemu from "./pages/KonfirmasiJanjiTemu";
import BookingSuccessfully from "./pages/BookingSuccesfull";
import Spesialisasi from "./pages/Spesialisasi";
import DaftarDokter from "./pages/DaftarDokter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artikel" element={<Article />} />
          <Route path="/kalkulator-bmi" element={<BMI />} />
          <Route path="/pilih-jadwal-dokter" element={<PilihJadwalDokter />} />
          <Route path="/konfirmasi-janji-temu" element={<KonfirmasiJanjiTemu />} />
          <Route path="/booking-succesfull" element={<BookingSuccessfully />} />
          <Route path="/spesialisasi" element={<Spesialisasi />} />
          <Route path="/daftar-dokter" element={<DaftarDokter />} />
          
        </Route>
        {/* HANDLE ROUTE LOGIN & REGISTER */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="reset-succesfully" element={<ResetSuccesfully />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
