import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Freelancer's Guide to Self-Employment Taxes (2026)",
  description: "Everything freelancers need to know about self-employment tax in 2026: the 15.3% rate, quarterly payments, deductions, Solo 401k limits, and how to avoid surprises at tax time.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz/blog/self-employment-tax-guide-2026" },
  openGraph: {
    title: "The Freelancer's Guide to Self-Employment Taxes (2026)",
    description: "Everything freelancers need to know about self-employment tax in 2026.",
    url: "https://freelancecalculator.xyz/blog/self-employment-tax-guide-2026",
  },
  twitter: { card: "summary_large_image", title: "The Freelancer's Guide to Self-Employment Taxes (2026)", description: "Everything freelancers need to know about self-employment tax in 2026." },
  authors: [{ name: "FreelanceRateCalculator.com" }],
};

export default function Post() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The Freelancer's Guide to Self-Employment Taxes (2026)", description: "Everything freelancers need to know about self-employment tax in 2026.", datePublished: "2026-06-28", dateModified: "2026-06-28", author: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" }, publisher: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" } }) }} />
      <main>
        {/* ═══ HERO ═══ */}
        <header className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💰</span>
              <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Taxes</span>
              <span className="text-xs text-white/60">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight" id="top">
                      The Freelancer's Guide to Self-Employment Taxes (2026)
                      </h1>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
          <article className="prose prose-gray prose-headings:scroll-mt-20 lg:prose-lg max-w-none bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <p className="lead">Self-employment tax is the #1 surprise for new freelancers. Here's everything you need to know — the rate, how to pay quarterly, what you can deduct, and how to avoid the most common (and expensive) mistakes.</p>

          <h2>What Is Self-Employment Tax?</h2>
          <p>Self-employment (SE) tax is the freelancer version of FICA — the Social Security and Medicare taxes that employers and employees split. As a freelancer, you pay <strong>both halves</strong>.</p>
          <ul>
            <li><strong>Employee half (7.65%):</strong> Your employer normally pays this. You now pay it.</li>
            <li><strong>Employer half (7.65%):</strong> You pay this too. You're the boss.</li>
            <li><strong>Total SE tax rate: 15.3%</strong></li>
          </ul>
          <p>The 15.3% breaks down as:</p>
          <ul>
            <li><strong>12.4%</strong> — Social Security (OASDI), capped at the first $176,100 of net earnings (2026 limit)</li>
            <li><strong>2.9%</strong> — Medicare (HI), no cap</li>
            <li><strong>Additional 0.9%</strong> — Medicare surcharge for high earners ($200k single, $250k married)</li>
          </ul>

          <h2>Step-by-Step: How SE Tax Works</h2>
          <ol>
            <li><strong>Calculate net earnings:</strong> Gross freelance income minus deductible business expenses.</li>
            <li><strong>Apply 92.35% rule:</strong> SE tax is calculated on 92.35% of your net earnings (not 100%).</li>
            <li><strong>Apply 15.3%:</strong> 12.4% up to the SS cap, then 2.9% on everything.</li>
            <li><strong>Deduct half:</strong> Half of your SE tax is deductible above the line (on Schedule 1, not Schedule C).</li>
          </ol>

          <h2>Real Example: $80,000 Freelancer</h2>
          <table>
            <thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>Net freelance earnings</td><td>—</td><td>$80,000</td></tr>
              <tr><td>Apply 92.35%</td><td>$80,000 × 0.9235</td><td>$73,880</td></tr>
              <tr><td>Social Security portion (12.4%)</td><td>$73,880 × 0.124</td><td>$9,161</td></tr>
              <tr><td>Medicare portion (2.9%)</td><td>$73,880 × 0.029</td><td>$2,143</td></tr>
              <tr><td><strong>Total SE tax</strong></td><td></td><td><strong>$11,304</strong></td></tr>
              <tr><td>Deductible half</td><td>$11,304 ÷ 2</td><td>$5,652</td></tr>
            </tbody>
          </table>
          <p>This is <strong>on top of</strong> your income tax. Our <Link href="/" className="text-blue-600">Freelance Lifestyle Calculator</Link> factors all of this into your minimum rate automatically.</p>

          <h2>Estimated Quarterly Payments</h2>
          <p>The IRS expects freelancers to pay quarterly (Form 1040-ES). Here's a rough guide based on net income:</p>
          <table>
            <thead><tr><th>Net Income</th><th>Est. SE Tax</th><th>Est. Income Tax (single)</th><th>Quarterly Payment</th></tr></thead>
            <tbody>
              <tr><td>$30,000</td><td>$4,239</td><td>$2,900</td><td>~$1,785</td></tr>
              <tr><td>$50,000</td><td>$7,065</td><td>$5,800</td><td>~$3,216</td></tr>
              <tr><td>$80,000</td><td>$11,304</td><td>$12,000</td><td>~$5,826</td></tr>
              <tr><td>$120,000</td><td>$16,956</td><td>$22,000</td><td>~$9,739</td></tr>
              <tr><td>$200,000</td><td>$28,260</td><td>$47,000</td><td>~$18,815</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500">*Estimates only. Consult a CPA.</p>

          <h2>2026 Solo 401(k) Limits</h2>
          <p>One of the biggest advantages freelancers have is the Solo 401(k):</p>
          <table>
            <thead><tr><th>Contribution Type</th><th>2026 Limit</th></tr></thead>
            <tbody>
              <tr><td>Employee deferral (under 50)</td><td>$23,500</td></tr>
              <tr><td>Employee deferral (age 50+)</td><td>$31,000</td></tr>
              <tr><td>Employer profit-sharing</td><td>Up to 25% of compensation</td></tr>
              <tr><td><strong>Total (under 50)</strong></td><td><strong>$70,000</strong></td></tr>
              <tr><td><strong>Total (age 50+)</strong></td><td><strong>$77,500</strong></td></tr>
            </tbody>
          </table>
          <p>That's a massive tax-advantaged savings opportunity. Every dollar you put in reduces your taxable income dollar-for-dollar.</p>

          <h2>Biggest Tax Deductions for Freelancers</h2>
          <ul>
            <li><strong>Home office deduction:</strong> $5/sqft simplified method (up to 300 sqft = $1,500) or actual expenses</li>
            <li><strong>Health insurance premiums:</strong> 100% deductible above the line (for your plan and dependents)</li>
            <li><strong>Retirement contributions:</strong> Solo 401k, SEP IRA, or SIMPLE IRA</li>
            <li><strong>Equipment & software:</strong> Section 179 lets you deduct up to $1,220,000 in equipment immediately</li>
            <li><strong>Vehicle expenses:</strong> 70¢/mile standard mileage rate (2026) or actual expenses</li>
            <li><strong>Education & training:</strong> Courses, conferences, certifications, books — if it improves your freelance skills</li>
            <li><strong>Internet & phone:</strong> Percentage used for business (keep a log)</li>
            <li><strong>Meals & entertainment:</strong> 50% of business meals</li>
            <li><strong>QBI Deduction:</strong> Up to 20% of qualified business income (phaseouts apply above $197,300 single)</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h3 className="text-blue-900 font-bold text-lg mt-0">Your Rate Should Include All of This</h3>
            <p className="text-blue-800">The easiest way to handle freelance taxes? Set your rate high enough to cover them. Our calculator shows you the exact number.</p>
            <Link href="/" className="inline-block mt-3 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">Calculate Your Rate →</Link>
          </div>

          <h2>Common SE Tax Mistakes</h2>
          <ul>
            <li><strong>No quarterly payments:</strong> The IRS charges penalties and interest. Pay as you go.</li>
            <li><strong>Forgetting SE tax exists:</strong> Many freelancers save for income tax but forget the 15.3% SE tax on top. That's a 15.3% surprise.</li>
            <li><strong>Missing the QBI deduction:</strong> 20% of business income could be tax-free if you qualify. Don't leave it on the table.</li>
            <li><strong>Not using Solo 401k:</strong> Employees have access to 401k plans with matching. As a freelancer, your Solo 401k is your equivalent. Max it out.</li>
            <li><strong>Mixing personal and business expenses:</strong> This makes tracking deductions much harder. Get a separate business account.</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>SE tax adds roughly 15% to your effective tax rate. On $80k, that's $11,304 extra. You need to charge enough to absorb this — or factor it into your rate.</p>
          <p>Our <Link href="/" className="text-blue-600">calculator</Link> does this automatically. Enter the life you want, and it tells you the minimum rate after accounting for every tax and expense.</p>

          <hr className="my-8 border-gray-200" />
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-xs text-gray-500">Published by <strong>FreelanceRateCalculator.com</strong>. Tax rates based on 2026 IRS brackets. Consult a CPA for your specific situation.</p>
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
              <Link key="freelance-pricing-strategies-value-based" href="/blog/freelance-pricing-strategies-value-based" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <span className="text-lg">📈</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Pricing Strategies</h4>
              </Link>
              <Link key="freelance-retainer-rate-calculator-templates" href="/blog/freelance-retainer-rate-calculator-templates" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <span className="text-lg">📋</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Retainer Rate Guide</h4>
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
