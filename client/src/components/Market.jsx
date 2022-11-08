import axios from "axios";
import { useEffect, useState } from "react";

import { FormatService } from "./utils/FormatService";

export default function Market() {
  const [data, setData] = useState();
  const Data = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    setData(response.data);
  };

  useEffect(() => {
    Data();
  }, []);

  return (
    <>
      <table class="table table-dark ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">24h</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((el, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img src={el.image} alt="" width="20" height="20" />
                    </td>
                    <td>{el.name}</td>
                    <td>{FormatService.toCurrency(el.current_price)}</td>
                    <td
                      style={{
                        color:
                          el.price_change_percentage_24h < 0
                            ? "#e15241"
                            : "#4eaf0a",
                      }}
                    >
                      {FormatService.toPercent(el.price_change_percentage_24h)}
                    </td>
                    <td>{FormatService.toCurrency(el.total_volume)}</td>
                    <td>{FormatService.toCurrency(el.market_cap)}</td>
                    <td>
                      {/* <img
                        loading="lazy"
                        width="135"
                        height="50"
                        alt={`${el.name} (${el.symbol}) 7d chart`}
                        src={`https://www.coingecko.com/coins/${
                          index + 1
                        }/sparkline`}
                      /> */}
                    </td>
                  </tr>
                );
              })
            : " "}
        </tbody>
      </table>
    </>
  );
}
