import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login/Register Routes  */}
        <Route path="/auth" component={AuthRouter} />
        {/* Main Route */}
        <Route exact path="/" component={JournalScreen} />
        <Redirect to={"/auth"} />
      </Switch>
    </BrowserRouter>
  );
};
