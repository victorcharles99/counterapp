import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import CounterPage from "./Pages/CounterPage";
import Home from "./Pages/Home";
import "./index.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route>
            <Route path="counter" element={<CounterPage />} />
            <Route path="*" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
