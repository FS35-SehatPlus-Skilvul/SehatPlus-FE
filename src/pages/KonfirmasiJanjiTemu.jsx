import React from "react";
import { Link } from "react-router-dom";

function KonfirmasiJanjiTemu() {
  return (
    <div className="flex flex-col items-center justify-center h-[92vh] gap-4">
      <div className="flex flex-col items-center justify-center sm:gap-2 xl:gap-4">
        <h1 className="text-center text-slate-500 text-md lg:text-2xl xl:text-3xl font-bold">
          Konfirmasi Jadwal Booking
        </h1>
        <p className="h-[54px] text-center text-gray-500 text-sm lg:text-lg md:text-md xl:text-xl font-normal leading-[30px]">
          Pastikan jadwal yang dipilih sesuai dengan pilihan Anda
        </p>
      </div>
      <div
        className="flex flex-col justify-center  w-[70vw] h-[70vh] md:w-[60vw] md:h-[60vh] lg:w-[50vw] lg:h-[50vh] xl:w-[
        40vw] xl:h-[50vh] bg-blue-100 rounded-xl px-5"
      >
        <div className="text-gray-700 text-sm md:text-md lg:text-xl xl:text-2xl font-bold">
          Jadwal Anda :
        </div>
        <div className="text-zinc-700 text-sm md:text-[14px] lg:text-lg xl:text-xl font-normal mb-8">
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Tanggal
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200     px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={"04 Desember 2023"}
            disabled
          />
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Jam
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={"09.00 WITA"}
            disabled
          />
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Nama Dokter
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={"dr. Syahid Mulkan, Sp.OG"}
            disabled
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2">
          <button className="w-full py-3 md:w-full lg:w-full xl:w-full bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white">
          <Link to="/booking-succesfull">Konfirmasi</Link>
          </button>
          <button className="w-full py-3 md:w-full lg:w-full xl:w-full border-violet-950 text-violet-950 border-[1px] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base hover:bg-red-500 hover:text-white transition duration-500 hover:border-white">
            <Link to="/pilih-jadwal-dokter">Batal</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default KonfirmasiJanjiTemu;
