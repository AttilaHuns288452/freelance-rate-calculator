import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Calculate Your Freelance Retainer Rate (With Templates)",
  description: "Learn how to price retainer agreements so you get recurring income without shortchanging yourself. Includes email templates and a formula that works.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz/blog/freelance-retainer-rate-calculator-templates" },
  openGraph: {
    title: "How to Calculate Your Freelance Retainer Rate (With Templates)",
    description: "Price retainer agreements so you get recurring income without shortchanging yourself. Includes email templates and the formula.",
    url: "https://freelancecalculator.xyz/blog/freelance-retainer-rate-calculator-templates",
  },
  twitter: { card: "summary_large_image", title: "How to Calculate Your Freelance Retainer Rate", description: "Price retainer agreements so you get recurring income without shortchanging yourself." },
  authors: [{ name: "FreelanceRateCalculator.com" }],
};

export default function Post() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Calculate Your Freelance Retainer Rate (With Templates)", description: "Learn how to price retainer agreements so you get recurring income without shortchanging yourself.", datePublished: "2026-06-28", dateModified: "2026-06-28", author: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" }, publisher: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" } }) }} />
      <main>
        {/* ═══ HERO ═══ */}
        <header className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📋</span>
              <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Pricing</span>
              <span className="text-xs text-white/60">9 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight" id="top">
                      How to Calculate Your Freelance Retainer Rate (With Templates)
                      </h1>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 blog-article">
          <article className="prose prose-gray prose-headings:scroll-mt-20 lg:prose-lg max-w-none bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <p className="lead">Retainers are the holy grail of freelancing: predictable income, less admin, stronger client relationships. But price them wrong and you're stuck in a bad deal for months. Here's exactly how to get it right.</p>

          <h2>What Is a Retainer?</h2>
          <p>A retainer is a monthly agreement where the client pays you a fixed fee for a defined scope of work. You get paid the same amount every month. The client gets priority access and guaranteed availability.</p>
          <p>Good retainers are a win-win. Bad retainers are where you work 60 hours but get paid for 20.</p>

          <h2>The Retainer Pricing Formula</h2>
          <p>Here's the formula we recommend:</p>
          <div className="bg-gray-100 rounded-xl p-6 my-6 font-mono text-sm">
            <p><strong>Retainer Rate = (Estimated Monthly Hours × Hourly Rate) × 0.85</strong></p>
            <p className="mt-2">Then apply a minimum: <strong>Never go below 80% of your maximum capacity × hourly rate</strong></p>
          </div>
          <p>The 0.85 (85%) is a <strong>retainer discount</strong>. Clients pay for predictability — you get guaranteed income, they get a slight discount vs. ad-hoc hourly billing. Win-win.</p>

          <h2>Real Example: Web Developer Retainer</h2>
          <table>
            <thead><tr><th>Item</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Your target hourly rate</td><td>$100</td></tr>
              <tr><td>Estimated hours/month</td><td>40 (10 hrs/week maintenance + updates)</td></tr>
              <tr><td>Full rate (40 × $100)</td><td>$4,000/month</td></tr>
              <tr><td>Retainer discount (15%)</td><td>−$600</td></tr>
              <tr><td><strong>Retainer price</strong></td><td><strong>$3,400/month</strong></td></tr>
            </tbody>
          </table>
          <p>The client saves $600/month. You get $3,400 guaranteed every month. That's $40,800/year of predictable income before any additional project work.</p>

          <h2>The 3 Types of Retainers</h2>
          <h3>1. Fixed-Scope Retainer (Best for beginners)</h3>
          <p>Client pays a fixed monthly fee. Scope is clearly defined: X hours, Y deliverables. Overages billed at full hourly rate.</p>
          <p><strong>Example:</strong> $2,000/month for 20 hours of social media management. Everything over 20 hours billed at $100/hour.</p>

          <h3>2. Open-Scope Retainer (Best for busy clients)</h3>
          <p>Client pays a fixed fee for priority access. Work is undefined — they send tasks as they arise. You track time and cap at agreed hours.</p>
          <p><strong>Example:</strong> $5,000/month for up to 50 hours of "on-call" design work. Unused hours don't roll over (use-it-or-lose-it).</p>

          <h3>3. Value-Based Retainer (Best for experienced freelancers)</h3>
          <p>Price is based on the value you deliver, not hours. This is where freelancers make the most money.</p>
          <p><strong>Example:</strong> $10,000/month for managing a company's entire content marketing operation. If they'd hire a full-time employee at $8,000/month + benefits ($11,000 total cost), your retainer is still a deal.</p>

          <h2>Retainer Email Templates</h2>
          <h3>Template 1: Proposing a Retainer to a Regular Client</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 font-mono text-sm text-gray-700">
            <p>Subject: Proposal — Moving to a Monthly Retainer</p>
            <p>Hi [Client Name],</p>
            <p>Over the past [X months], I've really enjoyed working on your [project type].</p>
            <p>To make things easier for both of us, I'd like to propose moving to a monthly retainer.</p>
            <p><strong>What's included:</strong><br />
            • [List of services / deliverables]<br />
            • [Response time SLA]<br />
            • [Monthly check-in calls, if applicable]</p>
            <p><strong>Investment: $X,XXX/month</strong></p>
            <p>This gives you priority access and guaranteed availability. Any work beyond the agreed scope is billed at my standard rate of $X/hour with your approval.</p>
            <p>Would you be open to a quick call to discuss?</p>
            <p>Best,<br />[Your Name]</p>
          </div>

          <h3>Template 2: Annual Retainer Renewal (With Rate Increase)</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 font-mono text-sm text-gray-700">
            <p>Subject: Our Retainer for [Year]</p>
            <p>Hi [Client Name],</p>
            <p>I've loved working with you this year. You've been one of my favorite clients and I'm proud of what we've accomplished.</p>
            <p>For the coming year, I'll be adjusting my rates to reflect [X factor — e.g., growing demand, expanded skill set].</p>
            <p><strong>Current retainer: $X,XXX/month</strong><br />
            <strong>New retainer: $Y,YYY/month (effective [date])</strong></p>
            <p>[If applicable: My standard rate has increased from $X to $Y/hour, but as a retainer client you'll continue receiving a 15% discount on my standard rate.]</p>
            <p>I've also updated the scope to include [new value add], so this new rate reflects additional value.</p>
            <p>I'd love to lock this in for another year. Let me know if you'd like to chat.</p>
            <p>Best,<br />[Your Name]</p>
          </div>

          <h2>Common Retainer Mistakes</h2>
          <ul>
            <li><strong>Underestimating hours:</strong> Most freelancers underestimate by 30–50%. Track your time for 2 months before proposing a retainer.</li>
            <li><strong>No price escalation clause:</strong> Include an annual 5–15% increase. Your costs go up. Your rates should too.</li>
            <li><strong>Over-servicing:</strong> If you're consistently working way over the retainer cap without billing, you need to renegotiate or raise rates.</li>
            <li><strong>No scope definition:</strong> "General marketing support" is not a scope. "Two blog posts, one newsletter, three social posts, and 5 hours of strategy" is a scope.</li>
            <li><strong>All retainers, no project work:</strong> Retainers cap your upside. Keep some capacity for high-value project work.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h3 className="text-blue-900 font-bold text-lg mt-0">Know Your Minimum Viable Rate</h3>
            <p className="text-blue-800">Before you negotiate any retainer, know your baseline. Use our calculator to find the minimum your freelance lifestyle demands — then add the retainer discount on top.</p>
            <Link href="/" className="inline-block mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">Calculate Your Minimum Rate →</Link>
          </div>

          <h2>The Bottom Line</h2>
          <p>A good retainer is worth 2–3x what you'd earn from one-off projects from the same client over a year. Less negotiation, less admin, fewer ups and downs. But only if you price it right from day one.</p>
          <p>Start with your minimum viable rate (from the calculator above), apply the retainer formula, add 15% for growth, and never lock in a rate for more than 12 months.</p>

          <hr className="my-8 border-gray-200" />
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-xs text-gray-500">Published by <strong>FreelanceRateCalculator.com</strong>.</p>
          <p className="text-xs text-gray-400">Last updated: June 28, 2026 · <Link href="/contact" className="text-blue-600">Questions?</Link></p>
            </div>
          </article>
        </div>

        {/* ═══ More Guides ═══ */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">More Freelance Guides</h2>
          <div className="grid gap-4 md:grid-cols-3">
              <Link key="freelancer-vs-employee-cost-comparison-2026" href="/blog/freelancer-vs-employee-cost-comparison-2026" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <span className="text-lg">⚖️</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Freelancer vs Employee 2026</h4>
              </Link>
              <Link key="self-employment-tax-guide-2026" href="/blog/self-employment-tax-guide-2026" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <span className="text-lg">💰</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Self-Employment Tax 2026</h4>
              </Link>
              <Link key="freelance-pricing-strategies-value-based" href="/blog/freelance-pricing-strategies-value-based" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <span className="text-lg">📈</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Pricing Strategies</h4>
              </Link>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              View All Guides <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
