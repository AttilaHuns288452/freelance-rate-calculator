import RateCalculator from "@/components/RateCalculator";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Freelance Lifestyle Calculator | Design Your Ideal Freelance Life",
  description: "Not just a rate calculator—a lifestyle designer. Tell us your target income, hours, and time off, and we'll tell you exactly what to charge to make it real.",
  robots: "index, follow",
  alternates: {
    canonical: "https://freelancecalculator.xyz",
  },
  openGraph: {
    title: "Freelance Lifestyle Calculator | Design Your Ideal Freelance Life",
    description: "Not just a rate calculator—a lifestyle designer. Tell us your target income, hours, and time off, and we'll tell you exactly what to charge.",
    type: "website",
    url: "https://freelancecalculator.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Lifestyle Calculator",
    description: "Design your ideal freelance life. Calculate your true minimum rate.",
  },
};

export default function Home() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the freelance lifestyle calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It's a tool that calculates your true minimum freelance rate based on your desired lifestyle—target income, weekly hours, time off, expenses, and risk tolerance. Unlike simple rate calculators, it factors in self-employment tax, health insurance, retirement, and non-billable time to give you a realistic rate that supports your actual life.",
              },
            },
            {
              "@type": "Question",
              name: "How is my freelance rate calculated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator starts with your target annual take-home pay, adds self-employment tax (15.3%), income tax, health insurance, retirement contributions, and business expenses. It then divides by your billable hours (which accounts for unpaid time off, holidays, and non-billable admin time), and adds a risk buffer. The result is your true minimum hourly rate.",
              },
            },
            {
              "@type": "Question",
              name: "Why do most freelancers undercharge?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most freelancers set rates based on what they earned as employees divided by 2,080 hours. This ignores self-employment tax (15.3%), health insurance ($400-1,200/month), retirement (no employer match), unpaid time off (4+ weeks), business expenses, and non-billable time (admin, marketing, sales). The gap between an employee salary and equivalent freelance revenue is typically 30-50% higher than people expect.",
              },
            },
            {
              "@type": "Question",
              name: "What's the difference between hourly rate and day rate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Your hourly rate is your minimum per-hour charge. Your day rate is typically 5-6x your hourly rate (not 8x), accounting for non-billable moments during a workday. Use hourly for uncertain-scope work, day rate for defined deliverables. See our day rate vs hourly guide for a full breakdown.",
              },
            },
            {
              "@type": "Question",
              name: "How much should I set aside for self-employment tax?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Plan to set aside 25-35% of each payment for federal and state taxes. Self-employment tax alone is 15.3% (12.4% Social Security + 2.9% Medicare). Your income tax bracket adds on top. The calculator includes this automatically in your rate.",
              },
            },
            {
              "@type": "Question",
              name: "Should I use this calculator if I'm a part-time freelancer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes—in fact, it's even more important for part-time freelancers. With fewer billable hours, you need a higher hourly rate to cover the same fixed costs (equipment, insurance, retirement). The calculator accounts for this automatically when you adjust your weekly hours.",
              },
            },
            {
              "@type": "Question",
              name: "How often should I recalculate my rate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "At minimum once per quarter or whenever your costs change significantly—new insurance plan, moved to a higher-cost area, added business software, or gained new skills that command a premium. Market rates also shift annually, so an annual review is essential.",
              },
            },
          ],
        }),
      }} />
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

        {/* How this calculation works */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <details open className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <summary className="text-xl font-bold text-gray-900 cursor-pointer select-none">
              How This Calculation Works
            </summary>
            <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
              <p>
                Most freelancers set their rates by picking a number that "feels right" — roughly what they earned as an employee, divided by 2,080 hours. That number is almost always <strong>30-50% too low</strong> because it ignores the real costs of being self-employed.
              </p>
              <p>
                This calculator takes a different approach. Instead of guessing, it works backward from <strong>the life you actually want</strong> and calculates the rate required to fund it.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 1: Your Target Take-Home Pay</h3>
              <p>
                Start with how much money you want in your bank account each year — after all taxes. This is your lifestyle number: living expenses, savings, travel, everything.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 2: Self-Employment Tax (15.3%)</h3>
              <p>
                Employees split FICA taxes with their employer (7.65% each). As a freelancer, you pay both halves: 12.4% for Social Security and 2.9% for Medicare. On $100,000 of net income, that's $15,300 in SE tax alone. However, you can deduct the employer-equivalent half on your Form 1040. The calculator handles all of this automatically.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 3: Federal &amp; State Income Tax</h3>
              <p>
                Your effective tax rate depends on your total income and location. The calculator uses your combined federal + state rate to ensure your take-home target accounts for every tax dollar owed. Most freelancers in the $50k–$150k range should plan for an effective rate of 18-28% federal plus state.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 4: Health Insurance</h3>
              <p>
                One of the biggest expenses employees never see. Marketplace plans for individuals run $400–$1,200/month; family plans $1,200–$2,500+. This is fully deductible as an above-the-line deduction, but you still need to earn the money first. The calculator adds the full premium cost before tax benefits.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 5: Retirement Contributions</h3>
              <p>
                No employer match? You become your own retirement plan. A Solo 401(k) allows up to $70,000 in contributions for 2026 (under 50), or a SEP-IRA at 25% of net earnings. The calculator treats this as a required business expense — because your future self will thank you.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 6: Business Expenses &amp; Equipment</h3>
              <p>
                Software subscriptions, hardware, home office, internet, phone, professional development, insurance, legal and accounting fees — these add up to $5,000–$20,000+ annually. The calculator includes your monthly total.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 7: The Billable Hours Reality</h3>
              <p>
                This is where most freelancers get the math wrong. A 40-hour work week isn't 40 billable hours. Realistically, freelancers spend time on admin, proposals, marketing, emails, networking, and learning. <strong>15–25 billable hours per week is the realistic range</strong> for most independent professionals.
              </p>
              <p>
                Add in the 4+ weeks of unpaid time off that employees get as a benefit, and you're suddenly dividing your costs by 48 weeks of 20 billable hours (960 hours/year) instead of 52 weeks of 40 hours (2,080 hours). That's a 54% reduction in earning time — which means your rate needs to be more than double what the simple math suggests.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Step 8: Risk Buffer (10–20%)</h3>
              <p>
                Clients pay late. Projects get cancelled. Equipment breaks. Markets shift. Freelancers don't have unemployment insurance. A 10–20% risk buffer protects you from the inevitable bumps in self-employment. The calculator adds this on top of everything else.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">The Final Formula</h3>
              <p className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                Minimum Rate = (Target Take-Home + SE Tax + Income Tax + Health Insurance + Retirement + Expenses + Risk Buffer) ÷ (Weekly Billable Hours × (52 - Weeks Off))<br />
                <br />
                Then adds: Day Rate (5.5x hourly) · Project Minimum (20x hourly) · Annual Revenue Target
              </p>
              <p className="text-sm text-gray-500">
                <strong>Use it quarterly</strong> — rates should evolve as your skills and costs do.
              </p>
            </div>
          </details>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 pb-6">
          <details className="bg-white rounded-xl shadow-sm border border-gray-200">
            <summary className="text-xl font-bold text-gray-900 cursor-pointer select-none p-6">
              Frequently Asked Questions
            </summary>
            <div className="px-6 pb-6 space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">What is the freelance lifestyle calculator?</h3>
                <p className="mt-1">It's a tool that calculates your true minimum freelance rate based on your desired lifestyle — target income, weekly hours, time off, expenses, and risk tolerance. Unlike simple rate calculators, it factors in self-employment tax, health insurance, retirement, and non-billable time.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">How is my freelance rate calculated?</h3>
                <p className="mt-1">The calculator starts with your target annual take-home pay, adds self-employment tax (15.3%), income tax, health insurance, retirement contributions, and business expenses. It then divides by your billable hours and adds a risk buffer.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Why do most freelancers undercharge?</h3>
                <p className="mt-1">Most set rates based on employee salary ÷ 2,080 hours, which ignores self-employment tax (15.3%), health insurance, no retirement match, unpaid time off, business expenses, and non-billable time. The real gap is typically 30-50% higher than most expect.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">How much should I set aside for taxes?</h3>
                <p className="mt-1">Plan for 25-35% of each payment for federal and state taxes. Self-employment tax alone is 15.3% (12.4% Social Security + 2.9% Medicare). The calculator includes this automatically.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Should I use this as a part-time freelancer?</h3>
                <p className="mt-1"><strong>Yes, even more important.</strong> With fewer billable hours, you need a higher hourly rate to cover the same fixed costs. The calculator handles this automatically.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">How often should I recalculate?</h3>
                <p className="mt-1">At minimum quarterly, or whenever costs change — new insurance, moved, added software, or gained skills. Annual review is essential.</p>
              </div>
            </div>
          </details>
        </section>

        {/* Blog interlinking section */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Freelance Guides & Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/blog/freelancer-vs-employee-cost-comparison-2026" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Freelancer vs Employee 2026</h3>
              <p className="text-sm text-gray-600">The true financial comparison with current numbers.</p>
            </Link>
            <Link href="/blog/self-employment-tax-guide-2026" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Self-Employment Tax 2026</h3>
              <p className="text-sm text-gray-600">Complete guide to SE tax, brackets, and quarterly payments.</p>
            </Link>
            <Link href="/blog/freelance-pricing-strategies-value-based" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Pricing Strategies</h3>
              <p className="text-sm text-gray-600">Hourly vs value-based vs project-based pricing.</p>
            </Link>
            <Link href="/blog/freelance-retainer-rate-calculator-templates" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Retainer Rate Guide</h3>
              <p className="text-sm text-gray-600">Calculate retainers with templates and formulas.</p>
            </Link>
            <Link href="/blog/freelance-hourly-rate-calculator-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Rate Calculator Guide</h3>
              <p className="text-sm text-gray-600">Step-by-step to calculate your true hourly rate.</p>
            </Link>
            <Link href="/blog/how-much-to-charge-freelancer-day-rate-vs-hourly" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Day Rate vs Hourly</h3>
              <p className="text-sm text-gray-600">Which pricing model earns you more?</p>
            </Link>
            <Link href="/blog/freelance-tax-deductions-calculator-write-offs" className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-700 mb-1">Tax Deductions Guide</h3>
              <p className="text-sm text-gray-600">Maximize your freelance tax write-offs.</p>
            </Link>
          </div>
          <div className="text-center mt-6 flex justify-center gap-4">
            <Link href="/blog" className="text-blue-600 hover:underline text-sm font-medium">View all guides →</Link>
            <Link href="/resources" className="text-blue-600 hover:underline text-sm font-medium">Freelance Tools →</Link>
            <Link href="/about" className="text-blue-600 hover:underline text-sm font-medium">About →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
