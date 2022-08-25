import React, { useState, setState } from 'react';
import CashUpRow from "../src/CashUpRow"
import './App.css';

function App() {
  const [float, setFloat] = useState(200);
  const [quantity20, setQuantity20] = useState(0);
  const [quantity10, setQuantity10] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity50p, setQuantity50p] = useState(0);
  const [quantity20p, setQuantity20p] = useState(0);
  const [quantity10p, setQuantity10p] = useState(0);
  const [quantity5p, setQuantity5p] = useState(0);
  const [quantity2p, setQuantity2p] = useState(0);
  const [quantity1p, setQuantity1p] = useState(0);
  const [total20, setTotal20] = useState(0);
  const [total10, setTotal10] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total50p, setTotal50p] = useState(0);
  const [total20p, setTotal20p] = useState(0);
  const [total10p, setTotal10p] = useState(0);
  const [total5p, setTotal5p] = useState(0);
  const [total2p, setTotal2p] = useState(0);
  const [total1p, setTotal1p] = useState(0);
  const cashAmounts = [
    {
      amount: 20.00,
      state: quantity20,
      setStates: setQuantity20,
      total: total20,
      setTotal: setTotal20
    },
    {
      amount: 10.00,
      state: quantity10,
      setStates: setQuantity10,
      total: total10,
      setTotal: setTotal10
    },
    {
      amount: 5.00,
      state: quantity5,
      setStates: setQuantity5,
      total: total5,
      setTotal: setTotal5
    },
    {
      amount: 2.00,
      state: quantity2,
      setStates: setQuantity2,
      total: total2,
      setTotal: setTotal2
    },
    {
      amount: 1.00,
      state: quantity1,
      setStates: setQuantity1,
      total: total1,
      setTotal: setTotal1
    },
    {
      amount: 0.50,
      state: quantity50p,
      setStates: setQuantity50p,
      total: total50p,
      setTotal: setTotal50p
    },
    {
      amount: 0.20,
      state: quantity20p,
      setStates: setQuantity20p,
      total: total20p,
      setTotal: setTotal20p
    },
    {
      amount: 0.10,
      state: quantity10p,
      setStates: setQuantity10p,
      total: total10p,
      setTotal: setTotal10p
    },
    {
      amount: 0.05,
      state: quantity5p,
      setStates: setQuantity5p,
      total: total5p,
      setTotal: setTotal5p
    },
    {
      amount: 0.02,
      state: quantity2p,
      setStates: setQuantity2p,
      total: total2p,
      setTotal: setTotal2p
    },
    {
      amount: 0.01,
      state: quantity1p,
      setStates: setQuantity1p,
      total: total1p,
      setTotal: setTotal1p
    },
  ]
  const totalAmount = cashAmounts.reduce((total, currentValue) => total = total + (currentValue.total), 0)

  return (
    <div className="App">
      <h1>
        Cash up calculator
      </h1>
      <h3>
        Float is 
        <input type="number"
          name={float}
          defaultValue="200"
          step="0.01"
          min="0"
          onChange={(e) => parseInt(setFloat(e.target.value))}>
        </input>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Money</th>
            <th>Quanitity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cashAmounts?(cashAmounts.map(cash => {
            return <CashUpRow cash={cash}></CashUpRow>
          })):""}
          <tr>
            <th></th>
            <th>Total = </th>
            <th>
              £{(totalAmount).toFixed(2)}
            </th>
          </tr>
          <tr>
            <th></th>
            <th>To be banked = </th>
            <th>
              £{((totalAmount-float).toFixed(2))}
            </th>
          </tr>
        </tbody>
      </table>
      <div>
        Add a way to work out what needs to be put into the banking bag and into the till to make a £200 
      </div>
    </div>
  );
}

export default App;
