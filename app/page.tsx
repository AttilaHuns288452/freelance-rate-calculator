import RateCalculator from "@/components/RateCalculator";

export default function Home() {
  return (
    <main className="flex-1">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Freelance Hourly Rate Calculator
          </h1>
          <p className="mt-1 text-gray-600 text-sm md:text-base">
            Stop guessing. Calculate what you <em className="font-medium">actually</em> need to charge —
            including taxes, benefits, expenses, and the non-billable time nobody talks about.
          </p>
        </div>
      </header>
      <RateCalculator />
    </main>
  );
}