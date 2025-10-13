import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut, isAdmin, isEditor, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                User Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Email:</p>
              <p className="font-medium mb-4">{user.email}</p>
              
              <p className="text-sm text-muted-foreground mb-2">Role:</p>
              <div className="flex gap-2">
                {isAdmin && (
                  <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                    Admin
                  </span>
                )}
                {isEditor && !isAdmin && (
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                    Editor
                  </span>
                )}
                {!isAdmin && !isEditor && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                    No Role Assigned
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ Management</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isAdmin || isEditor 
                  ? 'FAQ editor and manager will be available here.'
                  : 'You need admin or editor role to manage FAQs.'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isAdmin || isEditor
                  ? 'Category management will be available here.'
                  : 'You need admin or editor role to manage categories.'}
              </p>
            </CardContent>
          </Card>
        </div>

        {!isAdmin && !isEditor && (
          <Card className="border-orange-500 bg-orange-50 dark:bg-orange-950">
            <CardHeader>
              <CardTitle className="text-orange-700 dark:text-orange-300">
                Role Assignment Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-4">
                Your account doesn't have an assigned role yet. Please contact the system administrator
                to grant you admin or editor permissions.
              </p>
              <p className="text-xs text-orange-600 dark:text-orange-400">
                Your user ID: <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">{user.id}</code>
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
