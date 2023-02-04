import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2023-02-25");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p>Menuju hari Bahagia</p>
      <div className="counter p-4 flex ">
        <span className="p-2  border border-gray-200 rounded-xl bg-white shadow mx-2" >{timeBetween.days()} Hari </span>
        <span className="p-2  border border-gray-200 rounded-xl bg-white shadow mx-2" >{timeBetween.hours()} jam </span>
        <span className="p-2  border border-gray-200 rounded-xl bg-white shadow mx-2" >{timeBetween.minutes()} Menit </span>
        <span className="p-2  border border-gray-200 rounded-xl bg-white shadow mx-2" >{timeBetween.seconds()} Detik </span>
      </div>
    </div>
  );
};
