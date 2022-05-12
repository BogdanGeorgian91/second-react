import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = () => {
    const [selectedYear, setSelectedYear] = useState("");

  const selectedYearHandler = (event) => {
    // console.log(event);
    console.log(event.target.value);
    setSelectedYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler}>
          <option value={selectedYear}>2022</option>
          <option value={selectedYear}>2021</option>
          <option value={selectedYear}>2020</option>
          <option value={selectedYear}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
