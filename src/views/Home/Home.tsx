import "./Home.scss";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { io } from "socket.io-client";

export default function Home() {
  // const data = [
  //   { Rank: "a0", Name: "a0", Score: "a0", Stocks: "a0" },
  //   { Rank: "b1", Name: "b1", Score: "b1", Stocks: "b1" },
  //   { Rank: "c2", Name: "c2", Score: "c2", Stocks: "c2" },
  //   { Rank: "d3", Name: "d3", Score: "d3", Stocks: "d3" },
  //   { Rank: "e4", Name: "e4", Score: "e4", Stocks: "e4" },
  //   { Rank: "f5", Name: "f5", Score: "f5", Stocks: "f5" },
  //   { Rank: "g6", Name: "g6", Score: "g6", Stocks: "g6" },
  //   { Rank: "h7", Name: "h7", Score: "h7", Stocks: "h7" },
  //   { Rank: "i8", Name: "i8", Score: "i8", Stocks: "i8" },
  //   { Rank: "j9", Name: "j9", Score: "j9", Stocks: "j9" },
  //   { Rank: "k10", Name: "k10", Score: "k10", Stocks: "k10" },
  //   { Rank: "l11", Name: "l11", Score: "l11", Stocks: "l11" },
  //   { Rank: "m12", Name: "m12", Score: "m12", Stocks: "m12" },
  //   { Rank: "n13", Name: "n13", Score: "n13", Stocks: "n13" },
  //   { Rank: "o14", Name: "o14", Score: "o14", Stocks: "o14" },
  //   { Rank: "p15", Name: "p15", Score: "p15", Stocks: "p15" },
  // ];

  interface DataIF {
    Rank: string;
    Name: string;
    Score: string;
    Stocks: string;
  }

  const [data, setData] = useState<Array<DataIF>>([]);

  // const socket = socketIOClient("ws://localhost:8080");
  const socket = io("ws://localhost:8080", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("update", (args) => {
      setData(args);
    });
  });

  return (
    <div className="HomeWrapper">
      <h1>LeaderBoard</h1>
      <table>
        <thead>
          <tr>
            <td>SNo</td>
            <td>Name</td>
            <td>Score</td>
            <td>Stocks</td>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.Rank}</td>
              <td>{data.Name}</td>
              <td>{data.Score}</td>
              <td>{data.Stocks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
