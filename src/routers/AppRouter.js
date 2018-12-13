import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../App";
import ProductDetailsPage from "../components/ProductDetails/ProductDetails";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/todos/:id" component={ProductDetailsPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
