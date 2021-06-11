import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./HeaderWithBackground9.css";

function HeaderWithBackground9(props) {
  const {
    place,
    unselectedI2601234,
    projects,
    unselectedI26012342,
    unselectedI26012343,
    unselectedI26012344,
    unselectedI26012345,
    unselectedI26012346,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="selected">
            <div className="overlap-group">
              <div className="rectangle-61"></div>
              <div className="place valign-text-middle">{place}</div>
            </div>
          </div>
          <div className="unselected-i2601234-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601234}
          </div>
          <img className="projects" src={projects} />
          <div className="unselected-i2601234-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012342}
          </div>
          <div className="unselected-i2601234-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012343}
          </div>
          <div className="unselected-i2601234-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012344}
          </div>
          <div className="unselected-i2601234-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012345}
          </div>
          <div className="unselected-i2601234 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012346}
          </div>
        </div>
        <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
      </div>
    </div>
  );
}

export default HeaderWithBackground9;
