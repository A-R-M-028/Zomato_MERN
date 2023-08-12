import React from "react";
import { Route } from "react-router-dom";
import HomemeLayout from "../Layout/HomeLayout";

// Here ma some issues
const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomemeLayout>
            <Component {...props} />
          </HomemeLayout>
        )}
      />
    </>
  );
};

export default HomeLayoutHOC;
