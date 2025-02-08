import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Employee from "./pages/Employee/";
import Error from "./components/Error/";
import store from "./redux/store";
import { Provider } from "react-redux";
import { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <StyleSheetManager shouldForwardProp={isValidProp}>
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </StyleSheetManager>
    </Provider>
  );
}

export default App;
