import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gestsNumber, setGestsNumber] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [dateInvalid, setDateInvalid] = useState(false);
  const [gestsNumberInvalid, setGestsNumberInvalid] = useState(false);

  const [submited, setSubmited] = useState(false);

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

  useEffect(() => {
    if (
      submited &&
      !nameInvalid &&
      !phoneInvalid &&
      !emailInvalid &&
      !dateInvalid &&
      !gestsNumberInvalid
    ) {
      navigate("/confirmed");
    }
  }, [submited]);

  const handleNameInput = (event) => {
    setName(event.target.value);
    setNameInvalid(false);
    setSubmited(false);
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
    setPhoneInvalid(false);
    setSubmited(false);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    setEmailInvalid(false);
    setSubmited(false);
  };

  const handleDateInput = (event) => {
    setDate(event.target.value);
    setDateInvalid(false);
    setSubmited(false);
  };

  const handleTimeInput = (event) => {
    setTime(event.target.value);
    setSubmited(false);
  };

  const handleGestsNumberInput = (event) => {
    setGestsNumber(event.target.value);
    setGestsNumberInvalid(false);
    setSubmited(false);
  };

  const handleOccasionInput = (event) => {
    setOccasion(event.target.value);
    setSubmited(false);
  };

  const validateInputs = () => {
    !name.length > 0 && setNameInvalid(true);
    !phone.length > 0 && setPhoneInvalid(true);
    !email.length > 0 && setEmailInvalid(true);
    !date.length > 0 && setDateInvalid(true);
    gestsNumber < 1 && setGestsNumberInvalid(true);
    gestsNumber > 11 && setGestsNumberInvalid(true);
  };

  const submitForm = (event) => {
    event.preventDefault();

    validateInputs();
    setSubmited(true);
  };

  return (
    <div className="form-section">
      <div className="container">
        <div className="booking-form">
          <h4>Reserve a table</h4>
          <form
            style={{ display: "grid", maxWidth: "200px", gap: "12px" }}
            onSubmit={submitForm}
          >
            <label htmlFor="res-name" className="form-label">
              Name
            </label>
            <input type="text" id="res-name" onChange={handleNameInput}></input>
            {nameInvalid && (
              <span className="error-message">Name can't be blank.</span>
            )}

            <label htmlFor="res-phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              id="res-phone"
              onChange={handlePhoneInput}
              placeholder="(xxx) xxx-xxxx"
            ></input>
            {phoneInvalid && (
              <span className="error-message">Phone can't be blank.</span>
            )}
            <label htmlFor="res-email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="res-email"
              onChange={handleEmailInput}
            ></input>
            {emailInvalid && (
              <span className="error-message">Email can't be blank.</span>
            )}
            <label htmlFor="res-date" className="form-label">
              Choose date
            </label>
            <input type="date" id="res-date" onChange={handleDateInput}></input>
            {dateInvalid && (
              <span className="error-message">Please select a valid date.</span>
            )}
            <label htmlFor="res-time" className="form-label">
              Choose time
            </label>
            <select id="res-time " onChange={handleTimeInput}>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <label htmlFor="guests" className="form-label">
              Number of guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={handleGestsNumberInput}
            ></input>
            {gestsNumberInvalid && (
              <span className="error-message">
                Number or gest should be between 1 to 10.
              </span>
            )}
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select id="occasion" onChange={handleOccasionInput}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input
              className="btn-main"
              type="submit"
              value="Make Your reservation"
              disabled={false}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
