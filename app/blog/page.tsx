import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator Blog - Guides & Resources",
  description: "Expert guides on freelance pricing, tax deductions, rate calculation, retainer pricing, and building a profitable freelance business.",
  robots: "index, follow",
  alternates: {
    canonical: "https://freelancecalculator.xyz/blog",
  },
};

const posts = [
  {
    slug: "freelancer-vs-employee-cost-comparison-2026",
    title: "Freelancer vs Employee: The Complete Financial Comparison (2026)",
    description: "The true cost of freelancing vs being an employee broken down with 2026 numbers. The gap is $24k+ bigger than you think.",
    date: "2026-06-28",
    readTime: "10 min read",
  },
  {
    slug: "self-employment-tax-guide-2026",
    title: "The Freelancer's Guide to Self-Employment Taxes (2026)",
    description: "Everything about SE tax: 15.3% rate, quarterly payments, Solo 401k limits, deductions, and how to avoid expensive mistakes.",
    date: "2026-06-28",
    readTime: "12 min read",
  },
  {
    slug: "freelance-pricing-strategies-value-based",
    title: "Freelance Pricing Strategies: Hourly vs Value-Based vs Project-Based",
    description: "Which pricing model earns you the most? Compare hourly, project, value-based, and retainer pricing with real income breakdowns.",
    date: "2026-06-28",
    readTime: "11 min read",
  },
  {
    slug: "freelance-retainer-rate-calculator-templates",
    title: "How to Calculate Your Freelance Retainer Rate (With Templates)",
    description: "Learn to price retainer agreements so you get recurring income without shortchanging yourself. Includes email templates and formulas.",
    date: "2026-06-28",
    readTime: "9 min read",
  },
  {
    slug: "freelance-hourly-rate-calculator-guide",
    title: "Freelance Hourly Rate Calculator: Complete Guide (Updated 2026)",
    description: "How to calculate your true freelance hourly rate with taxes, expenses, benefits, and risk buffer factored in.",
    date: "2026-06-28",
    readTime: "8 min read",
  },
  {
    slug: "how-much-to-charge-freelancer-day-rate-vs-hourly",
    title: "Freelance Day Rate vs Hourly: Which Earns You More? (Updated 2026)",
    description: "Day rate vs hourly rate: which pricing model earns you more? Numbers, pros/cons, and when to use each.",
    date: "2026-06-28",
    readTime: "6 min read",
  },
  {
    slug: "freelance-tax-deductions-calculator-write-offs",
    title: "Freelance Tax Deductions Guide: What You Can Write Off (Updated 2026)",
    description: "Maximize your tax savings with our comprehensive guide to freelance deductions. Home office, equipment, software, insurance, and more.",
    date: "2026-06-28",
    readTime: "10 min read",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Freelance Resources & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides to help you price confidently, save on taxes, and build a sustainable freelance business.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <time className="text-sm text-gray-500 mb-2 block">
                {post.date} · {post.readTime}
              </time>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{post.description}</p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center space-x-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Calculate Your Rate Now
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            Freelance Tools & Resources →
          </Link>
        </div>
      </div>
    </main>
  );
}
