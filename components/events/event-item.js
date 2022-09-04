import React from "react";
import Link from "next/link";

// Styling --> css modules
// --> A object with all the classes defined in the css file
import classes from "./event-item.module.css";

// components
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { id, title, description, location, date, image, isFeatured } = props;

  // date constant is in a format we can pass to the date constructor
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    // How the different parts of the date should be output
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // New Wall Street 5, 98765, New York => street, postal code and city in seperate lines
  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
