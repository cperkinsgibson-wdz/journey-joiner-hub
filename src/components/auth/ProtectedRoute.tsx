import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'admin' | 'editor';
}

const ProtectedRoute = ({ children, requireRole }: ProtectedRouteProps) => {
  const { user, loading, isAdmin, isEditor } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (requireRole) {
    const hasRole =
      requireRole === 'admin' ? isAdmin :
      requireRole === 'editor' ? isEditor :
      false;

    if (!hasRole) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
