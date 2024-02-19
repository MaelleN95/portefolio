import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useUser } from './lib/customHooks';

import ScrollToTop from './utils/ScrollToTop';
import ProtectedRoute from './utils/ProtectedRoutes';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';
import AdminHome from './pages/AdminHome';
import AdminProject from './pages/AdminProject';
import AdminAddProject from './pages/AdminAddProject';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function Routing() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <Router>
      <ScrollToTop />
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectsId" element={<Projects />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/admin/MN95/projects"
          element={
            <ProtectedRoute user={user}>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/MN95/projects/:projectsId"
          element={
            <ProtectedRoute user={user}>
              <AdminProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/MN95/projects/createProject"
          element={
            <ProtectedRoute user={user}>
              <AdminAddProject />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;
