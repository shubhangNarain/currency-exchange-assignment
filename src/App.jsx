import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [eurUsd, setEurUsd] = useState(1.05);
  const [usdInr, setUsdInr] = useState(80.05);
  const [audUsd, setAudUsd] = useState(0.67);

  const currencies = ["EUR", "USD", "INR", "AUD"];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // eurusd = eurusd + eurusd * random * 0.03

  const exchangeRate = Math.random * 0.03;

  useEffect(() => {
    setTimeout(() => {
      setEurUsd(eurUsd + eurUsd * exchangeRate);
      setUsdInr(usdInr + usdInr * exchangeRate);
      setAudUsd(audUsd + audUsd * exchangeRate);
    }, 1000);
  }, [eurUsd, usdInr, audUsd]);


  const handleExchange = () => {

  }

  return (
    <>
      <div className="h-screen w-screen grid grid-cols-2">
        <div className="flex items-center justify-center">
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
            <div className="p-12">Currency converter</div>
            <div className="px-12">
              <div className="p-2">
                <select value={from} onChange={(e) => setFrom(e.target.value)}>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                  {console.log("From:", from)}
                </select>
              </div>
              <div className="p-2">
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                  {console.log("To", to)}
                </select>
              </div>

              <input className="w-full h-8 p-2" placeholder="Amount"/>

              <div>Amount:</div>

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
    </>
  );
}

export default App;
