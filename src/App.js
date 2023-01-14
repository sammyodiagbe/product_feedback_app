import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions";
import { useContext } from "react";
import DataContextProvider from "./context/dataContext";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <div className="product-app-container">
          <Routes>
            {/* the routes go here */}
            <Route exact path="/" element={<Suggestions />} />
          </Routes>
        </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
