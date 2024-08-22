import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/") // GET request to back
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <div>
      <Router>
        <h1>Home</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Page1">P1</Link>
              </li>
              <li>
                <Link to="/Page2">P2</Link>
              </li>
            </ul>
          </nav>

          {/* Définir les Routes */}
          <Routes>
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
