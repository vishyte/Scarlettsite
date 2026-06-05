import { ImageWithFallback } from '../components/ImageWithFallback';

export function Gallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1614959627901-1f46e60a8a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Delicate florals',
    },
    {
      url: 'https://images.unsplash.com/photo-1668446818060-8c743ecc0c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Butterfly elegance',
    },
    {
      url: 'https://images.unsplash.com/photo-1707324073460-9f311e083e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Purple & pink',
    },
    {
      url: 'https://images.unsplash.com/photo-1678732358498-2c7f32a9ec6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Celebration',
    },
    {
      url: 'https://images.unsplash.com/photo-1737779427010-ee2014c54230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Elegant decor',
    },
    {
      url: 'https://images.unsplash.com/photo-1565879629864-81e9ec5429a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Theme Preview - Butterfly motif',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Gallery
          </h1>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            A glimpse of the beautiful theme for Scarlett Ember's baptism
          </p>

          {/* Coming Soon Banner */}
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl text-purple-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Coming Soon!
              </h2>
            </div>
            <p className="text-gray-700 mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Photos from the Counselling Session (June 6, 2026) and Baptism Ceremony (June 14, 2026) will be uploaded here after the celebrations.
            </p>
            <p className="text-sm text-gray-600 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Check back soon to see the beautiful memories captured!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                <svg className="w-12 h-12 text-white/90 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Coming Soon!
                </h3>
                <p className="text-white/90 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Photos from the Counselling Session (June 6, 2026) and Baptism Ceremony (June 14, 2026) will be uploaded here after the celebrations.
                </p>
              </div>

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
                <p className="text-white text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Quote */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <svg className="w-12 h-12 text-purple-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-700 italic mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."
            </p>
            <p className="text-sm text-gray-500">Matthew 19:14</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-lg p-6 text-center">
          <p className="text-gray-700 mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The images above show our beautiful theme inspiration. Actual photos from the Counselling Session and Baptism Ceremony will be uploaded after the events.
          </p>
          <p className="text-sm text-purple-700" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            📅 Counselling: June 6, 2026 | Baptism: June 14, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
