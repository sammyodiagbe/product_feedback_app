import { useState } from "react";
import hamBurgerImage from "../assets/shared/mobile/icon-hamburger.svg";
import closeImage from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";

const Nav = (showNavigation) => {
  const [showSidebar, toggleSidebar] = useState(false);
  return showNavigation ? (
    <nav className="pf-navigation">
      <div className="pf-navigation-title-container">
        <h3>Frontend Mentor</h3>
        <h4>Feedback Board</h4>
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
            onClick={() => toggleSidebar(true)}
          >
            <img src={closeImage} alt="navigation trigger hamburger" />
          </button>
        )}
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
        <div className="pf-roadmap"></div>
      </div>
    </nav>
  ) : null;
};

export default Nav;
