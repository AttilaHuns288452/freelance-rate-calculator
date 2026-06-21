import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Freelance Rate Calculator",
  description: "Privacy policy for Freelance Rate Calculator. We respect your privacy and collect minimal data.",
  robots: "index, follow",
  alternates: {
    canonical: "https://freelancecalculator.xyz/privacy",
  },
};

export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-gray-600">Last updated: {lastUpdated}</p>
      </header>

      <section className="prose prose-gray max-w-none space-y-6">
        <p>Freelance Rate Calculator ("we", "our", "us") respects your privacy. This policy explains what data we collect, how we use it, and your rights.</p>

        <h2>Data We Collect</h2>
        <ul>
          <li><strong>Calculator inputs:</strong> Numbers you enter (desired income, hours, expenses, etc.) are processed entirely in your browser. We never send them to our servers.</li>
          <li><strong>Analytics:</strong> We use Google Analytics 4 to understand aggregate usage (page views, country, device). No personally identifiable information is collected.</li>
          <li><strong>Advertising:</strong> Google AdSense may use cookies to serve personalized ads. See <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google's ad policy</a>.</li>
        </ul>

        <h2>How We Use Data</h2>
        <ul>
          <li>Analytics data helps us improve the calculator and prioritize features.</li>
          <li>We do not sell, rent, or share your personal data with third parties except as required by law.</li>
        </ul>

        <h2>Cookies</h2>
        <p>This site uses cookies for:</p>
        <ul>
          <li>Analytics (Google Analytics)</li>
          <li>Advertising (Google AdSense)</li>
          <li>Affiliate link tracking (e.g., FreshBooks, Upwork)</li>
        </ul>
        <p>You can disable cookies in your browser settings, though some features may not work correctly.</p>

        <h2>Your Rights</h2>
        <p>Under GDPR, CCPA, and similar laws, you have the right to:</p>
        <ul>
          <li>Access data we hold about you</li>
          <li>Request deletion of your data</li>
          <li>Opt out of analytics and advertising tracking</li>
        </ul>
        <p>To exercise these rights, contact us at privacy@freelanceratecalculator.com</p>

        <h2>Third-Party Services</h2>
        <ul>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
          <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google AdSense</a></li>
          <li><a href="https://www.freshbooks.com/privacy" target="_blank" rel="noopener noreferrer">FreshBooks (affiliate)</a></li>
          <li><a href="https://www.upwork.com/legal/privacy" target="_blank" rel="noopener noreferrer">Upwork (affiliate)</a></li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy. Changes will be posted here with a new "Last updated" date.</p>

        <h2>Contact</h2>
        <p>Questions? Email privacy@freelanceratecalculator.com</p>
      </section>
    </main>
  );
}