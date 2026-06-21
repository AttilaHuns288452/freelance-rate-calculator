import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - Freelance Rate Calculator",
  description: "Affiliate disclosure for Freelance Rate Calculator. We earn commissions from some recommended tools.",
  robots: "index, follow",
  alternates: {
    canonical: "https://freelancecalculator.xyz/affiliate-disclosure",
  },
};

export default function AffiliateDisclosure() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Affiliate Disclosure</h1>
        <p className="mt-2 text-gray-600">Last updated: {lastUpdated}</p>
      </header>

      <section className="prose prose-gray max-w-none space-y-6">
        <p className="lead">
          <strong>Freelance Rate Calculator</strong> participates in affiliate marketing programs. This means we may earn a commission when you click certain links and make a purchase or sign up for a service.
        </p>

        <h2>What This Means for You</h2>
        <ul>
          <li><strong>No extra cost:</strong> You pay the same price whether you use our link or go directly.</li>
          <li><strong>Supports the site:</strong> Commissions help cover hosting, development, and maintenance costs.</li>
          <li><strong>Transparency:</strong> We only recommend tools we've researched and believe provide genuine value to freelancers.</li>
        </ul>

        <h2>Current Affiliate Partners</h2>
        <p>We may earn commissions from the following (subject to change):</p>
        <ul>
          <li><strong>FreshBooks</strong> — Accounting &amp; invoicing software</li>
          <li><strong>QuickBooks Self-Employed</strong> — Tax &amp; bookkeeping for freelancers</li>
          <li><strong>Upwork</strong> — Freelance marketplace</li>
          <li><strong>Toptal</strong> — Elite freelance network</li>
          <li><strong>Contra</strong> — Commission-free freelance platform</li>
          <li><strong>Mercury</strong> — Business banking for startups</li>
          <li><strong>Novo</strong> — Business banking for freelancers</li>
          <li><strong>Found</strong> — Banking with auto tax savings</li>
          <li><strong>Bonsai</strong> — Contracts, proposals, invoicing</li>
          <li><strong>HoneyBook</strong> — Clientflow management</li>
        </ul>

        <h2>Editorial Independence</h2>
        <p>Affiliate relationships do not influence our calculator logic, methodology, or recommendations. We include tools based on:</p>
        <ul>
          <li>Relevance to freelancers/contractors</li>
          <li>Market reputation and user reviews</li>
          <li>Feature fit for the use case</li>
        </ul>
        <p>If a better tool exists without an affiliate program, we'll still mention it.</p>

        <h2>Advertising</h2>
        <p>This site also displays Google AdSense ads. These are not endorsements. Ad content is determined by Google based on your browsing history and the page content.</p>

        <h2>Compliance</h2>
        <p>This disclosure complies with:</p>
        <ul>
          <li>FTC Endorsement Guides (US)</li>
          <li>ASA CAP Code (UK)</li>
          <li>ACCC guidelines (Australia)</li>
          <li>Similar regulations in other jurisdictions</li>
        </ul>

        <h2>Contact</h2>
        <p>Questions about our affiliate practices? Email affiliates@freelanceratecalculator.com</p>
      </section>
    </main>
  );
}