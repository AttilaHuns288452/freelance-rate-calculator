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
  { slug: "freelancer-vs-employee-cost-comparison-2026", title: "Freelancer vs Employee 2026", desc: "The true financial comparison with current numbers.", icon: "⚖️", color: "from-[#5e6ad2] to-[#4338ca]", cat: "Compare" },
  { slug: "self-employment-tax-guide-2026", title: "Self-Employment Tax 2026", desc: "Complete guide to SE tax, brackets, and quarterly payments.", icon: "💰", color: "from-emerald-500 to-teal-700", cat: "Taxes" },
  { slug: "freelance-pricing-strategies-value-based", title: "Pricing Strategies", desc: "Hourly vs value-based vs project-based pricing.", icon: "📈", color: "from-violet-500 to-[#5e6ad2]", cat: "Pricing" },
  { slug: "freelance-retainer-rate-calculator-templates", title: "Retainer Rate Guide", desc: "Calculate retainers with templates and formulas.", icon: "📋", color: "from-amber-500 to-orange-600", cat: "Retainers" },
  { slug: "freelance-hourly-rate-calculator-guide", title: "Rate Calculator Guide", desc: "Step-by-step to calculate your true hourly rate.", icon: "🧮", color: "from-[#5e6ad2] to-indigo-700", cat: "Calculator" },
  { slug: "how-much-to-charge-freelancer-day-rate-vs-hourly", title: "Day Rate vs Hourly", desc: "Which pricing model earns you more?", icon: "⏱️", color: "from-rose-500 to-pink-600", cat: "Pricing" },
  { slug: "freelance-tax-deductions-calculator-write-offs", title: "Tax Deductions Guide", desc: "Maximize your freelance tax write-offs.", icon: "📑", color: "from-indigo-500 to-[#5e6ad2]", cat: "Taxes" },
];

