import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import PrimarySearchAppBar from "./NavBar";

const LoggedInRoutes = () => (
  <>
    <PrimarySearchAppBar />
    <Route exact path={"/home"} component={HomePage} />
    <Route path={"/profile/:username"} component={HomePage} />
  </>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={LoginPage} />
        <Route component={LoggedInRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
