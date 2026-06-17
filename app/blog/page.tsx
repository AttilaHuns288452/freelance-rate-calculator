import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator Blog - Guides & Resources",
  description: "Expert guides on freelance pricing, tax deductions, rate calculation, and building a profitable freelance business.",
};

const posts = [
  {
    slug: "freelance-hourly-rate-calculator-guide",
    title: "Freelance Hourly Rate Calculator: Complete Guide 2024",
    description: "Learn how to calculate your true freelance hourly rate with our step-by-step guide. Includes taxes, expenses, benefits, and risk buffer.",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: "how-much-to-charge-freelancer-day-rate-vs-hourly",
    title: "How Much Should You Charge as a Freelancer? (Day Rate vs Hourly)",
    description: "Day rate vs hourly rate: which pricing model earns you more? We break down the math, pros/cons, and when to use each.",
    date: "2024-01-20",
    readTime: "6 min read",
  },
  {
    slug: "freelance-tax-deductions-calculator-write-offs",
    title: "Freelance Tax Deductions Calculator: What You Can Write Off",
    description: "Maximize your tax savings with our comprehensive guide to freelance deductions. Home office, equipment, software, health insurance, and more.",
    date: "2024-01-25",
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

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Calculate Your Rate Now
          </Link>
        </div>
      </div>
    </main>
  );
}