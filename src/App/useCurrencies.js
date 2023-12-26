import { useEffect, useState } from "react";

const useCurrencies = () => {
  const [currenciesObj, setCurrenicesObj] = useState(null);
  const [isError, setErrorStatus] = useState(false);
  const [isDone, setDoneStatus] = useState(false);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest" +
          "?apikey=cur_live_M92FPLFgUOoPeOyLwp1iP6wKwnLRanOn6Il1HA3g" +
          "&base_currency=PLN" +
          "&currencies=PLN,USD,EUR,GBP,CZK,NOK,JPY"
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const currenciess = await response.json();
        setCurrenicesObj(currenciess);
        setDoneStatus(true);
      } catch (error) {
        console.error(error);
        setErrorStatus(error);
      }
    };

    getCurrencies();
  }, []);
  return [currenciesObj, isError, isDone];
};

export default useCurrencies;
