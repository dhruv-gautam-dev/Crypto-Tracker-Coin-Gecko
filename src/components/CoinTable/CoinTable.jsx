import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQueries, useQuery } from "react-query";
import { use } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from "../../state/store";
import { useNavigate } from "react-router-dom";
function CoinTable() {
  // const { currency } = useContext(CurrencyContext);
  const { currency } = currencyStore();
  const navigate = useNavigate();
  //UseEffect
  // useEffect(() => {

  //   fetchCoinData(1, "usd"); //function
  // }, []);

  //alternative to useEffect
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coins", page, currency],
    () => fetchCoinData(page, currency),
    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  //return
  return (
    // <div>
    //   CoinTable
    //   <button onClick={() => setPage(page + 1)}>click Me</button>
    //   {page}
    // </div>
    <div className="flex  flex-col justify-center mx-auto my-5 align-center gap-5 w[80vw] ">
      <div className="flex justify-center w-[80vw] mx-auto px-2 py-4 font-semibold text-black bg-yellow-400 item-center">
        {/* Header of table*/}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24 Change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>
      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                onClick={() => handleCoinRedirect(coin.id)}
                key={coin.id}
                className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent cursor-pointer"
              >
                <div className="flex item-center justify-start gap-3 basis[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img
                      src={coin.image}
                      alt="coin Image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col basis-[35%]">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>
                <div className="flex basis-[25%]">
                  <div>{coin.current_price}</div>
                </div>
                <div className="flex basis-[20%]">
                  <div>{coin.price_change_24h}</div>
                </div>
                <div className="flex basis-[20%]">
                  <div>{coin.market_cap}</div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-center gap-4 item-center ">
        <button
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
          className="text-2xl text-white btn btn-primary btn-wide"
        >
          prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="text-2xl text-white btn btn-secondary btn-wide"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CoinTable;
