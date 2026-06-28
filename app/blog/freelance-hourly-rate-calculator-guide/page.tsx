import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)",
  description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide. Includes taxes, expenses, benefits, and risk buffer.",
  alternates: {
    canonical: "https://freelancecalculator.xyz/blog/freelance-hourly-rate-calculator-guide",
  },
  openGraph: {
    title: "Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)",
    description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide.",
    type: "article",
    publishedTime: "2024-01-15",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)",
    description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide.",
  },
  authors: [{ name: "FreelanceRateCalculator.com" }],
};

export default function FreelanceHourlyRateGuide() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: "Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)",
          description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide.",
          datePublished: "2024-01-15", dateModified: "2026-06-28",
          author: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" },
          publisher: { "@type": "Organization", name: "FreelanceRateCalculator.com", url: "https://freelancecalculator.xyz" },
        }),
      }} />
      <main>
        <header className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧮</span>
              <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Guide</span>
            </div>
            <Link href="/blog" className="inline-block text-sm text-white/70 hover:text-white mb-2 underline underline-offset-2">← All Guides</Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                          Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)
                        </h1>
          </div>
        </header>
<div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <article className="prose prose-gray prose-headings:scroll-mt-20 lg:prose-lg max-w-none bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <p className="lead text-xl text-gray-600">
            Most freelancers undercharge by 30-50% because they only think about "take-home pay" and forget taxes, benefits, unpaid time off, and business expenses. This guide walks you through the complete calculation.
          </p>

          <h2>Why Your Gut Instinct Is Wrong</h2>
          <p>
            If you previously made $80,000 as an employee, you might think charging $50/hour ($100k/year) is a raise. But employees get:
          </p>
          <ul>
            <li>Employer pays 7.65% FICA (you pay 15.3% self-employment tax)</li>
            <li>Health insurance (often $400-800/month subsidized)</li>
            <li>401(k) match (3-6% of salary)</li>
            <li>Paid vacation, sick days, holidays (~4 weeks/year)</li>
            <li>Equipment, software, office space provided</li>
            <li>Unemployment insurance, workers' comp</li>
          </ul>

          <h2>The Complete Freelance Rate Formula</h2>

          <h3>1. Target Annual Take-Home Pay</h3>

          <h3>2. Self-Employment Tax (15.3%)</h3>

          <h3>3. Income Tax (Federal + State)</h3>

          <h3>4. Health Insurance</h3>

          <h3>5. Retirement Contributions</h3>

          <h3>6. Business Expenses</h3>

          <h3>7. Unpaid Time Off (The Hidden Killer)</h3>

          <h3>8. Non-Billable Time</h3>

          <h3>9. Risk Buffer (10-20%)</h3>

          <h2>Use Our Calculator Instead of Spreadsheets</h2>
          <p>
            We built a <Link href="/" className="text-blue-600 hover:underline font-medium">free freelance rate calculator</Link> that handles all this math instantly. 
            Just plug in your numbers and get your true minimum hourly rate, day rate, and project minimums.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
            <p className="font-medium text-blue-900">
              <strong>Pro tip:</strong> Run the calculator with three scenarios — Conservative, Realistic, Aggressive. 
              The gap between them shows your pricing flexibility.
            </p>
          </div>

          <h2>Common Mistakes to Avoid</h2>
          <ol>
            <li><strong>Using employee salary ÷ 2080 hours:</strong> Ignores all costs above.</li>
            <li><strong>Forgetting non-billable time:</strong> 40-hour week ≠ 40 billable hours.</li>
            <li><strong>Not accounting for feast/famine cycles:</strong> Dry months kill cash flow.</li>
            <li><strong>Skipping the risk buffer:</strong> One bad client can wipe out months of profit.</li>
            <li><strong>Not revisiting quarterly:</strong> Costs change, skills improve, market shifts.</li>
          </ol>

          <h2>Next Steps</h2>
          <ol>
            <li>Open our <Link href="/" className="text-blue-600 hover:underline font-medium">freelance rate calculator</Link></li>
            <li>Fill in your real numbers (don't guess — look at bank statements)</li>
            <li>Save the results and review quarterly</li>
            <li>Read our guide on <Link href="/blog/how-much-to-charge-freelancer-day-rate-vs-hourly" className="text-blue-600 hover:underline font-medium">Day Rate vs Hourly Rate</Link></li>
          </ol>

          <hr className="my-8 border-gray-200" />
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-xs text-gray-500">Published by <strong>FreelanceRateCalculator.com</strong>.</p>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Ready to Calculate Your Rate?</h3>
            <p className="text-gray-600 mb-4">
              Get your true minimum hourly rate in 60 seconds. Includes taxes, benefits, expenses, and risk buffer.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate My Rate →
            </Link>
          </div>

        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>Found this helpful? <Link href="/" className="text-blue-600 hover:underline">Share the calculator</Link> with a fellow freelancer.</p>
        </footer>
        </div>
        </article>
        </div>

        {/* More Guides */}
        <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">More Freelance Guides</h2>
        <div className="grid gap-4 md:grid-cols-3">
        <Link key="how-much-to-charge-freelancer-day-rate-vs-hourly" href="/blog/how-much-to-charge-freelancer-day-rate-vs-hourly" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
          <span className="text-lg">⏱️</span>
          <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Day Rate vs Hourly</h4>
        </Link>
        <Link key="freelance-tax-deductions-calculator-write-offs" href="/blog/freelance-tax-deductions-calculator-write-offs" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
          <span className="text-lg">📑</span>
          <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Tax Deductions Guide</h4>
        </Link>
        <Link key="freelancer-vs-employee-cost-comparison-2026" href="/blog/freelancer-vs-employee-cost-comparison-2026" className="group relative block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
          <span className="text-lg">⚖️</span>
          <h4 className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-blue-700 transition-colors">Freelancer vs Employee 2026</h4>
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