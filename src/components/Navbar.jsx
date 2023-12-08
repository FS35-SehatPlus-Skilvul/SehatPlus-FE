import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.svg';

function Navbar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout();
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
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img
                  src={user.image}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span>{user.username}</span>
                <button
                  className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                {/* Tampilkan Login/Register hanya jika belum login */}
                <Link
                  to="/login"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                >
                  Login/Register
                </Link>
              </>
            )}
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1`} >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:border-0 md:mt-0 md:space-x-8 md:flex-row lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg: dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={isAuthenticated ? (user.role === 'admin' ? '/admin-home' : '/') : '/'}
                  className={`font-bold ${location.pathname === (isAuthenticated && user.role === 'admin' ? '/admin-home' : '/')
                    ? "text-blue-700"
                    : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                    }`}
                >
                  Home
                </Link>
              </li>

              {isAuthenticated && user.role === 'dokter' && (
                <li>
                  <Link
                    to="/ruang-chat"
                    className={`font-bold ${location.pathname === "/dokter"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                      }`}
                  >
                    RuangChat
                  </Link>
                </li>
              )}
              {isAuthenticated && user.role === 'pasien' && (
                <li>
                  <Link
                    to="/spesialisasi"
                    className={`font-bold ${location.pathname === "/konsultasi"
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                      }`}
                  >
                    Konsultasi
                  </Link>
                </li>
              )}
              {isAuthenticated && user.role === 'admin' && (
                // Tampilkan link yang sesuai untuk admin
                <>
                  <li>
                    <Link
                      to="/dokter"
                      className={`font-bold ${location.pathname === "/dokter"
                        ? "text-blue-700"
                        : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                        }`}
                    >
                      Dokter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pasien"
                      className={`font-bold ${location.pathname === "/pasien"
                        ? "text-blue-700"
                        : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                        }`}
                    >
                      Pasien
                    </Link>
                  </li>
                </>
              )}
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
