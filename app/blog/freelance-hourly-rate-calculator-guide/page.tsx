import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator: Complete Guide 2024",
  description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide. Includes taxes, expenses, benefits, and risk buffer.",
  openGraph: {
    title: "Freelance Hourly Rate Calculator: Complete Guide 2024",
    description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide.",
    type: "article",
    publishedTime: "2024-01-15",
  },
};

export default function FreelanceHourlyRateGuide() {
  return (
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
          <time className="text-gray-500 text-sm mb-4 block">January 15, 2024 · 8 min read</time>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Freelance Hourly Rate Calculator: Complete Guide 2024
          </h1>
        </header>

        <div className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm border border-gray-200 p-8">
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
          <p>To match an $80k employee package, you need ~$130k+ in revenue.</p>

          <h2>The Complete Freelance Rate Formula</h2>
          <p>Your minimum hourly rate = (Target Take-Home + All Costs) ÷ Billable Hours</p>

          <h3>1. Target Annual Take-Home Pay</h3>
          <p>What you want in your personal bank account after taxes. Be realistic — include personal savings goals.</p>

          <h3>2. Self-Employment Tax (15.3%)</h3>
          <p>You pay both employer and employee portions of Social Security (12.4%) and Medicare (2.9%). On $100k net, that's $15,300.</p>

          <h3>3. Income Tax (Federal + State)</h3>
          <p>Effective rate varies 15-35% depending on income and location. Use your prior year's effective rate as a baseline.</p>

          <h3>4. Health Insurance</h3>
          <p>Marketplace plans: $400-1,200/month for individual. Family: $1,200-2,500/month. This is 100% deductible.</p>

          <h3>5. Retirement Contributions</h3>
          <p>Solo 401(k): up to $69,000/year (2024). SEP-IRA: 25% of net earnings. You're now responsible for 100% of this.</p>

          <h3>6. Business Expenses</h3>
          <p>Software ($50-200/mo), equipment, home office, internet, phone, professional development, marketing, accounting, legal, insurance.</p>

          <h3>7. Unpaid Time Off (The Hidden Killer)</h3>
          <p>Employees get 4 weeks paid. You get 0. If you want 4 weeks off, you must earn that money in 48 weeks, not 52.</p>

          <h3>8. Non-Billable Time</h3>
          <p>Admin, sales, marketing, learning, networking. Realistically 15-25 hours/week are billable MAX. Many freelancers only bill 10-15.</p>

          <h3>9. Risk Buffer (10-20%)</h3>
          <p>Client non-payment, scope creep, dry spells, equipment failure, economic downturns. This is your business insurance.</p>

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

          <hr className="my-10" />

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
        </div>

        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>Found this helpful? <Link href="/" className="text-blue-600 hover:underline">Share the calculator</Link> with a fellow freelancer.</p>
        </footer>
      </div>
    </article>
  );
}