import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router';
import { Home } from './pages/Home';
import { EventDetails } from './pages/EventDetails';
import { Godparents } from './pages/Godparents';
import { RSVP } from './pages/RSVP';
import { Gallery } from './pages/Gallery';
import { ButterflyDecoration } from './components/ButterflyDecoration';
import { EnvelopeAnimation } from './components/EnvelopeAnimation';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [envelopeComplete, setEnvelopeComplete] = useState(false);

  useEffect(() => {
    // Check if user has already seen the envelope
    const hasSeenEnvelope = sessionStorage.getItem('hasSeenEnvelope');
    if (hasSeenEnvelope === 'true') {
      setShowEnvelope(false);
      setEnvelopeComplete(true);
    }
  }, []);

  const handleEnvelopeComplete = () => {
    sessionStorage.setItem('hasSeenEnvelope', 'true');
    setEnvelopeComplete(true);
  };

  return (
    <HashRouter>
      {/* Envelope Opening Animation */}
      {showEnvelope && !envelopeComplete && (
        <EnvelopeAnimation onComplete={handleEnvelopeComplete} />
      )}

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Floating Butterflies */}
        <ButterflyDecoration className="fixed top-8 left-8 w-16 h-16 text-pink-300 opacity-50 z-0" />
        <ButterflyDecoration className="fixed top-12 right-12 w-20 h-20 text-purple-300 opacity-40 z-0" delay={1} />
        <ButterflyDecoration className="fixed bottom-8 right-8 w-16 h-16 text-blue-300 opacity-50 z-0" delay={2} />
        <ButterflyDecoration className="fixed bottom-12 left-12 w-18 h-18 text-pink-200 opacity-30 z-0" delay={1.5} />

        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<EventDetails />} />
            <Route path="/godparents" element={<Godparents />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/details', label: 'Details' },
    { path: '/godparents', label: 'Godparents' },
    { path: '/rsvp', label: 'RSVP' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="relative z-20 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-purple-400" viewBox="0 0 100 100" fill="currentColor">
              <ellipse cx="35" cy="45" rx="20" ry="30" transform="rotate(-20 35 45)" opacity="0.9" />
              <ellipse cx="30" cy="50" rx="12" ry="18" transform="rotate(-20 30 50)" opacity="0.7" />
              <ellipse cx="65" cy="45" rx="20" ry="30" transform="rotate(20 65 45)" opacity="0.9" />
              <ellipse cx="70" cy="50" rx="12" ry="18" transform="rotate(20 70 50)" opacity="0.7" />
              <ellipse cx="50" cy="50" rx="4" ry="15" fill="currentColor" opacity="1" />
            </svg>
            <span className="text-xl text-purple-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Scarlett Ember
            </span>
          </div>

          <div className="flex gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-all ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
