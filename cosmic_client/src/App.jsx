import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../page/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
