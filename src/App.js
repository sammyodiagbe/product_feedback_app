import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions";
import dataContext from "./context/dataContext";
import { useContext } from "react";

function App() {
  const data = useContext(dataContext);

  return (
    <Router>
      <dataContext.Provider value={data}>
        <div className="product-app-container">
          <Routes>
            {/* the routes go here */}
            <Route exact path="/" element={<Suggestions />} />
          </Routes>
        </div>
      </dataContext.Provider>
    </Router>
  );
}

export default App;
