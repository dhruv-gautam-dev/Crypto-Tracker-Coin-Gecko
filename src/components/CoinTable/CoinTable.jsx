import { useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQueries, useQuery } from "react-query";
import { use } from "react";

function CoinTable() {
  //UseEffect
  // useEffect(() => {

  //   fetchCoinData(1, "usd"); //function
  // }, []);

  //alternative to useEffect
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coins", page],
    () => {
      fetchCoinData(page, "usd");
    },
    {
      retry: 2,
      retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //return
  return (
    <div>
      CoinTable
      <button onClick={() => setPage(page + 1)}>click Me</button>
      {page}
    </div>
  );
}
export default CoinTable;
