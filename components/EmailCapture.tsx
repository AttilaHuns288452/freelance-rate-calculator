"use client";
export default function EmailCapture() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Get rate alerts">
      <label htmlFor="email-capture" className="sr-only">Email address</label>
      <input id="email-capture" type="email" placeholder="you@example.com" autoComplete="email" className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/60" />
      <button type="submit" className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors whitespace-nowrap">Get rate alerts</button>
    </form>
  );
}
