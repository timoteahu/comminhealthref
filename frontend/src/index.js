import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/output.css";
import "./css/landing.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Episodes,
  Footer,
  Home,
  About,
  Contact,
  Reviews,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:searchTag" element={<Episodes />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
