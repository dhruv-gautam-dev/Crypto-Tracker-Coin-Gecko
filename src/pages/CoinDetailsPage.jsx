import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../Services/fetchCoinDetails";
import { useEffect } from "react";
import parse from "html-react-parser";
import currencyStore from "../state/store";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";
import { Instagram } from "react-content-loader";

function CoinDetailsPage() {
  const { currency } = currencyStore();

  const { coinId } = useParams();
  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  if (isLoading) {
    return <Instagram />;
  }
  if (isError) {
    return <div>Error: something went wrong</div>;
  }

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
        <img src={coin?.image?.large} alt={coin.name} className="mb-5 h-52" />
        <h1 className="mb-5 text-4xl font-bold ">{coin?.name}</h1>
        <p className="w-full px-6 py-4 ">
          {parse(coin?.description?.en)}
          {/* {coin?.description.en} */}
        </p>
        <div className="flex flex-col w-full md:flex-row md:justify-around">
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
          </div>

          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Current Price</h2>
            <span className="ml-3 text-xl">
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-2/3">
        <CoinInfoContainer coinId={coinId} />
      </div>
    </div>
  );
}

export default CoinDetailsPage;
