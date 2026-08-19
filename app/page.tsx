import RateCalculator from "@/components/RateCalculator";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import AdBannerFreelance, { DirectLinkCta } from "@/components/AdBannerFreelance";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Freelance Lifestyle Calculator | Design Your Ideal Freelance Life",
  description: "Not just a rate calculator—a lifestyle designer. Tell us your target income, hours, and time off, and we'll tell you exactly what to charge to make it real.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz" },
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
  { slug: "freelancer-vs-employee-cost-comparison-2026", title: "Freelancer vs Employee 2026", desc: "The true financial comparison with current numbers.", icon: "⚖️", color: "from-blue-500 to-blue-700", cat: "Compare" },
  { slug: "self-employment-tax-guide-2026", title: "Self-Employment Tax 2026", desc: "Complete guide to SE tax, brackets, and quarterly payments.", icon: "💰", color: "from-emerald-500 to-teal-700", cat: "Taxes" },
  { slug: "freelance-pricing-strategies-value-based", title: "Pricing Strategies", desc: "Hourly vs value-based vs project-based pricing.", icon: "📈", color: "from-purple-500 to-violet-700", cat: "Pricing" },
  { slug: "freelance-retainer-rate-calculator-templates", title: "Retainer Rate Guide", desc: "Calculate retainers with templates and formulas.", icon: "📋", color: "from-amber-500 to-orange-700", cat: "Retainers" },
  { slug: "freelance-hourly-rate-calculator-guide", title: "Rate Calculator Guide", desc: "Step-by-step to calculate your true hourly rate.", icon: "🧮", color: "from-cyan-500 to-blue-700", cat: "Calculator" },
  { slug: "how-much-to-charge-freelancer-day-rate-vs-hourly", title: "Day Rate vs Hourly", desc: "Which pricing model earns you more?", icon: "⏱️", color: "from-rose-500 to-pink-700", cat: "Pricing" },
  { slug: "freelance-tax-deductions-calculator-write-offs", title: "Tax Deductions Guide", desc: "Maximize your freelance tax write-offs.", icon: "📑", color: "from-indigo-500 to-indigo-700", cat: "Taxes" },
];

