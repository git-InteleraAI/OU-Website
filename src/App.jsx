import { useEffect } from "react";
import "./App.css";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Infrastructure from "./sections/Infrastructure";
import Contact from "./sections/Contact";
import Opportunities from "./sections/Opportunities";
import Team from "./sections/Team";
import Publications from "./sections/Publications";
import ResearchConsultancy from "./sections/ResearchConsultancy";
import CoursesWorkshops from "./sections/CoursesWorkshops";

const PlaceholderPage = ({ title }) => {
  return (
    <main className="placeholder-page">
      <div className="placeholder-page-inner">
        <span>CAIIC</span>

        <h1>{title}</h1>

        <p>
          Content for this section will be added soon.
        </p>
      </div>
    </main>
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="app">

      <Header />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/research-consultancy"
          element={<ResearchConsultancy />}
        />

        <Route
          path="/courses-workshops"
          element={<CoursesWorkshops />}
        />

        <Route
          path="/publications"
          element={<Publications />}
        />

        <Route
          path="/infrastructure"
          element={<Infrastructure />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        <Route
          path="/opportunities"
          element={<Opportunities />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </div>
  );
}

export default App;