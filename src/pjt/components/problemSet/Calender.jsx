import React, { useState } from "react";
import "./Calendar.css"; // Add styles for the calendar

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`day ${day === selectedDate.getDate() ? "selected" : ""}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (direction) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + direction,
      1
    );
    setSelectedDate(newDate);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => changeMonth(-1)}>{"<"}</button>
        <h2>
          {selectedDate.toLocaleString("default", { month: "long" })}{" "}
          {selectedDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>{">"}</button>
      </div>
      <div className="days-of-week">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default Calender;
