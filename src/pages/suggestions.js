import React from "react";
import Nav from "../components/nav";
import SubNav from "../components/subnav";

const Suggestions = () => {
  return (
    <React.Fragment>
      <Nav />
      <main className="pf-main-container">
        <SubNav />
      </main>
    </React.Fragment>
  );
};

export default Suggestions;
