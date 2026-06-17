import RateCalculator from "@/components/RateCalculator";

export default function Home() {
  return (
    <main className="flex-1">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Design Your Ideal Freelance Life
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base max-w-2xl">
            This isn't a rate calculator. It's a <em className="font-semibold text-white">lifestyle designer</em>. 
            Tell us the life you want — how much income, how many hours, how much time off — 
            and we'll tell you exactly what to charge to make it real.
          </p>
        </div>
      </header>
      <RateCalculator />
    </main>
  );
}