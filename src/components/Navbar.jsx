import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#DAE0F9] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10 rounded-full" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#080C71]">
              SehatPlus
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="login"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
              Login/Register
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              {isMenuOpen ? (
                <>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block menu-fade-in" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:border-0 md:mt-0 md:space-x-8 md:flex-row lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg: dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`font-bold ${location.pathname === "/"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/konsultasi"
                  className={`font-bold ${location.pathname === "/konsultasi"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                    }`}
                >
                  Konsultasi
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className={`font-bold ${location.pathname === "/artikel"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                    }`}
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/kalkulator-bmi"
                  className={`font-bold ${location.pathname === "/kalkulator-bmi"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                    }`}
                >
                  Kalkulator BMI
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;