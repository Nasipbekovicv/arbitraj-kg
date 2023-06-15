import { useEffect, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import "./style/Rate.css";
import axios from "axios";
import eurImg from "./img/eur.svg";
import usaImg from "./img/usa.svg";
import rubImg from "./img/rus.svg";
import turkImg from "./img/197518.svg";
import kztImg from "./img/kazakhstan.svg";
import chinaImg from "./img/china.svg";

const Rate = () => {
  const [item, setItem] = useState([]); //USD
  const [eur, setEur] = useState([]); //EUR
  const [rub, setRub] = useState([]); //RUB
  const [turk, setTurk] = useState([]); //TRY
  const [kzt, setKzt] = useState([]); //KZT
  const [cny, setCny] = useState([]); //CNY

  const getCurrency = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/USD`
    );
    setItem(res.data.rates);
  };

  const getCurrencyEUR = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/EUR`
    );
    setEur(res.data.rates);
  };

  const getCurrencyRUB = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/RUB`
    );
    setRub(res.data.rates);
  };

  const getCurrencyTURK = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/TRY`
    );
    setTurk(res.data.rates);
  };

  const getCurrencyKZT = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/KZT`
    );
    setKzt(res.data.rates);
  };

  const getCurrencyCNY = async () => {
    const res = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/CNY`
    );
    setCny(res.data.rates);
  };

  useEffect(() => {
    getCurrency();
    getCurrencyEUR();
    getCurrencyRUB();
    getCurrencyTURK();
    getCurrencyKZT();
    getCurrencyCNY();
  }, []);

  return (
    <div className="control-rate">
      <div className="control-block-rate-p">
        <div className="control-baner-them">
          <p>Аты</p>
          <span style={{ paddingRight: "50px" }}>
            <BsArrowDownCircle style={{ color: "#25CE7D" }} />
          </span>
          <span>
            <BsArrowUpCircle style={{ color: "#FA4F4F" }} />
          </span>
        </div>
        <div className="hr-w"></div>
        <div>
          <div className="p-price">
            <div>
              <img src={usaImg} className="icons-rate-baner" /> <span>USD</span>
            </div>
            <div>
              <span>{item.KGS}</span>
            </div>
            <div>
              <span>{item.KGS}</span>
            </div>
          </div>
          <div className="p-price">
            <div>
              <img src={eurImg} className="icons-rate-baner" /> <span>EUR</span>
            </div>
            <div>
              <span>{eur.KGS}</span>
            </div>
            <div>
              <span>{eur.KGS}</span>
            </div>
          </div>
          <div className="p-price">
            <div>
              <img src={rubImg} className="icons-rate-baner" /> <span>RUB</span>
            </div>
            <div>
              <span>{rub.KGS}</span>
            </div>
            <div>
              <span>{rub.KGS}</span>
            </div>
          </div>
          <div className="p-price">
            <div>
              <img src={turkImg} className="icons-rate-baner" />{" "}
              <span>TRY</span>
            </div>
            <div>
              <span>{turk.KGS}</span>
            </div>
            <div>
              <span>{turk.KGS}</span>
            </div>
          </div>
          <div className="p-price">
            <div>
              <img src={kztImg} className="icons-rate-baner" /> <span>KZT</span>
            </div>
            <div>
              <span>{kzt.KGS}</span>
            </div>
            <div>
              <span>{kzt.KGS}</span>
            </div>
          </div>
          <div className="p-price">
            <div>
              <img src={chinaImg} className="icons-rate-baner" />{" "}
              <span>CNY</span>
            </div>
            <div>
              <span>{cny.KGS}</span>
            </div>
            <div>
              <span>{cny.KGS}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
