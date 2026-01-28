import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollRestoration } from './components/ScrollRestoration';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { CaseStudy } from './pages/CaseStudy';
import { Experience } from './pages/Experience';
import { TechStack } from './pages/TechStack';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollRestoration />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<CaseStudy />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
