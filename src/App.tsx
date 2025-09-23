import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import Analytics from "@/components/seo/Analytics";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
