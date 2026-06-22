import RateCalculator from "@/components/RateCalculator";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Design Your Ideal Freelance Life
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base max-w-2xl">
            This isn&apos;t a rate calculator. It&apos;s a <em className="font-semibold text-white">lifestyle designer</em>. 
            Tell us the life you want — how much income, how many hours, how much time off — 
            and we&apos;ll tell you exactly what to charge to make it real.
          </p>
        </div>
      </header>
      <RateCalculator />
      
      {/* Blog interlinking section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Freelance Guides & Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/blog/freelance-hourly-rate-calculator-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-700 mb-1">Rate Calculator Guide</h3>
            <p className="text-sm text-gray-600">Step-by-step guide to calculate your true freelance hourly rate.</p>
          </Link>
          <Link href="/blog/how-much-to-charge-freelancer-day-rate-vs-hourly" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-700 mb-1">Day Rate vs Hourly</h3>
            <p className="text-sm text-gray-600">Which pricing model earns you more? Pros and cons of each.</p>
          </Link>
          <Link href="/blog/freelance-tax-deductions-calculator-write-offs" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-700 mb-1">Tax Deductions Guide</h3>
            <p className="text-sm text-gray-600">Maximize your savings with our guide to freelance write-offs.</p>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link href="/blog" className="text-blue-600 hover:underline text-sm font-medium">View all guides →</Link>
        </div>
      </section>
    </main>
  );
}
