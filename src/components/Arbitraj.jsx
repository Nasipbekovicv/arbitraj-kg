import axios from "axios";
import { useEffect, useState } from "react";
import "./style/Arbitraj.css";

const Arbitraj = () => {
  const [arbitraj, setArbitraj] = useState([]);
  const axiosFetch = async () => {
    try {
      const res = await axios.get(
        `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
      );
      setArbitraj(res.data.Data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    axiosFetch();
  }, []);

  return (
    <div className="control-arbitraj">
      {/* <div className="hero-arbtr"> */}
      <div className="menu-arbitraj">
        <p className="rank-them">#</p>
        <span className="line-menu-span"></span>
        <p className="name-them">Аты</p>
        <span className="line-menu-span"></span>
        <p className="price-them">Баасы</p>
        <span className="line-menu-span"></span>
        <p className="h24-them">24 саат.</p>
      </div>
      <div>
        {arbitraj.map((e) => {
          return (
            <div key={e.CoinInfo.Id} className="arbtr-control">
              <div className="control-title-arbitraj">
                <div className="control-img">
                  <img
                    className="img-icons-arbtr"
                    src={`https://www.cryptocompare.com/${e.CoinInfo.ImageUrl}`}
                  />
                </div>
                <div className="control-Name-FulName">
                  <span className="span-Name-FulName">
                    {e.CoinInfo.FullName}
                  </span>
                </div>
                <div className="control-Name-Name">
                  <span className="span-Name">{e.CoinInfo.Name}</span>
                </div>
                <div
                  className={`control-24h  ${
                    e.DISPLAY.USD.PRICE > e.DISPLAY.USD.OPENHOUR
                      ? "gren"
                      : "red"
                  }`}
                >
                  {e.DISPLAY.USD.PRICE}
                </div>
                <div
                  className={`control-24h  ${
                    e.DISPLAY.USD.OPEN24HOUR > "$ 0.999" ? "gren" : "red"
                  }`}
                >
                  {e.DISPLAY.USD.OPEN24HOUR}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Arbitraj;
