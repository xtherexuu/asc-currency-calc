import { useEffect, useState } from "react";

const useCurrencies = () => {
  const [currenciesObj, setCurrenicesObj] = useState(null);
  const [isError, setErrorStatus] = useState(false);
  const [isDone, setDoneStatus] = useState(false);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?symbols=PLN,USD,EUR,GBP,CZK,NOK,JPY&base=PLN"
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const currenciess = await response.json();
        setCurrenicesObj(currenciess);
        setDoneStatus(true);
      } catch (error) {
        console.log(error);
        setErrorStatus(error);
      }
    };

    getCurrencies();
  }, []);
  return [currenciesObj, isError, isDone];
};

export default useCurrencies;
