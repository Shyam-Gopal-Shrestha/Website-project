import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "../component/LoginForm";
import SignupForm from "../component/SignupForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
