import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccesfully from "./pages/ResetSuccesfully";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage"
import Article from "./pages/ArticleLanding";
import BMI from "./pages/KalkulatorBMI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artikel" element={<Article />} />
          <Route path="/kalkulator-bmi" element={<BMI />} />
        </Route>
        {/* HANDLE ROUTE LOGIN & REGISTER */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="reset-succesfully" element={<ResetSuccesfully />} />
      </Routes>

    </>
  );
}

export default App;
