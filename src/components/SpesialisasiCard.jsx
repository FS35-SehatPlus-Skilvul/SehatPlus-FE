import React from "react";
import { Link } from "react-router-dom";

const SpesialisasiCard = ({ specialization, imageSrc }) => {
  return (
    <Link to={'/daftar-dokter'}>
      <div
        onClick="#"
        className="max-w-md w-[18vw] mx-auto bg-blue-100 rounded-xl overflow-hidden shadow-md mb-10"
      >
        <img className="object-full w-full h-48" src={imageSrc} alt={name} />
        <div className="p-6">
          <p className="text-gray-700 font-bold text-base">{specialization}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpesialisasiCard;
