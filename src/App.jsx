import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./components/Welcome";
// import Onboarding from "./pages/Onboarging";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/onboard" exact element={<Onboarding />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
