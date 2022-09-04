import React from "react";
import Link from "next/link";

// Styling
import classes from "./button.module.css";

const Button = (props) => {
  // Link Button
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* if we dont specify a <a> element Link will generate one automatically 
          if we specify => keep the functionality (e.preventDefault()) but use our <a> 
          with custom styling (not setting 'href' !)
      */}
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  // Regular Button
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
