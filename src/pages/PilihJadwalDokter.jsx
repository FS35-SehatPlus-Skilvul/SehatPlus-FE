import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import axios from "axios";

const PilihJadwalDokter = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const { id } = useParams();
  const [dokterData, setDokterData] = useState({});
  const navigate = useNavigate();
  const [busyHours, setBusyHours] = useState([]);

  // Fungsi untuk menyimpan data ke local storage
  const saveToLocalStorage = () => {
    const selectedData = {
      dokter: dokterData,
      tanggal: selectedDate,
      jadwal: selectedHour,
    };

    // Simpan data ke local storage
    localStorage.setItem("selectedData", JSON.stringify(selectedData));
  };

  console.log(localStorage);

  const handleCancel = () => {
    console.log("Batal button clicked");
    navigate(-1);
  };

  useEffect(() => {
    const fetchDokterData = async () => {
      try {
        const response = await axios.get(
          `https://65734dfd192318b7db41e6a4.mockapi.io/dokter/${id}`
        );
        console.log(response.data);
        setDokterData(response.data);
  
        // Misalkan respons dari API mengandung properti busyHours yang berisi jam yang sudah terpakai
        if (response.data.busyHours) {
          setBusyHours(response.data.busyHours);
        }
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchDokterData();
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset jam saat tanggal berubah
    setSelectedHour("");
  };

  const generateTimeOptions = () => {
    const timeOptions = [];
  
    for (let hour = 9; hour <= 12; hour++) {
      const startTime = `${hour}.00`;
      const endTime = `${hour + 1}.00`;
      const timeRange = `${startTime}-${endTime}`;
  
      // Cek apakah jam sudah terpakai
      const isBusy = busyHours.includes(timeRange);
  
      timeOptions.push(
        <option key={timeRange} value={timeRange} disabled={isBusy}>
          {timeRange} {isBusy && "(Terpakai)"}
        </option>
      );
    }

    return timeOptions;
  };

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const minDate = new Date();

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
            <p>{dokterData.nama}</p>
            <p>Spesialis {dokterData.spesialisasi}</p>
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
            className="mb-2 w-full h-[50px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            minDate={minDate}
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
              className="w-full h-[40px] lg:h-[50px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            >
              <option value="" disabled hidden>
                Pilih jam
              </option>
              {generateTimeOptions()}
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2">
          <button
            onClick={saveToLocalStorage}
            className="w-full py-3 md:w-full lg:w-full xl:w-full bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
          >
            <Link to="/konfirmasi-janji-temu">Selanjutnya</Link>
          </button>
          <button
            onClick={handleCancel}
            className="w-full py-3 md:w-full lg:w-full xl:w-full border-violet-950 text-violet-950 border-[1px] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base hover:bg-red-500 hover:text-white transition duration-500 hover:border-white"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PilihJadwalDokter;
