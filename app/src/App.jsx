import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Employee from "./pages/Employee/";
import Error from "./components/Error/";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
