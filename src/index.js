/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// import AuthLayout from "./Auth.js";
import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";
// import RTLLayout from "layouts/RTL.js";

const token = localStorage.getItem("token");

ReactDOM.render(
  <HashRouter>
    {token ? (
      <Switch>
        {/* <Route path={`/auth`} component={AuthLayout} /> */}
        <Route path={`/admin`} component={AdminLayout} />
        {/* <Route path={`/rtl`} component={RTLLayout} /> */}
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    ) : (
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Redirect from={`/`} to="/auth/signin" />
      </Switch>
    )}
  </HashRouter>,
  document.getElementById("root")
);
