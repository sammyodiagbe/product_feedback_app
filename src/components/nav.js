import { useState } from "react";
import hamBurgerImage from "../assets/shared/mobile/icon-hamburger.svg";
import closeImage from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";

const Nav = (showNavigation) => {
  const [showSidebar, toggleSidebar] = useState(false);
  return showNavigation ? (
    <nav className="pf-navigation">
      <div className="pf-navigation-title-container">
        <div className="pf-nav-left">
          <h3>Frontend Mentor</h3>
          <b>Feedback Board</b>
        </div>

        <div className="pf-navigation-trigger-container">
          {!showSidebar ? (
            <button
              className="pf-navigation-trigger"
              onClick={() => toggleSidebar(true)}
            >
              <img src={hamBurgerImage} alt="navigation trigger hamburger" />
            </button>
          ) : (
            <button
              className="pf-navigation-trigger"
              onClick={() => toggleSidebar(false)}
            >
              <img src={closeImage} alt="navigation trigger hamburger" />
            </button>
          )}
        </div>
      </div>
      <div className="pf-filter-roadmap-container">
        <div className="pf-filter">
          <Link>All</Link>
          <Link>UI</Link>
          <Link>UX</Link>
          <Link>Enhancement</Link>
          <Link>Bug</Link>
          <Link>Feature</Link>
        </div>
        <div className="pf-roadmap">
          <div className="pf-roadmap-head">
            <h1>Roadmap</h1>
            <Link>View</Link>
          </div>
          <div className="pf-roadmap-types">
            <div className="pf-roadmap-type">
              <span className="indicator orange"></span>
              <p className="planned">Planned</p>
              <b>2</b>
            </div>
            <div className="pf-roadmap-type">
              <span className="indicator purple"></span>
              <p className="planned">In-Progress</p>
              <b>3</b>
            </div>
            <div className="pf-roadmap-type">
              <span className="indicator blue"></span>
              <p className="planned">Live</p>
              <b>1</b>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Nav;
