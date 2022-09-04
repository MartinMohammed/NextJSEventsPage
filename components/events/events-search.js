import React from "react";

// Styling
import classes from "./events-search.module.css";

// Components
import Button from "../ui/button";

// Constants
const MONTHS_NAMES_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dezember",
];

const monthList = MONTHS_NAMES_LIST.map((monthName, index) => (
  <option value={index + 1} key={monthName}>
    {monthName}
  </option>
));

// Above the FC declaration => will only be called initially not at re-renders
const EventsSearch = (props) => {
  // State
  const yearSelectRef = React.useRef(null); // Ref to <select/>
  const monthSelectRef = React.useRef(null); // Ref to <select/>

  function submitHandler(event) {
    event.preventDefault();

    // We only are interested in the "state" of the select fields
    // when the component is submitted so we use "ref"

    const selectedYear = yearSelectRef.current.value;
    const selectedMonth = monthSelectRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            {/* Select Dropdown menu */}
            <select id="year" ref={yearSelectRef}>
              {/* options - interal identifier  */}
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthSelectRef}>
              {monthList}
            </select>
          </div>
        </div>
        {/* Button inside a form is by default a submit button  */}
        <Button>Find Events</Button>
      </form>
    </>
  );
};

export default EventsSearch;
