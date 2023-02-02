import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions";
import DataContextProvider from "./context/dataContext";
import FeedBackDetails from "./pages/feedback_details";
import NewFeedback from "./pages/new_feedback";
import EditFeedback from "./pages/edit_feedback";
import RoadMap from "./pages/roadmap";
import Snackbar from "./components/snackbar";
import NotificationContextWrapper from "./context/notificationContext";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <NotificationContextWrapper>
          <Snackbar />
          <div className="product-app-container">
            <Routes>
              {/* the routes go here */}
              <Route exact path="/" element={<Suggestions />} />
              <Route exact path="/feedback/:id" element={<FeedBackDetails />} />
              <Route exact path="/new-feedback" element={<NewFeedback />} />
              <Route
                exact
                path="/edit-feedback/:id"
                element={<EditFeedback />}
              />
              <Route exact path="/roadmap" element={<RoadMap />} />
            </Routes>
          </div>
        </NotificationContextWrapper>
      </DataContextProvider>
    </Router>
  );
}

export default App;
