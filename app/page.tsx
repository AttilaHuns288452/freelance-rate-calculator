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

const BLOG_POSTS = [
  { slug: "freelancer-vs-employee-cost-comparison-2026", title: "Freelancer vs Employee 2026", desc: "The true financial comparison with current numbers.", icon: "⚖️", color: "from-blue-500 to-blue-700" },
  { slug: "self-employment-tax-guide-2026", title: "Self-Employment Tax 2026", desc: "Complete guide to SE tax, brackets, and quarterly payments.", icon: "💰", color: "from-emerald-500 to-teal-700" },
  { slug: "freelance-pricing-strategies-value-based", title: "Pricing Strategies", desc: "Hourly vs value-based vs project-based pricing.", icon: "📈", color: "from-purple-500 to-violet-700" },
  { slug: "freelance-retainer-rate-calculator-templates", title: "Retainer Rate Guide", desc: "Calculate retainers with templates and formulas.", icon: "📋", color: "from-amber-500 to-orange-700" },
  { slug: "freelance-hourly-rate-calculator-guide", title: "Rate Calculator Guide", desc: "Step-by-step to calculate your true hourly rate.", icon: "🧮", color: "from-cyan-500 to-blue-700" },
  { slug: "how-much-to-charge-freelancer-day-rate-vs-hourly", title: "Day Rate vs Hourly", desc: "Which pricing model earns you more?", icon: "⏱️", color: "from-rose-500 to-pink-700" },
  { slug: "freelance-tax-deductions-calculator-write-offs", title: "Tax Deductions Guide", desc: "Maximize your freelance tax write-offs.", icon: "📑", color: "from-indigo-500 to-indigo-700" },
];

const METHODOLOGY_STEPS = [
  { num: "1", title: "Your Target Take-Home Pay", description: "Start with how much money you want in your bank account each year — after all taxes. This is your lifestyle number.", color: "bg-blue-500" },
  { num: "2", title: "Self-Employment Tax (15.3%)", description: "Employees split FICA taxes with their employer. As a freelancer, you pay both halves. On $100K net income, that's $15,300.", color: "bg-emerald-500" },
  { num: "3", title: "Federal & State Income Tax", description: "The calculator uses your combined federal + state rate to ensure every tax dollar is accounted for.", color: "bg-purple-500" },
  { num: "4", title: "Health Insurance", description: "Marketplace plans run $400–$2,500/month. This is fully deductible but you still need to earn it first.", color: "bg-amber-500" },
  { num: "5", title: "Retirement Contributions", description: "Solo 401(k) allows up to $70,000 in contributions. You're your own retirement plan now.", color: "bg-rose-500" },
  { num: "6", title: "Business Expenses", description: "Software, hardware, home office — these add up to $5K–$20K+ annually.", color: "bg-cyan-500" },
  { num: "7", title: "Billable Hours Reality", description: "15–25 billable hours/week is realistic. The rest is admin, proposals, and marketing.", color: "bg-indigo-500" },
  { num: "8", title: "Risk Buffer (10–20%)", description: "Clients pay late, projects get cancelled. Freelancers don't have unemployment insurance.", color: "bg-orange-500" },
];

const FAQS = [
  { q: "What is the freelance lifestyle calculator?", a: "It's a tool that calculates your true minimum freelance rate based on your desired lifestyle — target income, weekly hours, time off, expenses, and risk tolerance. Unlike simple rate calculators, it factors in self-employment tax, health insurance, retirement, and non-billable time." },
  { q: "How is my freelance rate calculated?", a: "The calculator starts with your target annual take-home pay, adds self-employment tax (15.3%), income tax, health insurance, retirement contributions, and business expenses. It then divides by your billable hours and adds a risk buffer." },
  { q: "Why do most freelancers undercharge?", a: "Most set rates based on employee salary ÷ 2,080 hours, ignoring self-employment tax (15.3%), health insurance, no retirement match, unpaid time off, business expenses, and non-billable time. The real gap is typically 30–50% higher than most expect." },
  { q: "How much should I set aside for taxes?", a: "Plan for 25–35% of each payment for federal and state taxes. Self-employment tax alone is 15.3% (12.4% Social Security + 2.9% Medicare)." },
  { q: "How often should I recalculate?", a: "At minimum quarterly, or whenever costs change — new insurance, moved, added software, or gained skills. Annual review is essential." },
];

