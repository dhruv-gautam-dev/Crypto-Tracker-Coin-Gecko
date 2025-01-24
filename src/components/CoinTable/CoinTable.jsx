/**imports */
import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQueries, useQuery } from "react-query";
import { use } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from "../../state/store";
import { useNavigate } from "react-router-dom";
import { BulletList } from "react-content-loader";

// functional component
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
    <div className="flex flex-col justify-center w-full gap-5 px-4 mx-auto my-5 align-center ">
      {/* Header of table*/}
      <div className="flex justify-center w-full px-2 py-4 mx-auto font-semibold text-black bg-yellow-400 rounded-full item-center">
        <div className="basis-[35%] pl-10">Coin</div>
        <div className="basis-[35%]">Price</div>
        <div className="basis-[30%]">24 Change</div>
        <div className="basis-[25%]">Market Cap</div>
      </div>
      {/* coin table */}
      <div className="overflow-x-auto">
        <div className="flex flex-wrap min-w-full justify-center gap-4  flex-col w-[80vw] mx-auto">
          {isLoading && <BulletList />}
          {data &&
            data.map((coin) => {
              return (
                <div
                  onClick={() => handleCoinRedirect(coin.id)}
                  key={coin.id}
                  className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent cursor-pointer"
                >
                  <div className="flex item-center justify-start gap-3 w-1/4 basis[35%]">
                    <div className="w-[5rem] h-[5rem]">
                      <img
                        src={coin.image}
                        alt="coin Image"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col basis-[35%] ">
                      <div className="text-lg font-semibold md:text-xl">
                        {coin.name}
                      </div>
                      <div className="w-16 h-16 mx-auto md:w-20 md:h-20">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-4  basis-[25%] ">
                    <div>{coin.current_price}</div>
                  </div>
                  <div className="flex ml-4 basis-[20%]">
                    <div>{coin.price_change_24h}</div>
                  </div>
                  <div className="flex ml-4  basis-[20%]">
                    <div>{coin.market_cap}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 item-center ">
        <button
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 mt-4 text-2xl text-white btn btn-primary btn-wide"
        >
          prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 mt-4 text-2xl text-white btn btn-primary btn-wide"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CoinTable;
