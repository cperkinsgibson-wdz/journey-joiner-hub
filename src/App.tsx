import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import QAIndex from "./pages/QAIndex";
import QACluster from "./pages/QACluster";
import QADetail from "./pages/QADetail";
import Enroll from "./pages/Enroll";
import FAQ from "./pages/FAQ";
import Workshop from "./pages/Workshop";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import IncomeDisclosure from "./pages/IncomeDisclosure";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import FAQManager from "./pages/admin/FAQManager";
import CategoryManager from "./pages/admin/CategoryManager";
import QAClusterManager from "./pages/admin/QAClusterManager";
import QAItemManager from "./pages/admin/QAItemManager";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const queryClient = new QueryClient();

import Analytics from "@/components/seo/Analytics";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Analytics />
            <Routes>
              {/* Admin routes (no layout) */}
              <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/faqs" element={<ProtectedRoute><FAQManager /></ProtectedRoute>} />
              <Route path="/admin/categories" element={<ProtectedRoute><CategoryManager /></ProtectedRoute>} />
              <Route path="/admin/qa-clusters" element={<ProtectedRoute><QAClusterManager /></ProtectedRoute>} />
              <Route path="/admin/qa-items" element={<ProtectedRoute><QAItemManager /></ProtectedRoute>} />
              
              {/* Public routes (with layout) */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team/catina-perkins" element={<Team />} />
                <Route path="/qa" element={<QAIndex />} />
                <Route path="/qa/cluster/:clusterNumber" element={<QACluster />} />
                <Route path="/qa/cluster/:clusterNumber/:slug" element={<QADetail />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/enroll" element={<Enroll />} />
                <Route path="/workshop" element={<Workshop />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/income-disclosure" element={<IncomeDisclosure />} />
                <Route path="/learn/blog" element={<BlogIndex />} />
                <Route path="/learn/blog/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
