import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)",
  description: "Maximize your tax savings with our comprehensive guide to freelance deductions. Home office, equipment, software, health insurance, and more. Updated for 2026.",
  alternates: {
    canonical: "https://freelancecalculator.xyz/blog/freelance-tax-deductions-calculator-write-offs",
  },
  openGraph: {
    title: "Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)",
    description: "Maximize your tax savings with our comprehensive guide to freelance deductions.",
    type: "article",
    publishedTime: "2024-01-25",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)",
    description: "Maximize your tax savings with our comprehensive guide to freelance deductions.",
  },
  authors: [{ name: "FreelanceRateCalculator.com" }],
};

export default function FreelanceTaxDeductionsGuide() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: "Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)",
          description: "Maximize your tax savings with our comprehensive guide to freelance deductions. Updated for 2026.",
          datePublished: "2024-01-25", dateModified: "2026-06-28",
          author: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" },
          publisher: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" },
        }),
      }} />
      <article className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <time className="text-gray-500 text-sm mb-4 block">Published January 25, 2024 · Updated June 28, 2026 · 12 min read</time>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)
            </h1>
            <p className="text-sm text-gray-400 mt-2"><strong>Tax year:</strong> 2026 · Contribution limits reflect current IRS figures.</p>
          </header>

          <div className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <p className="lead text-xl text-gray-600">
              The average freelancer overpays taxes by $3,000–$7,000 yearly simply by missing deductions they're legally entitled to. With 2026 tax brackets and limits now in effect, staying current matters more than ever.
            </p>

            <h2>The Big Picture: Why Deductions Matter</h2>
            <p>
              Every dollar you deduct reduces your taxable income—not just your tax bill.
              If you're in the 24% tax bracket, a $1,000 deduction saves you $240 in taxes.
              Find $10,000 in deductions? That's $2,400 back in your pocket.
            </p>
            <p>
              Unlike employees who get deductions automatically through payroll,
              freelancers must actively track and claim theirs. The IRS expects you
              to know what's deductible—and to prove it if audited.
            </p>

            <h2>Home Office Deduction (The Most Missed)</h2>
            <h3>Simplified Method (Easiest)</h3>
            <p>
              $5 per square foot of home used for business (max 300 sq ft = $1,500/year).
              No documentation needed beyond measuring your space.
            </p>
            <h3>Regular Method (Potentially Bigger)</h3>
            <p>
              Calculate % of home used for business:<br />
              (Office sq ft ÷ Total home sq ft) × 100 = Business percentage<br />
              Then apply that % to:<br />
              • Rent or mortgage interest<br />
              • Utilities (electricity, gas, water, sewer)<br />
              • Homeowners/renters insurance<br />
              • Repairs and maintenance<br />
              • Depreciation (if you own)
            </p>
            <p><strong>Key rule:</strong> Space must be used regularly and exclusively for business.</p>

            <h2>Equipment &amp; Software (100% Deductible)</h2>
            <ul>
              <li><strong>Hardware:</strong> Laptop, desktop, monitor, tablet, phone, printer, external drives</li>
              <li><strong>Software:</strong> Subscriptions (Adobe CC, Microsoft 365, IDEs, project management)</li>
              <li><strong>Peripherals:</strong> Keyboard, mouse, webcam, microphone, speakers, docking station</li>
              <li><strong>Office furniture:</strong> Desk, chair, bookshelves, filing cabinet (if for business)</li>
            </ul>
            <p><strong>Section 179 (2026):</strong> You can deduct 100% of equipment cost in year purchased (up to $1,220,000 in 2026).</p>

            <h2>Health Insurance (100% Deductible)</h2>
            <p>
              If you're not eligible for employer coverage (yours or spouse's), you can deduct:<br />
              • Medical, dental, and vision insurance premiums<br />
              • Long-term care insurance (with age-based limits)
            </p>
            <p>This is an "above-the-line" deduction—you get it whether you itemize or take standard deduction.</p>

            <h2>Retirement Contributions (Biggest Savings)</h2>
            <ul>
              <li><strong>Solo 401(k):</strong> $70,000 limit (2026) + $7,500 catch-up if 50+</li>
              <li><strong>SEP-IRA:</strong> 25% of net earnings (up to $70,000)</li>
              <li><strong>SIMPLE IRA:</strong> $16,500 limit (2026) + $3,500 catch-up</li>
              <li><strong>Traditional/Roth IRA:</strong> $7,000 limit (2026) + $1,000 catch-up</li>
            </ul>
            <p><strong>Pro tip:</strong> Solo 401(k) lets you contribute as both employee AND employer, effectively doubling your contribution power.</p>

            <h2>Business Expenses (The Long List)</h2>
            <h3>Advertising &amp; Marketing</h3>
            <ul>
              <li>Website hosting, domain names, themes, plugins</li>
              <li>Stock photos, graphics, fonts</li>
              <li>Online ads (Google, Facebook, LinkedIn)</li>
              <li>Printed business cards, brochures, flyers</li>
              <li>Marketing software (Mailchimp, ConvertKit, Buffer)</li>
            </ul>

            <h3>Professional Development</h3>
            <ul>
              <li>Courses, workshops, webinars, conferences</li>
              <li>Books, subscriptions to trade publications</li>
              <li>Certification fees, licensing exams</li>
              <li>Professional association dues</li>
            </ul>

            <h3>Travel &amp; Meals</h3>
            <ul>
              <li>Transportation to client sites (mileage at 67¢/mile in 2026, public transit, parking, tolls)</li>
              <li>Lodging for overnight business trips</li>
              <li>Meals with clients or for business meetings (50% deductible)</li>
              <li>Meals while traveling for business (50% deductible)</li>
            </ul>

            <h3>Banking &amp; Professional Fees</h3>
            <ul>
              <li>Business bank account fees</li>
              <li>Payment processing fees (PayPal, Stripe, Square fees)</li>
              <li>Accounting software (QuickBooks, FreshBooks, Wave)</li>
              <li>Tax preparation fees</li>
              <li>Legal fees for business matters</li>
              <li>Business insurance (liability, errors &amp; omissions, equipment)</li>
            </ul>

            <h2>What You CANNOT Deduct</h2>
            <ul>
              <li>Personal expenses (groceries, clothing, personal vacations)</li>
              <li>Fines and penalties (parking tickets, late fees)</li>
              <li>Political contributions</li>
              <li>Club dues (unless directly related to business)</li>
              <li>Commute from home to first client (but travel between clients IS deductible)</li>
              <li>Home repairs unrelated to office space</li>
            </ul>

            <h2>Documentation: How to Survive an Audit</h2>
            <ol>
              <li><strong>Separate accounts:</strong> Business checking and credit card ONLY</li>
              <li><strong>Digital receipts:</strong> Use Expensify, Shoeboxed, or simple folder scans</li>
              <li><strong>Mileage log:</strong> Date, purpose, start/end locations, miles (apps like Stride or MileIQ)</li>
              <li><strong>Home office photos:</strong> Take dated pictures showing exclusive use</li>
              <li><strong>Contemporaneous notes:</strong> For meals/Travel: who, what, why, where</li>
              <li><strong>Keep records 7 years:</strong> IRS can audit back 3 years, but keeping 7 is safest</li>
            </ol>

            <h2>Quarterly Tax Planning for 2026</h2>
            <p>
              The IRS requires quarterly estimated tax payments if you expect to owe $1,000+ in tax. For 2026, the 1040-ES deadlines are April 15, June 15, September 15, and January 15 (2027). Set aside <strong>30% of each payment</strong> for federal taxes plus your state rate.
            </p>
            <p>
              Use our <Link href="/" className="text-blue-600 hover:underline font-medium">freelance rate calculator</Link> to determine your hourly rate, then factor in your tax bracket to see your true take-home pay.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="font-medium text-blue-900">
                <strong>Pro insight:</strong> The most profitable freelancers don't just track income—they actively hunt for deductions. Schedule a monthly "deduction review" to catch expenses before they're forgotten.
              </p>
            </div>

            <hr className="my-10" />

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Ready to Maximize Your Deductions?</h3>
              <p className="text-gray-600 mb-4">
                Use our calculator to determine your true hourly rate, then apply your actual expenses to see how much you should really be charging.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Calculate My Rate →
              </Link>
            </div>
          </div>

          <footer className="mt-10 text-center text-gray-500 text-sm">
            <p>Found this helpful? <Link href="/" className="text-blue-600 hover:underline">Share the calculator</Link> with a fellow freelancer.</p>
          </footer>
        </div>
      </article>
      <p className="text-center text-xs text-gray-400 mt-4">Published January 2024 · Updated June 2026 by FreelanceRateCalculator.com</p>
    </>
  );
}
