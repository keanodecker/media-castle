
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import LeistungenWebdesignPage from './pages/LeistungenWebdesignPage.jsx';
import LeistungenOnlinePrasenzPage from './pages/LeistungenOnlinePrasenzPage.jsx';
import LeistungenAnderePage from './pages/LeistungenAnderePage.jsx';
import PartnerPage from './pages/PartnerPage.jsx';
import UberUnsPage from './pages/UberUnsPage.jsx';
import KontaktPage from './pages/KontaktPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen/webdesign" element={<LeistungenWebdesignPage />} />
        <Route path="/leistungen/online-prasenz" element={<LeistungenOnlinePrasenzPage />} />
        <Route path="/leistungen/andere" element={<LeistungenAnderePage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/uber-uns" element={<UberUnsPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Seite nicht gefunden</p>
              <a 
                href="/" 
                className="btn-primary"
              >
                Zurück zur Startseite
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
