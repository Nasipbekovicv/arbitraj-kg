import { useEffect, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import "./style/Rate.css";
import axios from "axios";
import eurImg from "./img/eur.svg";
import usaImg from "./img/usa.svg";
import rubImg from "./img/rus.svg";
import kztImg from "./img/kazakhstan.svg";

const Rate = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const headers = {'Authorization': `Bearer ${'qVJCepZjGXOYCE4lJyW5K3Wbq8CRgyylrXYWwzSC'}`}
    axios.get('https://data.fx.kg/api/v1/current', {headers})
    .then(res => {
      setItem(res.data);
      console.log(res.data);
    })
    .catch(err => console.log('ERRORS' , err))
  }, [])

  const filteredObject = item.filter(e => e.id === 5)
  console.log('-----filter----------', filteredObject);

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
          <div className="name-icons-center">
            <img src={usaImg} className="icons-rate-baner" /> <span>USD</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].buy_usd}</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].sell_usd}</span>
          </div>
        </div>
        <div className="p-price">
          <div className="name-icons-center">
            <img src={eurImg} className="icons-rate-baner" /> <span>EUR</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].buy_eur}</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].sell_eur}</span>
          </div>
        </div>
        <div className="p-price">
          <div className="name-icons-center">
            <img src={rubImg} className="icons-rate-baner" /> <span>RUB</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].buy_rub}</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].sell_rub}</span>
          </div>
        </div>
        <div className="p-price">
          <div className="name-icons-center">
            <img src={kztImg} className="icons-rate-baner" /> <span>KZT</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].buy_kzt}</span>
          </div>
          <div>
            <span>{filteredObject[0]?.rates[0].sell_kzt}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Rate;
