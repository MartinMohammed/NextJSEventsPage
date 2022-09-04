import { Fragment } from "react";

import MainNavigation from "./main-navigation";
import MainHeader from "./main-header";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      {/* <MainNavigation /> */}

      {/* props.children === The page rendered inside _app.js */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
