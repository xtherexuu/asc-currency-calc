<<<<<<< HEAD
import { useEffect } from "react";
import { useState } from "react";

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date);
        }, 1000)
        return () => {
            clearInterval(intervalID);
        }
    }, []);
    return date;
}

export default useCurrentDate;
=======
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
}

export default useCurrentDate;
>>>>>>> b79760c8bd4c0e1beab1fd86d92d1fc76a512f77
