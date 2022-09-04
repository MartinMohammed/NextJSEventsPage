import React from "react";

// Styling
import classes from "./event-list.module.css";

// Components
import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  const renderItemsList = items.map((item) => {
    return <EventItem key={item.id} {...item} />;
  });
  return <ul className={classes.list}>{renderItemsList}</ul>;
};

export default EventList;
