import React from "react";
import "./OrderPlaced.css";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <div className="order-placed-container">
      <div className="order-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success Icon"
          className="success-icon"
        />
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with us. Your order will be delivered soon.</p>
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
