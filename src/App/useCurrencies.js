import { useEffect, useState } from "react";

const useCurrencies = () => {
  const [currenciesObj, setCurrenicesObj] = useState(null);
  const [isError, setErrorStatus] = useState(false);
  const [isDone, setDoneStatus] = useState(false);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(
          "http://api.exchangerate.host/live?access_key=4cc019c39487af21fdeb10cd1b5733d4&currencies=PLN,USD,EUR,GBP,CZK,NOK,JPY&source=PLN"
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const currenciess = await response.json();
        if (!currenciess.success) {
          throw {
            message: "There was an error",
            errorCode: currenciess.error.code,
            errorText: currenciess.error.info,
          };
        }
        setCurrenicesObj(
          (obj) =>
            (obj = {
              ...currenciess,
              quotes: { ...currenciess.quotes, PLNPLN: 1 },
            })
        );
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
