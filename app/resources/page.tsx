import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Tools & Resources — Recommended Software",
  description: "A curated list of tools we recommend for freelancers. Accounting, project management, contracts, banking, and more — with honest reviews.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz/resources" },
  openGraph: {
    title: "Freelance Tools & Resources",
    description: "Honest reviews of the best tools for freelancers — accounting, contracts, banking, and more.",
    url: "https://freelancecalculator.xyz/resources",
  },
};

export default function Resources() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools & Resources for Freelancers</h1>
        <p className="text-gray-600 mb-2">
          We've used or researched every tool on this page. These are genuine recommendations — not paid placements.
        </p>
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <strong>Disclosure:</strong> Some links on this page are affiliate links (marked with *). If you sign up through these links, we may earn a small commission at no extra cost to you. We only recommend tools we've personally used and believe provide genuine value to freelancers. This income helps keep our <Link href="/" className="underline font-medium">calculator</Link> free for everyone.
        </p>

        {/* Accounting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">📊 Accounting & Invoicing</h2>
          <hr className="mb-6 border-gray-200" />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">FreshBooks*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> Solo freelancers and small teams · <strong>Price:</strong> $19–$50/month</p>
            <p className="text-gray-600 mb-3">The best invoicing experience we've found. FreshBooks makes it simple to create professional invoices, track expenses, and see profitability. Time tracking integrates directly with invoices — perfect for hourly freelancers.</p>
            <p className="text-sm text-gray-500 mb-1"><strong>Pros:</strong> Beautiful invoices, automatic payment reminders, expense categorization</p>
            <p className="text-sm text-gray-500 mb-3"><strong>Cons:</strong> Limited inventory features, okay but not great mobile app</p>
            <a href="https://www.freshbooks.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit FreshBooks →</a>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">QuickBooks Self-Employed*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> Tax-focused freelancers · <strong>Price:</strong> $15–$25/month</p>
            <p className="text-gray-600 mb-3">QuickBooks automates SE tax calculations, quarterly estimates, and Schedule C prep. The mileage tracking is excellent. If you want to hand your CPA clean reports at tax time, this is the tool.</p>
            <p className="text-sm text-gray-500 mb-1"><strong>Pros:</strong> Tax reporting, mileage tracking, receipt capture, quarterly estimate calculation</p>
            <p className="text-sm text-gray-500 mb-3"><strong>Cons:</strong> Invoicing is basic, UI can feel clunky</p>
            <a href="https://quickbooks.intuit.com/self-employed/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit QuickBooks →</a>
          </div>
        </section>

        {/* Contracts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">📝 Contracts & Proposals</h2>
          <hr className="mb-6 border-gray-200" />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Bonsai*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> Freelancers who need contracts, proposals, AND invoicing · <strong>Price:</strong> $25–$39/month</p>
            <p className="text-gray-600 mb-3">Bonsai has the best contract templates for freelancers — rate agreements, NDA, SOW, subcontractor agreements — all lawyer-reviewed. Combine with proposals and invoicing and it replaces three separate tools.</p>
            <a href="https://www.hellobonsai.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit Bonsai →</a>
          </div>
        </section>

        {/* Banking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">🏦 Business Banking</h2>
          <hr className="mb-6 border-gray-200" />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Mercury*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> Freelancers operating as LLCs or corporations · <strong>Price:</strong> Free</p>
            <p className="text-gray-600 mb-3">Mercury is free, has no minimum balance, integrates with Stripe and Gusto, and gives you modern banking. The API access is a bonus for tech-savvy freelancers.</p>
            <a href="https://mercury.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit Mercury →</a>
          </div>
        </section>

        {/* Finding Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">💼 Finding Work</h2>
          <hr className="mb-6 border-gray-200" />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Upwork*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> New freelancers building a portfolio · <strong>Fee:</strong> 20% on first $500, then 5%</p>
            <p className="text-gray-600 mb-3">The largest freelance marketplace. For new freelancers with no network, it's the fastest way to get paid clients. Established freelancers typically leave after 1-2 years.</p>
            <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit Upwork →</a>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Toptal*</h3>
            <p className="text-sm text-gray-500 mb-2"><strong>Best for:</strong> Experienced freelancers ($100k+/year) · <strong>Fee:</strong> ~30% of rate</p>
            <p className="text-gray-600 mb-3">Toptal screens the top 3% of freelancers. If you get in, you get access to premium clients ($100–$250+/hour). Less competition, higher quality projects.</p>
            <a href="https://www.toptal.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">Visit Toptal →</a>
          </div>
        </section>

        {/* Other Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">💰 Other Tools We Use</h2>
          <hr className="mb-6 border-gray-200" />
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">Tool</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Price</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Why We Like It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Stripe", "Payment processing", "2.9% + $0.30/transaction", "Best API, global reach"],
                  ["Notion", "Project management", "Free–$10/month", "Flexible, powerful"],
                  ["Loom", "Async video", "Free–$12.50/month", "Saves hours of meetings"],
                  ["Calendly", "Scheduling", "Free–$16/month", "Automates booking"],
                  ["Zapier", "Automation", "$19.99/month", "Connects tools"],
                ].map(([tool, cat, price, why]) => (
                  <tr key={tool} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{tool}</td>
                    <td className="px-4 py-3 text-gray-600">{cat}</td>
                    <td className="px-4 py-3 text-gray-600">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-xs text-gray-400 mt-8">Last updated: June 2026 · <Link href="/contact" className="text-blue-600 hover:underline">Questions?</Link></p>
      </div>
    </main>
  );
}
