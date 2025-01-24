import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);
function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {
  const chartDays = [
    {
      label: "24Hours",
      value: 1,
    },
    {
      label: "7Days",
      value: 7,
    },
    {
      label: "30Days",
      value: 30,
    },
    {
      label: "90Days",
      value: 90,
    },
    {
      label: "365Days",
      value: 365,
    },
  ];
  function handleDayChange(e) {
    // console.log(e.target.options[e.target.selectedIndex].value);
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if (daysSelected == 1) {
      setCoinInterval?.("");
    } else {
      setCoinInterval?.("daily");
    }
    setDays?.(e.target.options[e.target.selectedIndex].value);
  }

  if (!historicData) {
    return <Alert message="NO DATA AVAILABLE" />;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 mt-6">
      <div className="w-full h-64 md:h-96">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]); //Converting unix stamp to date
              let time =
                date.getHours() > 12
                  ? `${date?.getHours() - 12} : ${date?.getMinutes()} PM`
                  : `${date?.getHours()} : ${date?.getMinutes()} AM`;
              return days === 1 ? time : date?.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} ${
                  days === 1 ? "Day" : "Days"
                })in ${currency?.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>

      <div>
        <select
          className="w-full max-w-xs select select-primary"
          onChange={handleDayChange}
        >
          {chartDays.map((day, index) => {
            return (
              <option
                selected={days == day.value}
                key={index}
                value={day.value}
              >
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default CoinInfo;
