import { useEffect, useState } from "react";
import "./style/Currency.css";
import axios from "axios";
import { LuArrowUpDown } from "react-icons/lu";

const Currency = () => {
  const [item, setItem] = useState([]);
  const [initial, setInitial] = useState({
    currencies: ["USD", "KGS", "KZT", "RUB", "EUR", "INR", "CNY"],
    base: "USD",
    amount: "",
    converTo: "KGS",
    result: "",
    date: "",
  });

  const { currencies, base, amount, converTo, result, date } = initial;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrency = async () => {
        const res = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${base}`
        );
        setItem(res.data);
        const response = res.data;
        const result = (response.rates[converTo] * amount).toFixed(3);
        setInitial({
          ...initial,
          result,
          date,
        });
      };
      getCurrency();
    }
  }, [amount, base, converTo]);

  const onChangeInput = (e) => {
    setInitial({
      ...initial,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: e.target.value,
      result: null,
    });
  };
  const handleSweap = (e) => {
    e.preventDefault();
    setInitial({
      ...initial,
      converTo: base,
      base: converTo,
      result: null,
    });
  };

  return (
    <div className="control-currency">
      <div style={{ padding: "10px 20px" }}>
        <div className="control-rate-title">
          <div>
            <p className="p-date">{item.date}</p>
          </div>
          <h5>
            {amount} {base}
          </h5>
          <h3>
            {amount === "" ? "0" : result === null ? "Calculatin..." : result}
            {converTo}
          </h3>
        </div>
        <form>
          <div className="control-input-syle">
            <input
              className="input-one"
              type="number"
              value={amount}
              placeholder="type"
              onChange={onChangeInput}
            />
            <select
              className="select-control"
              name="base"
              value={base}
              onChange={handleSelect}
            >
              {currencies.map((e) => (
                <option className="option-control" key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className="sweap-control-block">
          <LuArrowUpDown onClick={handleSweap} className="sweap-control" />
        </div>
        <form>
          <div className="control-input-syle">
            <input
              className="input-one"
              disabled={true}
              value={
                amount === ""
                  ? "0"
                  : result === null
                  ? "Calculation..."
                  : result
              }
            />
            <select
              className="select-control"
              name="converTo"
              value={converTo}
              onChange={handleSelect}
            >
              {currencies.map((e) => (
                <option className="option-control" key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Currency;
