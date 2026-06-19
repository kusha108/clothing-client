import React from "react";
import { useSearchParams } from "react-router-dom";
import API from "../../service/api";   // FIXED

const DummyGateway = () => {
  const [params] = useSearchParams();
  const orderId = params.get("orderId");
  const amount = params.get("amount");

  const handleResult = async (status) => {
    await API.post("/payment/verify-payment", {   // FIXED
      orderId,
      status,
    });

    if (status === "success") {
      window.location.href = "/payment-success";
    } else {
      window.location.href = "/payment-failed";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dummy Payment Gateway</h1>
      <p>Paying Amount: ₹{amount}</p>
      <button
        onClick={() => handleResult("success")}
        style={{ marginRight: "10px" }}
      >
        Success
      </button>
      <button onClick={() => handleResult("failed")}>Fail</button>
    </div>
  );
};

export default DummyGateway;
