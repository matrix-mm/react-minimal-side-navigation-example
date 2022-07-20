import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SelectedPage from "./selected";
import WorksPage from "./works";
import ArchitecturePage from "./architecture";
import InteriorPage from "./interior";
import TeamsPage from "./teams";
import StudioPage from "./studio";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/works/selected">
          <SelectedPage />
        </Route>
        <Route path="/works/architecture">
          <ArchitecturePage />
        </Route>
        <Route path="/works/interior">
          <InteriorPage />
        </Route>
        <Route path="/works">
          <WorksPage />
        </Route>
        <Route path="/studio/teams">
          <TeamsPage />
        </Route>
        <Route path="/studio">
          <StudioPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
