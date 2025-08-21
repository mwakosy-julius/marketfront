import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "./App.css";
import BioinformaticsMarketplace from "./pages";

function App() {
  console.log("App component is rendering"); // Add this for debugging

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BioinformaticsMarketplace />} />
          <Route path="/marketplace" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