export default function Home() {
  return (
    <>
      {/* FAQPage Schema */}
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }} />

      <main className="flex-1">
        {/* ═══ HERO HEADER ═══ */}
        <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 relative">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Design Your Ideal<br className="hidden sm:block" />
              <span className="text-blue-200">Freelance Life</span>
            </h1>
            <p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              This isn&apos;t a rate calculator. It&apos;s a <strong className="text-white">lifestyle designer</strong>.
              Tell us the life you want — how much income, how many hours, how much time off —
              and we&apos;ll tell you <strong className="text-white">exactly what to charge</strong> to make it real.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1">✅ 100% free</span>
              <span className="flex items-center gap-1">🔒 No signup needed</span>
              <span className="flex items-center gap-1">📊 Updated for 2026</span>
            </div>
          </div>
        </header>

        {/* ═══ CALCULATOR ═══ */}
        <section id="calculator">
          <RateCalculator />
        </section>

        {/* ═══ GUIDES & RESOURCES — Moved up here so people see it! ═══ */}
        <section id="guides" className="max-w-5xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Freelance Guides & Resources</h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto">Master your freelance finances with our comprehensive guides — from taxes to pricing strategies.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map(({ slug, title, desc, icon, color }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group relative block p-5 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${color}`} />
                <div className="relative">
                  <span className="text-2xl mb-2 block">{icon}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              View All Guides <span>→</span>
            </Link>
            <Link href="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
              Freelance Tools <span>→</span>
            </Link>
          </div>
        </section>

        {/* ═══ HOW THIS WORKS ═══ */}
        <section id="how-it-works" className="bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How This Calculation Works</h2>
              <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                Most freelancers set rates by guessing. We use an 8-step formula that factors in <strong className="text-gray-700">every real cost</strong> of being self-employed.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {METHODOLOGY_STEPS.map(({ num, title, description, color }) => (
                <div key={num} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className={`flex-shrink-0 w-10 h-10 ${color} text-white rounded-lg flex items-center justify-center font-bold text-sm`}>
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-xl text-center">
              <p className="text-sm text-blue-800 font-medium">
                The Formula: <code className="bg-blue-100 px-2 py-0.5 rounded text-xs">(Take-Home + SE Tax + Income Tax + Insurance + Retirement + Expenses + Buffer) ÷ Billable Hours</code>
              </p>
              <p className="text-xs text-blue-600 mt-2">
                Use it quarterly — rates should evolve as your skills and costs do.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ WHY FREELANCERS UNDERCHARGE ═══ */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold">Why Most Freelancers Undercharge by 30–50%</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The &ldquo;just divide by 2,080&rdquo; method ignores the hidden costs of self-employment:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Self-employment tax (15.3%) — employers normally pay half</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Health insurance ($400–$2,500/month) — employers cover 50–80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>No 401(k) match, no paid vacation, no sick days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Non-billable time (admin, marketing, proposals) eats 30–50% of your week</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Link href="/blog/freelancer-vs-employee-cost-comparison-2026" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                  See the Full Breakdown →
                </Link>
                <Link href="/blog/self-employment-tax-guide-2026" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  Tax Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section id="faq" className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm open:shadow-md transition-shadow group">
                  <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between list-none">
                    <span>{q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Ready to Design Your Freelance Life?</h2>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto">Use the calculator above, then dive into our guides to master every aspect of your freelance finances.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#calculator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                ↑ Back to Calculator
              </a>
              <Link href="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
                Browse Tools & Resources →
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-500 text-sm font-medium hover:text-blue-600 transition-colors">
                About This Site →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
