import React from "react";
import "./filter.styles.css";

const FilterField = ({ setGender, setPayment }) => {
  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const paymentHandler = (e) => {
    setPayment(e.target.value);
  };

  return (
    <div className="filter-field">
      <p>Filter</p>
      <div className="filter-field-container">
        <div className="gender-field">
          <select onChange={genderHandler} name="Gender" id="">
            <option value="" disabled selected hidden>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Prefer to skip">Unspecified</option>
            <option value="all">ALL</option>
          </select>
        </div>
        <div className="payment-method-field">
          <select onChange={paymentHandler} name="payment-method" id="">
            <option value="" disabled selected hidden>
              Payment Method
            </option>
            <option value="paypal">Paypal</option>
            <option value="cc">CC</option>
            <option value="money order">Money Order</option>
            <option value="check">Check</option>
            <option value="all">ALL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterField;
