import "./App.css";

import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Infrastructure from "./sections/Infrastructure";

const PlaceholderPage = ({ title }) => {
  return (
    <main className="placeholder-page">
      <div className="placeholder-page-inner">
        <span>CAIIC</span>

        <h1>
          {title}
        </h1>

        <p>
          Content for this section will be added soon.
        </p>
      </div>
    </main>
  );
};

function App() {
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
          element={
            <PlaceholderPage title="R&D / Consultancy" />
          }
        />

        <Route
          path="/courses-workshops"
          element={
            <PlaceholderPage title="Courses / Workshops" />
          }
        />

        <Route
          path="/publications"
          element={
            <PlaceholderPage title="Publications" />
          }
        />

        <Route
          path="/infrastructure"
          element={<Infrastructure />}
        />

        <Route
          path="/team"
          element={
            <PlaceholderPage title="Team" />
          }
        />

        <Route
          path="/opportunities"
          element={
            <PlaceholderPage title="Opportunities" />
          }
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={
            <PlaceholderPage title="Contact Us" />
          }
        />

      </Routes>

    </div>
  );
}

export default App;