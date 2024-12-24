import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import currencyStore from "../../state/store";
import { useState } from "react";
import fetchCoinHistoricData from "../../Services/fetchCoinHistoricData";
import { List } from "react-content-loader";
import Alert from "../Alert/Alert";

function CoinInfoContainer({ coinId }) {
  const { currency } = currencyStore();
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("");

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery(
    ["historicData", coinId, currency, days, interval],
    () => fetchCoinHistoricData(coinId, interval, days, currency),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  if (isLoading) {
    return (
      <div>
        <List />
      </div>
    );
  }
  if (isError) {
    return <Alert message={"Error in fetching data"} />;
  }
  return (
    <div>
      <CoinInfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </div>
  );
}

export default CoinInfoContainer;
