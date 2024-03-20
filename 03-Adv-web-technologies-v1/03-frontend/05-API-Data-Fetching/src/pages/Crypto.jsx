import axios from "axios";
import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // console.log("Hi");
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100"
        );
        console.log(response);
        setCrypto(response.data);
      } catch (error) {
        console.log("OH NO ERROR");
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
      }
    };

    getData();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-[32px] font-bold mb-[20px] mt-[20px]">
        Crypto Currencies Data
      </h1>
      <hr />

      {error && (
        <h2 className="text-[32px] font-bold text-red-900">{errorMessage}</h2>
      )}

      <div className="flex flex-wrap gap-2 justify-center md:justify-between mt-4">
        {crypto.map((item) => {
          return (
            <div className="border-2  p-4 md:w-[25%] lg:w-[20%]">
              <img className="w-[50%] block mx-auto" src={item.image} alt="" />
              <h2 className="text-[16px] font-bold mt-3 mb-3">{item.name}</h2>
              <p>Price : ${item.current_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crypto;