const METHODOLOGY_STEPS = [
  { num: "01", title: "Your Target Take-Home Pay", description: "Start with how much money you want in your bank account each year — after all taxes. This is your lifestyle number.", accent: "bg-[#5e6ad2]" },
  { num: "02", title: "Self-Employment Tax (15.3%)", description: "Employees split FICA taxes with their employer. As a freelancer, you pay both halves. On $100K net, that's $15,300.", accent: "bg-[#4338ca]" },
  { num: "03", title: "Federal & State Income Tax", description: "The calculator uses your combined federal + state rate to ensure every tax dollar is accounted for.", accent: "bg-violet-600" },
  { num: "04", title: "Health Insurance", description: "Marketplace plans run $400–$2,500/month. Fully deductible — but you still need to earn it first.", accent: "bg-emerald-600" },
  { num: "05", title: "Retirement Contributions", description: "Solo 401(k) allows up to $70,000 in contributions. You're your own retirement plan now.", accent: "bg-amber-600" },
  { num: "06", title: "Business Expenses", description: "Software, hardware, home office — these add up to $5K–$20K+ annually.", accent: "bg-cyan-600" },
  { num: "07", title: "Billable Hours Reality", description: "15–25 billable hours/week is realistic. The rest is admin, proposals, and marketing.", accent: "bg-indigo-600" },
  { num: "08", title: "Risk Buffer (10–20%)", description: "Clients pay late, projects get cancelled. Freelancers don't have unemployment insurance.", accent: "bg-rose-600" },
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
        {/* HERO — editorial periwinkle */}
        <header className="relative overflow-hidden bg-[#0f1229] text-white print:hidden">
          {/* periwinkle mesh */}
          <div className="absolute inset-0">
            <div className="absolute -top-28 -left-24 w-[560px] h-[560px] bg-[#5e6ad2]/35 rounded-full blur-[90px]" />
            <div className="absolute top-6 right-0 w-[520px] h-[520px] bg-[#818cf8]/20 rounded-full blur-[90px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-[#4338ca]/30 rounded-full blur-[70px]" />
            {/* vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1229]/40 via-transparent to-transparent" />
          </div>
          {/* grid + grain */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
            <div className="max-w-[720px]">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur border border-white/10 text-white/90">✦ 10k+ freelancers trust this</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur border border-white/10 text-white/90">✓ 2026 tax tables</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#5e6ad2] text-white shadow-sm">No signup • Free forever</span>
              </div>
              <h1 className="text-[34px] sm:text-[42px] md:text-[56px] font-extrabold leading-[0.9] tracking-[-0.03em]">
                Design your
                <br />
                <span className="bg-gradient-to-r from-[#a5b4fc] via-white to-[#c7d2fe] bg-clip-text text-transparent">ideal freelance</span>
                <br />
                life — not just a rate.
              </h1>
              <p className="mt-5 text-white/75 text-[15px] md:text-[17px] max-w-[58ch] leading-relaxed">
                This isn&apos;t a rate calculator. It&apos;s a <strong className="text-white font-semibold">lifestyle designer</strong>. Tell us the life you want — income, hours, time off — and we&apos;ll tell you <strong className="text-white font-semibold">exactly what to charge</strong> to make it real.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#calculator" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0f1229] text-sm font-bold rounded-full hover:bg-[#eef2ff] transition-colors shadow-xl shadow-[#0f1229]/20">Calculate my rate →</a>
                <Link href="/resources" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-full border border-white/15 hover:bg-white/15 transition-colors">Browse resources</Link>
              </div>
              <p className="mt-3 text-xs text-white/50">Shareable link • No email required • Updates as you type</p>
            </div>
            {/* subtle card peek — desktop */}
            <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[360px] rotate-[1.5deg]">
              <div className="bg-white rounded-[20px] p-5 shadow-2xl shadow-[#0f1229]/30 border border-white/20">
                <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#5e6ad2]">Your target rate</p>
                <p className="text-[42px] font-extrabold tracking-tight text-[#0f1229] leading-none mt-1">$165<span className="text-2xl font-bold text-[#5e6ad2]">/hr</span></p>
                <p className="text-xs text-gray-500 mt-1">Minimum $42/hr · W-2 equiv. $224k/yr</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-[#f8f9ff] rounded-xl py-2.5 text-center border border-[#eef2ff]"><p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Per day</p><p className="text-sm font-bold text-[#0f1229]">$1,320</p></div>
                  <div className="bg-[#f8f9ff] rounded-xl py-2.5 text-center border border-[#eef2ff]"><p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Per week</p><p className="text-sm font-bold text-[#0f1229]">$4,125</p></div>
                  <div className="bg-[#5e6ad2] rounded-xl py-2.5 text-center"><p className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Per month</p><p className="text-sm font-bold text-white">$17.8k</p></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="calculator" className="bg-[#f8f9ff] border-y border-[#eef2ff]">
          <RateCalculator />
        </section>

        {/* GUIDES — editorial grid */}
        <section id="guides" className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#5e6ad2]">Learn · Apply · Earn more</p>
              <h2 className="text-2xl md:text-[28px] font-bold tracking-tight text-[#0f1229] mt-1">Guides & Resources</h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xl leading-relaxed">Master taxes, pricing, and retainers — the stuff that turns hours into income.</p>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[#5e6ad2] hover:text-[#4338ca]">View all →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map(({ slug, title, desc, icon, color, cat }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group relative block p-5 bg-white rounded-[20px] border border-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_32px_rgba(15,18,41,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 bg-gradient-to-br ${color}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#f8f9ff] border border-[#eef2ff] flex items-center justify-center text-xl group-hover:bg-[#eef2ff] transition-colors">{icon}</span>
                    <span className="text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#f8f9ff] border border-[#eef2ff] text-gray-500">{cat}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-[#0f1229] group-hover:text-[#5e6ad2] transition-colors leading-tight">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{desc}</p>
                </div>
                <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#0f1229] text-white grid place-items-center text-xs opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1229] text-white text-sm font-semibold rounded-full hover:bg-black transition-colors shadow-sm">View All Guides →</Link>
            <Link href="/resources" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f1229] text-sm font-semibold rounded-full border border-[#eef2ff] hover:border-[#c7d2fe] transition-all shadow-sm">Freelance Tools →</Link>
          </div>
        </section>

        {/* Ad between guides and FAQ — CLS-safe */}
        <section className="max-w-6xl mx-auto px-4 pb-4 print:hidden">
          <div className="min-h-[130px]">
            <AdBannerFreelance spot="between-guides-and-faq" />
          </div>
        </section>

        {/* HOW IT WORKS — editorial timeline */}
        <section id="how-it-works" className="bg-white py-14 border-y border-[#eef2ff]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#5e6ad2]">The formula behind the magic</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0f1229] mt-2">How this calculation works</h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">Most freelancers guess. We use an 8-step formula that factors in <strong className="text-[#0f1229]">every real cost</strong> of being self-employed — so your rate covers life, not just labor.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-[#c7d2fe] via-[#e0e7ff] to-amber-200 -translate-x-1/2" aria-hidden />
              <div className="grid gap-4 md:grid-cols-2">
                {METHODOLOGY_STEPS.map(({ num, title, description, accent }, idx) => (
                  <div key={num} className={`relative flex gap-4 p-5 bg-[#f8f9ff] rounded-[20px] border border-[#eef2ff] hover:bg-white hover:shadow-[0_8px_24px_rgba(15,18,41,0.06)] hover:border-[#c7d2fe] transition-all ${idx % 2 === 0 ? "md:mr-6" : "md:ml-6 md:mt-6"}`}>
                    <span className="hidden md:block absolute top-7 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#a5b4fc] shadow-sm" style={{ [idx % 2 === 0 ? "right" : "left"]: "-28px" } as React.CSSProperties} aria-hidden />
                    <div className={`flex-shrink-0 w-11 h-11 ${accent} text-white rounded-xl flex items-center justify-center font-bold text-xs tracking-widest shadow-sm`}>{num}</div>
                    <div className="min-w-0"><h3 className="font-semibold text-[#0f1229] text-sm leading-tight">{title}</h3><p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{description}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-5 bg-[#eef2ff] border border-[#c7d2fe] rounded-[20px] text-center">
              <p className="text-sm text-[#312e81] font-medium">The Formula: <code className="bg-white border border-[#c7d2fe] px-2.5 py-1 rounded-full text-xs font-mono text-[#4338ca]"> (Take-Home + SE Tax + Income Tax + Insurance + Retirement + Expenses + Buffer) ÷ Billable Hours</code></p>
              <p className="text-xs text-[#818cf8] mt-2">Recalculate quarterly — rates should evolve as your skills and costs do.</p>
            </div>
          </div>
        </section>

        {/* WHY UNDERCHARGE — periwinkle dark */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-[#0f1229] via-[#1a1d3d] to-[#0f1229] rounded-[28px] p-8 md:p-10 text-white shadow-[0_20px_60px_rgba(15,18,41,0.25)] relative overflow-hidden border border-white/5">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#5e6ad2]/25 rounded-full blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5e6ad2]/30 to-transparent" aria-hidden />
            <div className="relative max-w-3xl">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#a5b4fc]">The hidden gap</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Why most freelancers undercharge by 30–50%</h2>
              <p className="mt-3 text-white/60 leading-relaxed text-sm">The &ldquo;just divide by 2,080&rdquo; method ignores hidden costs:</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
                <li className="flex items-start gap-2.5 bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3.5 backdrop-blur"><span className="text-rose-400 mt-0.5">✕</span><span className="text-white/90 leading-snug">Self-employment tax (15.3%) — employers normally pay half</span></li>
                <li className="flex items-start gap-2.5 bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3.5 backdrop-blur"><span className="text-rose-400 mt-0.5">✕</span><span className="text-white/90 leading-snug">Health insurance ($400–$2,500/mo) — employers cover 50–80%</span></li>
                <li className="flex items-start gap-2.5 bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3.5 backdrop-blur"><span className="text-rose-400 mt-0.5">✕</span><span className="text-white/90 leading-snug">No 401(k) match, no paid vacation, no sick days</span></li>
                <li className="flex items-start gap-2.5 bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3.5 backdrop-blur"><span className="text-rose-400 mt-0.5">✕</span><span className="text-white/90 leading-snug">Non-billable time eats 30–50% of your week</span></li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/blog/freelancer-vs-employee-cost-comparison-2026" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5e6ad2] text-white text-sm font-semibold rounded-full hover:bg-[#4f46e5] transition-colors shadow-lg shadow-[#5e6ad2]/20">See the Full Breakdown →</Link>
                <Link href="/blog/self-employment-tax-guide-2026" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/15 transition-colors border border-white/10">Tax Guide →</Link>
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

        {/* FAQ — premium */}
        <section id="faq" className="bg-[#f8f9ff] py-12 border-y border-[#eef2ff]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8"><p className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#5e6ad2]">Answers</p><h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0f1229] mt-1">Frequently Asked Questions</h2><p className="mt-2 text-sm text-gray-500">Everything you need to know about freelance rates.</p></div>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-[20px] border border-[#eef2ff] p-5 shadow-sm open:shadow-[0_8px_24px_rgba(15,18,41,0.06)] open:border-[#c7d2fe] transition-all group">
                  <summary className="cursor-pointer font-semibold text-[#0f1229] flex items-center justify-between gap-4 list-none select-none">
                    <span className="text-[15px] leading-snug">{q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#f8f9ff] border border-[#eef2ff] flex items-center justify-center group-open:bg-[#eef2ff] group-open:border-[#c7d2fe] transition-colors">
                      <svg className="w-4 h-4 text-gray-400 group-open:text-[#5e6ad2] group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA — periwinkle */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="bg-gradient-to-br from-[#5e6ad2] via-[#4f46e5] to-[#3730a3] rounded-[28px] p-8 md:p-10 text-white shadow-xl shadow-[#5e6ad2]/20 relative overflow-hidden border border-white/10">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" aria-hidden />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Stay sharp. Earn more.</h2>
              <p className="mt-2 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">Get occasional rate alerts, tax updates, and freelance pricing tips. No spam — unsubscribe anytime.</p>
              <EmailCapture />
              <p className="mt-2 text-xs text-white/60">UI placeholder — no backend yet. We won&apos;t email you until it&apos;s live.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4338ca] text-sm font-bold rounded-full hover:bg-[#eef2ff] transition-colors shadow-lg">↑ Back to Calculator</a>
                <Link href="/resources" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors">Browse Tools & Resources →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
