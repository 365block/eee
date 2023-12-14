import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Eight = React.lazy(() => import("pages/Eight"));
const Seven = React.lazy(() => import("pages/Seven"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
