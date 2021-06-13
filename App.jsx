import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HeaderWithBackground9 from "./components/HeaderWithBackground9";
import Frame144 from "./components/Frame144";
import "./globals.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|260_12349)">
        <div className="hidden-mobile">
          <HeaderWithBackground9  {...headerWithBackground9Data} />
          </div>
        <div className="hidden-desktop">
        <Frame144  {...frame144Data}/>
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const headerWithBackground9Data = {
    place: "HOME",
    unselectedI2601234: "ABOUT US",
    projects: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/projects@2x.png",
    unselectedI26012342: "VIDEOS",
    unselectedI26012343: "INSIGHTS",
    unselectedI26012344: "BLOGS",
    unselectedI26012345: "FAQ’S",
    unselectedI26012346: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton22Data,
};

const iconMenuData = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
  group86Props: group86Data,
  iconMenuProps: iconMenuData,
};