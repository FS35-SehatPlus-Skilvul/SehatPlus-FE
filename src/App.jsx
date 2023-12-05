import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccesfully from "./pages/ResetSuccesfully";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import PilihJadwalDokter from "./pages/PilihJadwalDokter";
import KonfirmasiJanjiTemu from "./pages/KonfirmasiJanjiTemu";
import BookingSuccesfull from "./pages/BookingSuccesfull";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="forget-password" element={<ForgetPassword />}/>
      <Route path="reset-password" element={<ResetPassword />}/>
      <Route path="reset-succesfully" element={<ResetSuccesfully />}/>
      <Route path="/pilih-jadwal-dokter" element={<PilihJadwalDokter />}/>
      <Route path="/konfirmasi-janji-temu" element={<KonfirmasiJanjiTemu />}/>
      <Route path="/booking-succesfull" element={<BookingSuccesfull />}/>
    </Routes>
    </>
  );
}

export default App;
