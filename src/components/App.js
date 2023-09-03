import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/course" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
