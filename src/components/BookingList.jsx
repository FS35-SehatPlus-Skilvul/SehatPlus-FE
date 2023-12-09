// BookingList.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import BookingCard from "./BookingCard";

const BookingList = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(
          `https://65734dfd192318b7db41e6a4.mockapi.io/booking/`
        );
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchBookingData();
  }, []);

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookingData.map((booking, index) => (
        <BookingCard key={index} booking={booking} />
      ))}
    </div>
  );
};

export default BookingList;
