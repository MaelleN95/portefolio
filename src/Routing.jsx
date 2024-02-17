import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';
import AdminHome from './pages/AdminHome';
import AdminProject from './pages/AdminProject';
import AdminAddProject from './pages/AdminAddProject';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectsId" element={<Projects />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/admin/MN95/projects" element={<AdminHome />} />
        <Route
          path="/admin/MN95/projects/:projectsId"
          element={<AdminProject />}
        />
        <Route
          path="/admin/MN95/projects/createProject"
          element={<AdminAddProject />}
        />
      </Routes>
    </Router>
  );
}

export default Routing;
