import { Calendar, Clock, MapPin, Home as HomeIcon, Phone, Mail } from 'lucide-react';

export function EventDetails() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Event Details
          </h1>
          <p className="text-gray-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Everything you need to know about Scarlett Ember's baptism
          </p>
        </div>

        <div className="grid gap-6">
          {/* Baptism Service */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Baptism Ceremony
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">Saturday, June 14, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">7:00 AM</p>
                      <p className="text-sm text-gray-600">Please arrive 15 minutes early</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">UCCP Bonifacio Street</p>
                      <p className="text-sm text-gray-600">United Church of Christ in the Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                The ceremony will include traditional baptismal rites, prayers, and blessings. Expected duration: 1 hour.
              </p>
            </div>
          </div>

          {/* Reception */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-lg">
                <HomeIcon className="w-8 h-8 text-pink-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Reception
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">AvenYou</p>
                      <p className="text-sm text-gray-600">Along Matina Aplaya Road</p>
                      <p className="text-sm text-gray-600">(in front of Duke Spa / Queensland)</p>
                      <p className="text-sm text-gray-600">Davao City, Philippines 8000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pink-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">Following the ceremony</p>
                      <p className="text-sm text-gray-600">Approximately 9:00 AM onwards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Join us for light refreshments, fellowship, and celebration. We look forward to sharing this joyous occasion with you!
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl text-purple-800 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Questions?
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <p className="text-gray-700">Contact the family for more information</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <p className="text-gray-700">Please RSVP by June 7, 2026</p>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Dress Code
            </h2>
            <p className="text-gray-700" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Semi-formal attire suggested. Please dress comfortably for a morning ceremony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
