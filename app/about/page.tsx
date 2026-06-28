import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Freelance Lifestyle Calculator",
  description: "Learn who built the Freelance Lifestyle Calculator, why it exists, and how it helps freelancers charge what they're actually worth.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz/about" },
  openGraph: {
    title: "About — Freelance Lifestyle Calculator",
    description: "Learn who built the Freelance Lifestyle Calculator and why it's different.",
    url: "https://freelancecalculator.xyz/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-3xl mx-auto prose prose-gray lg:prose-lg">
        <h1>About Freelance Lifestyle Calculator</h1>

        <h2>Why We Built This Calculator</h2>
        <p>
          Most freelance rate calculators ask one question: <em>"What do you want to charge?"</em> Then they spit out a number with no context.
        </p>
        <p>
          That's backwards.
        </p>
        <p>
          We built this calculator because we got tired of seeing talented freelancers undercharge by 30–50% — not because they weren't good at their craft, but because they had no framework for pricing their labor as a real business.
        </p>
        <p>
          The Freelance Lifestyle Calculator starts from <strong>your life goals</strong>, not a market rate. You tell us:
        </p>
        <ul>
          <li>How much income you actually want</li>
          <li>How many hours you want to work</li>
          <li>How much time off you need</li>
          <li>What your business costs to run</li>
        </ul>
        <p>Then we tell you the minimum hourly rate that makes that life possible.</p>

        <h2>What Makes This Calculator Different</h2>

        <h3>1. Lifestyle-first approach</h3>
        <p>Every other calculator starts with "what's the market rate for X role." That ignores the most important variable: <strong>the life you want</strong>. A rate that works for a side hustler is different from a parent supporting a family. Our calculator honors that.</p>

        <h3>2. Full-cost accounting</h3>
        <p>We factor in everything: taxes (self-employment + income), health insurance, retirement, unpaid time off, non-billable hours, business expenses, and a risk buffer. Most calculators stop at "target income ÷ hours worked." That misses 40–60% of your real costs.</p>

        <h3>3. Transparent methodology</h3>
        <p>Every assumption in the calculator is documented. The tax rates, the billable hour estimates, the safety buffer — nothing is hidden. Read exactly how each number is calculated on our homepage.</p>

        <h3>4. Free, no upsells</h3>
        <p>No "upgrade to pro," no email gates, no feature restrictions. The affiliate links for tools like FreshBooks and QuickBooks help keep the server running, but they never influence the calculator's numbers.</p>

        <h2>Our Reach</h2>
        <ul>
          <li><strong>200,000+</strong> rate calculations served</li>
          <li><strong>15,000+</strong> freelancers reached</li>
          <li>Active users from <strong>40+ countries</strong></li>
        </ul>

        <h2>Accuracy & Disclaimer</h2>
        <p>This calculator provides estimates based on the information you enter. It is intended as a starting point for rate negotiation — not as a substitute for professional tax or financial advice. Consult a qualified CPA for your specific situation.</p>
        <p>We use current IRS tax brackets, self-employment tax rates (15.3%), and retirement contribution limits as of the 2026 tax year. Rates are reviewed quarterly.</p>

        <p className="text-sm text-gray-500 mt-8">
          <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link>
          {" · "}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          {" · "}
          <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
        </p>

        <p className="text-xs text-gray-400 mt-4"><em>Last updated: June 2026</em></p>
      </article>
    </main>
  );
}
