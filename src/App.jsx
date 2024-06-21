import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [eurUsd, setEurUsd] = useState(1.05);
  const [usdInr, setUsdInr] = useState(80.05);
  const [audUsd, setAudUsd] = useState(0.67);

  const currencies = ["EUR", "USD", "INR", "AUD"];

  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState(0);

  const getFluctuation = () => {
    const max = 0.03;
    const min = -0.03;
    return Math.random() * (max - min) + min;
  }

  const updateExchangeRate = () => {
    const flux = getFluctuation();
    setEurUsd((eurUsd * (1 + flux)).toFixed(2));
    setUsdInr((usdInr * (1 + flux)).toFixed(2));
    setAudUsd((audUsd * (1 + flux)).toFixed(2));
    console.log({ eurUsd, usdInr, audUsd, flux });
  }

  useEffect(() => {
    setTimeout(() => {
      updateExchangeRate();
    }, 1000);
    console.log({ usdInr, eurUsd, audUsd });
  }, [eurUsd, usdInr, audUsd]);

  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleExchange = () => {
    if (from === "USD" && to === "INR") {
      setConvertedAmount((amount * usdInr).toFixed(2));
    }
    else if (from === "EUR" && to === "USD") {
      setConvertedAmount((amount * eurUsd).toFixed(2));
    }
    else if (from === "AUD" && to === "USD") {
      setConvertedAmount((amount * audUsd).toFixed(2));
    }
    else{
      alert("Wrong Currency selection")
    }
    console.log("Converted:", convertedAmount);
  };

  return (
    <>
      <div className="h-screen grid md:grid-cols-2">
        <div className="p-5 flex items-center justify-center">
          <div className="rounded-xl h-[500px] w-[500px] flex bg-blue-900">
            <div className="w-full flex flex-col">
              <h1 className="pt-12 p-5 font-bold text-2xl">Markets</h1>
              <div className="p-5 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <tbody>
                    <tr className="w-full border-[1px] border-gray-500">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium bg-white whitespace-nowrap"
                      >
                        EUR/USD
                      </th>
                      <td className="px-6 py-4">{eurUsd}</td>
                    </tr>

                    <tr className="border-[1px] border-gray-500">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium bg-white whitespace-nowrap"
                      >
                        USD/INR
                      </th>
                      <td className="px-6 py-4">{usdInr}</td>
                    </tr>

                    <tr className="border-[1px] border-gray-500">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium bg-white whitespace-nowrap"
                      >
                        AUD/USD
                      </th>
                      <td className="px-6 py-4">{audUsd}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-xl h-[500px] w-[500px] flex flex-col bg-gray-300">
            <div className="p-12 font-bold text-2xl">Currency converter</div>
            <div className="px-8">
              <div className="p-2 flex flex-col">
                From Currency
                <select value={from} onChange={(e) => setFrom(e.target.value)}>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                  {console.log("From:", from)}
                </select>
              </div>
              <div className="p-2 flex flex-col">
                To Currency
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                  {console.log("To:", to)}
                </select>
              </div>

              <div className="p-2">Amount:</div>
              <div className="p-2">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-8 p-2"
                  placeholder="Amount"
                />
              </div>

              <div className="p-2">
                <div className="p-5 rounded-md bg-gray-600 h-16">
                  Estimated converted amount: {convertedAmount}
                </div>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={handleExchange}
                >
                  Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
