import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccesfully from "./pages/ResetSuccesfully";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";

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
    </Routes>
    </>
  );
}

export default App;
