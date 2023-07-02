import React, { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  const [item, setItem] = useState(!!JSON.parse(localStorage.getItem(key)));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [item]);

  return [item, setItem];
};

export default useLocalStorage;
