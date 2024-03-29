import {
  useRouteError,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
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

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <ErrorPage />;
}

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
        <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
        <Route
          path="/projects/:projectsId"
          element={<Projects />}
          errorElement={<ErrorBoundary />}
        />
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
        <Route
          path="*"
          element={<ErrorPage />}
          errorElement={<ErrorBoundary />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;
