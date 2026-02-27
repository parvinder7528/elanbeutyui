import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

/* 🌐 WEBSITE */
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Regents from "./components/Regents";
import Nundah from "./components/location/Nundah";
import Headspa from "./components/booking/Headspa"
/* 🔐 ADMIN */
import AdminLogin from "./components/booking/AdminLogin";
import DashboardLayout from "./components/admin/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import UsersPage from "./pages/admin/UsersPage";
import ServicesPage from "./pages/admin/ServicesPage";
import RatingsPage from "./pages/admin/RatingsPage";
import CMSPage from "./pages/admin/CMSPage";
import SettingsPage from "./pages/admin/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        {/* 🌐 WEBSITE */}
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations/regents-park" element={<Regents />} />
        <Route path="/locations/nundah" element={<Nundah />} />
        <Route path="/head-spa" element={<Headspa />} />
        {/* 🔐 ADMIN LOGIN (NO SIDEBAR) */}
        <Route path="/admin">
          <Route index element={<AdminLogin />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>

        {/* 🔐 ADMIN DASHBOARD (WITH SIDEBAR) */}
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/dashboard/users" element={<UsersPage />} />
          <Route path="/admin/dashboard/services" element={<ServicesPage />} />
          <Route path="ratings" element={<RatingsPage />} />
          <Route path="cms" element={<CMSPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* ❌ 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
