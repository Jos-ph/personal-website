import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 md:p-8 mb-16">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">🔥</span>
        <div>
          <h3 className="font-bold text-stone-900 text-lg">Want to learn more about my work?</h3>
          <p className="text-stone-600 text-sm mt-1 max-w-md">
            Contact me below and I'll be in touch with you.
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
        <input 
          type="email" 
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-stone-800 placeholder:text-stone-400 bg-white"
          required
        />
        <button 
          type="submit"
          className="px-6 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-lg shadow-sm shadow-orange-200 transition-colors whitespace-nowrap"
        >
          Contact
        </button>
      </form>
    </div>
  );
};

export default Newsletter;