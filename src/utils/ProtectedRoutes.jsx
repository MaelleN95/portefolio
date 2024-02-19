import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  if (!user) {
    alert("Accès non autorisé, retour vers la page d'accueil");
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
