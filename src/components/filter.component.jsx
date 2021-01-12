import React from "react";

const FilterField = () => {
  return (
    <div className="filter-field">
      <div className="gender-field">
        <select name="Gender" id="">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="none">Unspecified</option>
        </select>
      </div>
      <div className="payment-method-field">
        <select name="payment-method" id=""></select>
      </div>
    </div>
  );
};

export default FilterField;
