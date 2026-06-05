import { Link } from 'react-router';
import { FloralBorder } from '../components/FloralBorder';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-2xl">
        {/* Main Invitation Card */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Background Floral Image */}
          <div className="absolute inset-0 opacity-5">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614959627901-1f46e60a8a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floral Border */}
          <FloralBorder />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mb-4">
                <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-2">Baptism Invitation</p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto"></div>
              </div>

              <h1 className="text-5xl sm:text-6xl text-purple-800 mb-4 font-serif" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Scarlett Ember
              </h1>

              <p className="text-lg text-gray-600 italic mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                is being baptized in the name of the Father, Son, and Holy Spirit
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"></div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-400" />
                <p className="text-sm text-gray-600">June 14, 2026</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-lg">
                <Clock className="w-6 h-6 text-purple-400" />
                <p className="text-sm text-gray-600">7:00 AM</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50/50 to-pink-50/50 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400" />
                <p className="text-sm text-gray-600">UCCP Church</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/details"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl text-center"
              >
                View Details
              </Link>
              <Link
                to="/rsvp"
                className="px-8 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-all text-center"
              >
                RSVP Now
              </Link>
            </div>

            {/* Footer */}
            <div className="text-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-4"></div>
              <p className="text-gray-500 italic text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Your presence and blessings will make this day even more special
              </p>
            </div>
          </div>

          {/* Decorative Corner Flowers */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
              <circle cx="20" cy="20" r="15" fill="currentColor" />
              <circle cx="40" cy="15" r="12" fill="currentColor" />
              <circle cx="35" cy="35" r="10" fill="currentColor" />
              <circle cx="15" cy="40" r="13" fill="currentColor" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
              <circle cx="80" cy="80" r="15" fill="currentColor" />
              <circle cx="60" cy="85" r="12" fill="currentColor" />
              <circle cx="65" cy="65" r="10" fill="currentColor" />
              <circle cx="85" cy="60" r="13" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
