import React from 'react';
import "../styles/Schedule.css";

const ScheduleItem = ({ day, time }) => {
  return (
    <p>{day} at {time}</p>
  );
};

export default ScheduleItem;