import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const hours = Array.from({ length: 12 }, (_, index) => index + 1); // Array dari 1 hingga 12

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[92vh] gap-4">
      <div className="flex flex-col items-center justify-center sm:gap-2 xl:gap-4">
        <h1 className="text-center text-slate-500 text-md lg:text-2xl xl:text-3xl font-bold mb-4">
          Pilih Jadwal Booking
        </h1>
      </div>
      <div className="flex flex-col justify-center  w-[70vw] h-[70vh] md:w-[60vw] md:h-[60vh] lg:w-[60vw] lg:h-[50vh] xl:w-[40vw] xl:h-[50vh] bg-blue-100 rounded-xl px-5">
        <div className="text-zinc-700 text-sm md:text-[14px] lg:text-lg xl:text-xl font-normal mb-8">
          <div className="flex flex-col justify-center mb-2 w-full h-[60px] lg:h-[80px] xl:h-[120px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg">
            <p>dr. Syahid Mulkan, Sp.OG</p>
            <p>Spesialis Kandungan</p>
          </div>
          <label
            name="tanggal"
            className="flex items-center text-sm md:text-md lg:text-lg mb-1"
          >
            Tanggal
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal"
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
          />
          <div>
            <label
              htmlFor="timePicker"
              className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
            >
              Jam
            </label>
          </div>
          <div className="flex gap-2">
            <select
              id="timePicker"
              value={selectedHour}
              onChange={handleHourChange}
              className="w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            >
              <option value="" disabled hidden>
                Pilih jam
              </option>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ))}
            </select>
            <select
              value={selectedPeriod}
              onChange={handlePeriodChange}
              className="w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2">
          <button className="w-full py-3 md:w-full lg:w-full xl:w-full bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white">
            <Link to="/konfirmasi-janji-temu">Selanjutnya</Link>
          </button>
          <button className="w-full py-3 md:w-full lg:w-full xl:w-full border-violet-950 text-violet-950 border-[1px] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base hover:bg-red-500 hover:text-white transition duration-500 hover:border-white">
            <Link to="#">Batal</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
