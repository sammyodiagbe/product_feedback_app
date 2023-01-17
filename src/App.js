import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions";
import { useContext } from "react";
import DataContextProvider from "./context/dataContext";
import FeedBackDetails from "./pages/feedback_details";
import NewFeedback from "./pages/new_feedback";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <div className="product-app-container">
          <Routes>
            {/* the routes go here */}
            <Route exact path="/" element={<Suggestions />} />
            <Route exact path="/feedback/:id" element={<FeedBackDetails />} />
            <Route exact path="/new-feedback" element={<NewFeedback />} />
          </Routes>
        </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
