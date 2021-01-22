import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Details, Error, Home, NewCustomer } from "../screens";
import { Strings } from "../constants";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Strings.APPLICATION.ROUTES.HOME} exact component={Home} />
        <Route
          path={Strings.APPLICATION.ROUTES.NEW_CUSTOMER}
          component={NewCustomer}
        />
        <Route path={Strings.APPLICATION.ROUTES.DETAILS} component={Details} />
        <Route path={Strings.APPLICATION.ROUTES.ALL} component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
