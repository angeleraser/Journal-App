/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { FIREBASE } from "..";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";
export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    FIREBASE.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);
  if (checking) {
    return <h1>Loading...</h1>;
  };
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes
          isLoggedIn={isLoggedIn}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRoute
          isLoggedIn={isLoggedIn}
          exact
          path="/"
          component={JournalScreen}
        />
        <Redirect to={"/auth"} />
      </Switch>
    </BrowserRouter>
  );
};
