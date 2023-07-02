import React, { useEffect, useState } from "react";

const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate((date) => (date = new Date()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getFormatedDate = () => {
    const dateString = date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const timeString = date.toLocaleTimeString("pl-PL");

    return dateString + " " + timeString;
  };

  return getFormatedDate();
};

export default useCurrentDate;
