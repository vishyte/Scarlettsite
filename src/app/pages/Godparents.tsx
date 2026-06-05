export function Godparents() {
  const ninongs = [
    { name: 'Jerwin Carreon', relation: '' },
    { name: 'Andrew Española', relation: '' },
    { name: 'Giovanni Jude L. Sans', relation: '' },
    { name: 'Michael Angelo A. Limosnero', relation: '' },
    { name: 'Rezon Jay Tabigue', relation: '' },
    { name: 'Ulysses R. Goc-on II', relation: '' },
  ];

  const ninangs = [
    { name: 'Dharlyn Mae Manuel Erojo', relation: '' },
    { name: 'Juvy Orilla Belleza', relation: '' },
    { name: 'Faith Villar Momo', relation: '' },
    { name: 'Cladilyn Sacro', relation: '' },
    { name: 'Ybrille P. Santarin', relation: '' },
    { name: 'Anne Carlyle Vocal', relation: '' },
    { name: 'Maryl Malabad', relation: '' },
    { name: 'Ina D Garcia', relation: '' },
    { name: 'Jane E Luzon', relation: '' },
    { name: 'Van Cexel Canoos', relation: '' },
    { name: 'Vaniza Milan', relation: '' },
    { name: 'Quay Princess Pangcoga', relation: '' },
    { name: 'Porferia Pugosa', relation: '' },
    { name: 'Renee Rose Reginio', relation: '' },
    { name: 'Crisarrah D Agne', relation: '' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Godparents
          </h1>
          <p className="text-gray-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            With gratitude, we honor those who will guide Scarlett Ember in faith
          </p>
        </div>

        {/* Important Announcement */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-xl p-6 mb-8 animate-pulse">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Important Announcement
              </h3>
              <p className="text-white/90 mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                All godparents are required to attend:
              </p>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-lg mb-1"><strong>Counselling Session</strong></p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <span>📅 June 6, 2026</span>
                  <span>🕐 9:00 AM</span>
                  <span>📍 UCCP Bonifacio Street</span>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-3 italic">
                Please mark your calendars and arrive on time. Your presence is essential.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ninongs */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl text-purple-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Ninongs
              </h2>
            </div>

            <div className="space-y-4">
              {ninongs.map((ninong, index) => (
                <div
                  key={index}
                  className="border-l-4 border-purple-300 pl-4 py-2 bg-gradient-to-r from-purple-50/50 to-transparent"
                >
                  <p className="text-lg text-gray-800">{ninong.name}</p>
                  {ninong.relation && (
                    <p className="text-sm text-gray-600 italic">{ninong.relation}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ninangs */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl text-purple-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Ninangs
              </h2>
            </div>

            <div className="space-y-4">
              {ninangs.map((ninang, index) => (
                <div
                  key={index}
                  className="border-l-4 border-pink-300 pl-4 py-2 bg-gradient-to-r from-pink-50/50 to-transparent"
                >
                  <p className="text-lg text-gray-800">{ninang.name}</p>
                  {ninang.relation && (
                    <p className="text-sm text-gray-600 italic">{ninang.relation}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-lg p-6 sm:p-8 text-center">
          <p className="text-lg text-gray-700 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            We are blessed and grateful for your presence in Scarlett Ember's spiritual journey.
            Thank you for accepting this sacred responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
