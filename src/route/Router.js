import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Schools from "../components/Schools";
import Users from "../components/Users";
import ErrorPage from "../components/ErrorPage";
import School from "../components/School";

// let Home = lazy(() => import("../components/Home"));
// let About = lazy(() => import("../components/About"));

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="schools" element={<Schools />}>
          <Route path=":sch" element={<School />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
