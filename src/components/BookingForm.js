import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gestsNumber, setGestsNumber] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, setAvailableTimes] = useState([
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);

  return (
    <div className="form-section">
      <div className="container">
        <div className="booking-form">
          <h1>Book Now</h1>
          <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={(e) => setGestsNumber(e.target.value)}
            ></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
