export function FloralBorder() {
  return (
    <>
      {/* Top Floral Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-40"></div>

      {/* Bottom Floral Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-40"></div>

      {/* Top Floral Pattern */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center -translate-y-1/2 pointer-events-none">
        <div className="bg-white px-6 py-2 rounded-full shadow-sm">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  color: i % 3 === 0 ? '#f0abfc' : i % 3 === 1 ? '#c4b5fd' : '#bfdbfe'
                }}
              >
                <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.8" />
                <circle cx="10" cy="5" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="10" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="5" cy="10" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="15" cy="10" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="13" cy="7" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="7" cy="13" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="13" cy="13" r="2" fill="currentColor" opacity="0.5" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Floral Pattern */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center translate-y-1/2 pointer-events-none">
        <div className="bg-white px-6 py-2 rounded-full shadow-sm">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  color: i % 3 === 0 ? '#bfdbfe' : i % 3 === 1 ? '#c4b5fd' : '#f0abfc'
                }}
              >
                <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.8" />
                <circle cx="10" cy="5" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="10" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="5" cy="10" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="15" cy="10" r="2.5" fill="currentColor" opacity="0.6" />
                <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="13" cy="7" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="7" cy="13" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="13" cy="13" r="2" fill="currentColor" opacity="0.5" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Side Floral Accents */}
      <div className="absolute top-1/4 left-0 w-16 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 50 100" className="w-full h-full">
          <circle cx="15" cy="25" r="8" fill="#f0abfc" />
          <circle cx="20" cy="40" r="10" fill="#c4b5fd" />
          <circle cx="15" cy="55" r="7" fill="#bfdbfe" />
          <circle cx="18" cy="70" r="9" fill="#f0abfc" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-16 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 50 100" className="w-full h-full">
          <circle cx="35" cy="25" r="8" fill="#bfdbfe" />
          <circle cx="30" cy="40" r="10" fill="#c4b5fd" />
          <circle cx="35" cy="55" r="7" fill="#f0abfc" />
          <circle cx="32" cy="70" r="9" fill="#bfdbfe" />
        </svg>
      </div>
    </>
  );
}
