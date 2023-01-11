import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions";

function App() {
  return (
    <Router>
      <div className="product-app-container">
        <Routes>
          {/* the routes go here */}
          <Route exact path="/" element={<Suggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
