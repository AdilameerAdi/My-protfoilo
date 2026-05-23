import Home from "../frontend/Home/Home";
import { useState, useEffect } from "react";
import First from "../frontend/About/first";
import ContactHeader from "../frontend/Home/contactHeader";
import Index from "../frontend/Contact";
import Main from "../frontend/support/Main";
import ServiceDetail from "../frontend/support/ServiceDetail";
import SupportPage from "../frontend/services/SupportPage";
import Portfolio from "../frontend/Portfolio/main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function AppContent() {
    return (
      <>
        <ContactHeader />
        <Navbar
          active={active}
          setActive={setActive}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <div className="min-h-screen fade-in-page">
          {active === "Home" && <Home />}
          {active === "About" && <First onContactClick={() => setActive("Contact")} />}
          {active === "Contact" && <Index />}
          {active === "Support" && <SupportPage />}
        </div>
      </>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Main />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