const METHODOLOGY_STEPS = [
  { num: "1", title: "Your Target Take-Home Pay", description: "Start with how much money you want in your bank account each year — after all taxes. This is your lifestyle number.", color: "bg-blue-600" },
  { num: "2", title: "Self-Employment Tax (15.3%)", description: "Employees split FICA taxes with their employer. As a freelancer, you pay both halves. On $100K net income, that's $15,300.", color: "bg-emerald-600" },
  { num: "3", title: "Federal & State Income Tax", description: "The calculator uses your combined federal + state rate to ensure every tax dollar is accounted for.", color: "bg-violet-600" },
  { num: "4", title: "Health Insurance", description: "Marketplace plans run $400–$2,500/month. This is fully deductible but you still need to earn it first.", color: "bg-amber-600" },
  { num: "5", title: "Retirement Contributions", description: "Solo 401(k) allows up to $70,000 in contributions. You're your own retirement plan now.", color: "bg-rose-600" },
  { num: "6", title: "Business Expenses", description: "Software, hardware, home office — these add up to $5K–$20K+ annually.", color: "bg-cyan-600" },
  { num: "7", title: "Billable Hours Reality", description: "15–25 billable hours/week is realistic. The rest is admin, proposals, and marketing.", color: "bg-indigo-600" },
  { num: "8", title: "Risk Buffer (10–20%)", description: "Clients pay late, projects get cancelled. Freelancers don't have unemployment insurance.", color: "bg-orange-600" },
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
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <main className="flex-1">
        {/* HERO — premium mesh + grid */}
        <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white print:hidden">
          {/* mesh blobs */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-[520px] h-[520px] bg-blue-400/30 rounded-full blur-[80px]" />
            <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-indigo-400/25 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-violet-500/20 rounded-full blur-[60px]" />
          </div>
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
            {/* proof badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/15 text-blue-50">✦ 10k+ freelancers</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/15 text-blue-50">✓ Updated 2026 tax tables</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/15 text-blue-50">No signup required</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-extrabold leading-[0.95] tracking-tight">
              Design Your Ideal<br />
              <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">Freelance Life</span>
            </h1>
            <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">
              This isn&apos;t a rate calculator. It&apos;s a <strong className="text-white font-semibold">lifestyle designer</strong>. Tell us the life you want — income, hours, time off — and we&apos;ll tell you <strong className="text-white font-semibold">exactly what to charge</strong> to make it real.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 text-sm font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">Calculate my rate →</a>
              <Link href="/resources" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors">Browse resources</Link>
            </div>
            <p className="mt-3 text-xs text-white/60">Free forever · No email required · Shareable link</p>
          </div>
        </header>

        <section id="calculator" className="bg-gray-50/50 border-y border-gray-100">
          <RateCalculator />
        </section>

        {/* GUIDES */}
        <section id="guides" className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Freelance Guides & Resources</h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">Master your freelance finances — taxes, pricing, retainers, and more.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map(({ slug, title, desc, icon, color, cat }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group relative block p-5 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 bg-gradient-to-br ${color}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-[11px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500">{cat}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{desc}</p>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm">View All Guides →</Link>
            <Link href="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">Freelance Tools →</Link>
          </div>
        </section>

        {/* Ad between guides and FAQ — CLS-safe */}
        <section className="max-w-6xl mx-auto px-4 pb-4 print:hidden">
          <div className="min-h-[130px]">
            <AdBannerFreelance spot="between-guides-and-faq" />
          </div>
        </section>

        {/* HOW IT WORKS — timeline */}
        <section id="how-it-works" className="bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">How This Calculation Works</h2>
              <p className="mt-2 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Most freelancers guess. We use an 8-step formula that factors in <strong className="text-gray-700">every real cost</strong> of being self-employed.</p>
            </div>
            {/* timeline wrapper */}
            <div className="relative">
              {/* vertical connector — desktop only */}
              <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-blue-200 via-gray-200 to-orange-200 -translate-x-1/2" aria-hidden />
              <div className="grid gap-4 md:grid-cols-2">
                {METHODOLOGY_STEPS.map(({ num, title, description, color }, idx) => (
                  <div key={num} className={`relative flex gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow ${idx % 2 === 0 ? "md:mr-6" : "md:ml-6 md:mt-6"}`}>
                    {/* dot on line — desktop */}
                    <span className="hidden md:block absolute top-7 w-3 h-3 rounded-full bg-white border-2 border-blue-300 shadow-sm" style={{ [idx % 2 === 0 ? "right" : "left"]: "-28px" } as React.CSSProperties} aria-hidden />
                    <div className={`flex-shrink-0 w-10 h-10 ${color} text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm`}>{num}</div>
                    <div className="min-w-0"><h3 className="font-semibold text-gray-900 text-sm leading-tight">{title}</h3><p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{description}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-2xl text-center">
              <p className="text-sm text-blue-800 font-medium">The Formula: <code className="bg-white border border-blue-200 px-2 py-1 rounded-lg text-xs font-mono"> (Take-Home + SE Tax + Income Tax + Insurance + Retirement + Expenses + Buffer) ÷ Billable Hours</code></p>
              <p className="text-xs text-blue-600 mt-2">Use it quarterly — rates should evolve as your skills and costs do.</p>
            </div>
          </div>
        </section>

        {/* WHY UNDERCHARGE — dark card */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[24px] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" aria-hidden />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-blue-300">The hidden gap</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Why Most Freelancers Undercharge by 30–50%</h2>
              <p className="mt-3 text-gray-300 leading-relaxed text-sm">The &ldquo;just divide by 2,080&rdquo; method ignores hidden costs:</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                <li className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3"><span className="text-red-400 mt-0.5">✕</span><span className="text-gray-200">Self-employment tax (15.3%) — employers normally pay half</span></li>
                <li className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3"><span className="text-red-400 mt-0.5">✕</span><span className="text-gray-200">Health insurance ($400–$2,500/mo) — employers cover 50–80%</span></li>
                <li className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3"><span className="text-red-400 mt-0.5">✕</span><span className="text-gray-200">No 401(k) match, no paid vacation, no sick days</span></li>
                <li className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3"><span className="text-red-400 mt-0.5">✕</span><span className="text-gray-200">Non-billable time (admin, marketing, proposals) eats 30–50% of your week</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/blog/freelancer-vs-employee-cost-comparison-2026" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-500 transition-colors">See the Full Breakdown →</Link>
                <Link href="/blog/self-employment-tax-guide-2026" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors border border-white/15">Tax Guide →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Direct link CTA banner before FAQ — CLS-safe */}
        <section className="max-w-6xl mx-auto px-4 pb-6 print:hidden">
          <div className="min-h-[72px]">
            <DirectLinkCta variant="banner" />
          </div>
        </section>

        {/* FAQ — accordion */}
        <section id="faq" className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2><p className="mt-2 text-sm text-gray-500">Everything you need to know about freelance rates.</p></div>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm open:shadow-md open:border-gray-300 transition-all group">
                  <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between gap-4 list-none select-none">
                    <span className="text-[15px] leading-snug">{q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-open:bg-blue-50 group-open:border-blue-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-500 group-open:text-blue-600 group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA + email capture placeholder */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 rounded-[24px] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Stay sharp. Earn more.</h2>
              <p className="mt-2 text-blue-100 max-w-xl mx-auto text-sm leading-relaxed">Get occasional rate alerts, tax updates, and freelance pricing tips. No spam — unsubscribe anytime.</p>
              <EmailCapture />
              <p className="mt-2 text-xs text-blue-200">UI placeholder — no backend yet. We won&apos;t email you until it&apos;s live.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#calculator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 text-sm font-semibold rounded-full hover:bg-blue-50 transition-colors shadow">↑ Back to Calculator</a>
                <Link href="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors">Browse Tools & Resources →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
