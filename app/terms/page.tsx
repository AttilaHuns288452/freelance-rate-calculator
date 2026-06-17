import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Freelance Rate Calculator",
  description: "Terms of service for Freelance Rate Calculator. Free tool for educational purposes only.",
  robots: "index, follow",
};

export default function Terms() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-gray-600">Last updated: {lastUpdated}</p>
      </header>

      <section className="prose prose-gray max-w-none space-y-6">
        <p><strong>Freelance Rate Calculator</strong> ("the Site") is a free online tool provided for educational and informational purposes only.</p>

        <h2>1. No Professional Advice</h2>
        <p>The calculator provides estimates based on the inputs you provide. It is <strong>not</strong> financial, tax, legal, or business advice. Always consult a qualified accountant, tax professional, or attorney before making business decisions.</p>

        <h2>2. Accuracy</h2>
        <p>We strive for accuracy but make no guarantees. Tax laws vary by country, state, and municipality. Benefit costs change annually. The "employed equivalent" is a rough approximation.</p>

        <h2>3. No Liability</h2>
        <p>You use this tool at your own risk. We are not liable for any financial losses, tax penalties, business decisions, or other consequences resulting from use of this calculator.</p>

        <h2>4. Free Use</h2>
        <p>The calculator is free to use. No account, payment, or subscription is required.</p>

        <h2>5. Affiliate Links</h2>
        <p>The Site contains affiliate links. If you click a link and make a purchase or sign up, we may earn a commission at no extra cost to you. This supports the Site's operation. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a>.</p>

        <h2>6. Intellectual Property</h2>
        <p>The calculator logic, design, and content are our property. You may not copy, reproduce, or redistribute the code or proprietary calculations without permission.</p>

        <h2>7. Third-Party Services</h2>
        <p>The Site uses Google Analytics and Google AdSense. Your use of the Site constitutes acceptance of their respective terms and privacy policies.</p>

        <h2>8. Modifications</h2>
        <p>We may modify, suspend, or discontinue the Site at any time without notice.</p>

        <h2>9. Governing Law</h2>
        <p>These terms are governed by the laws of the jurisdiction where the Site operator resides, without regard to conflict of law principles.</p>

        <h2>10. Contact</h2>
        <p>Questions about these terms? Email legal@freelanceratecalculator.com</p>
      </section>
    </main>
  );
}