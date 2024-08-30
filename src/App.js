import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import CalculateSoma from "./CalculateSoma/CalculateSoma";
import Fibonacci from "./Fibonacci/Fibonacci";
import SequenceCalculator from "./SequenceCalculator/SequenceCalculator";
import StringAnalyzer from "./StringAnalyzer/StringAnalyzer";
import SwitchLampSimulator from "./SwitchLampSimulator/SwitchLampSimulator";
import "./App.scss"; // Importa o arquivo SCSS

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculate-soma">Calculate Soma</Link>
            </li>
            <li>
              <Link to="/fibonacci">Fibonacci</Link>
            </li>
            <li>
              <Link to="/sequence-calculator">Sequence Calculator</Link>
            </li>
            <li>
              <Link to="/string-analyzer">String Analyzer</Link>
            </li>
            <li>
              <Link to="/switch-lamp-simulator">Switch Lamp Simulator</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculate-soma"
            element={<CardWrapper component={<CalculateSoma />} />}
          />
          <Route
            path="/fibonacci"
            element={<CardWrapper component={<Fibonacci />} />}
          />
          <Route
            path="/sequence-calculator"
            element={<CardWrapper component={<SequenceCalculator />} />}
          />
          <Route
            path="/string-analyzer"
            element={<CardWrapper component={<StringAnalyzer />} />}
          />
          <Route
            path="/switch-lamp-simulator"
            element={<CardWrapper component={<SwitchLampSimulator />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to the React App</h1>
    <p className="home-description">
      Select a page from the navigation menu above.
    </p>
  </div>
);

const CardWrapper = ({ component }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="card">
      {component}
      <button className="back-button" onClick={handleBackButtonClick}>
        Back to Home
      </button>
    </div>
  );
};

export default App;
