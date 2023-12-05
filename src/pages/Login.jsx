import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../assets/Login-image.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = async () => {
    // Validasi input
    if (!username || !password) {
      setError("Username dan password tidak boleh kosong");
      return;
    }

    try {
      const response = await axios.get(
        "https://65632a51ee04015769a6dd6e.mockapi.io/user/users"
      );
      const users = response.data;

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Cek role
        const role = user.role;

        // Redirect sesuai dengan role
        if (role === "pasien") {
          navigate("/dashboard-pasien");
        } else if (role === "dokter") {
          navigate("/dashboard-dokter");
        } else if (role === "admin") {
          navigate("/dashboard-admin");
        }
      } else {
        setError("Username atau password salah. Coba lagi.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    <div className="flex">
      <div className="login h-screen w-[100vw] lg:w-[50vw] flex flex-col justify-center">
        <div className="text-center text-violet-950 text-[30px] lg:text-[40px] xl:text-[62px] font-extrabold mb-4">
          Login
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <a
            href="forget-password"
            className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
          >
            Forgot Password?
          </a>
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
            onClick={handleLoginClick}
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>
          )}
          <p className="text-[12px] lg:text-[16px] xl:text-base font-normal">
            Don't have account?{" "}
            <Link
              to="/register"
              className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="gambar flex items-center justify-center w-[50vw] h-screen bg-cyan-300 hidden lg:flex mx-auto">
        <img
          className="lg:w-[40vw] xl:w-[40vw] flex items-center justify-center bg-cyan-300 hidden lg:flex mx-auto"
          src={loginImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;