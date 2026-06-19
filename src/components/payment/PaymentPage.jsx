import React, { useState } from "react";
import axios from "../../service/api";


const PaymentPage = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    const res = await axios.post("/payment/create-order", { amount });
    const orderId = res.data.orderId;

    window.location.href = `/dummy-gateway?orderId=${orderId}&amount=${amount}`;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter Amount</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentPage;
