import React, { useContext } from "react";
import Nav from "../components/nav";
import SubNav from "../components/subnav";
import dataContext from "../context/dataContext";
import NoSuggestion from "../components/no_suggestion";

const Suggestions = () => {
  const data = useContext(dataContext);
  const { suggestions } = data;
  return (
    <React.Fragment>
      <Nav />
      <main className="pf-main-container">
        <SubNav />
        <div className="pf-vertical-list">
          {!suggestions.length ? "" : <NoSuggestion />}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Suggestions;
