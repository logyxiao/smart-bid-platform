import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Knowledge from "./pages/Knowledge";
import Projects from "./pages/Projects";
import Analysis from "./pages/Analysis";
import AnalysisDetail from "./pages/AnalysisDetail";
import Generation from "./pages/Generation";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:category" element={<Knowledge />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/analysis/:id" element={<AnalysisDetail />} />
          <Route path="/generation" element={<Generation />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
