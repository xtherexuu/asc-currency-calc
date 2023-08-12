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

  return date;
};

export default useCurrentDate;
