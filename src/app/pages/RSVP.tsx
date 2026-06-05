import { useState } from 'react';
import { Check } from 'lucide-react';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: '1',
    dietaryRestrictions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        const message = data?.detail ? `${data?.error} (${data.detail})` : data?.error || 'Unable to send RSVP.';
        throw new Error(message);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-3xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Your RSVP has been received. We look forward to celebrating with you on June 14, 2026!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-purple-600 hover:text-purple-700 underline"
          >
            Submit another RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl text-purple-800 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            RSVP
          </h1>
          <p className="text-gray-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Please respond by June 7, 2026
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="(optional)"
              />
            </div>

            {/* Attendance */}
            <div>
              <label htmlFor="attendance" className="block text-sm text-gray-700 mb-2">
                Will you be attending? *
              </label>
              <select
                id="attendance"
                name="attendance"
                required
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, I can't make it</option>
              </select>
            </div>

            {/* Number of Guests */}
            {formData.attendance === 'yes' && (
              <>
                <div>
                  <label htmlFor="guests" className="block text-sm text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dietary Restrictions */}
                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-sm text-gray-700 mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Any allergies or dietary needs?"
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                Message for the Family
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                placeholder="Share your blessings and well wishes..."
              />
            </div>

            {/* Submit Button */}
            {error && (
              <p className="text-sm text-red-600 mb-4" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Submit RSVP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
