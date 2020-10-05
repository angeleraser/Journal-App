import React from "react";
import { Redirect, Route } from "react-router";
export const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};
