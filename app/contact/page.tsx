import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Freelance Lifestyle Calculator",
  description: "Get in touch with the Freelance Lifestyle Calculator team. Questions, suggestions, or partnership inquiries welcome.",
  robots: "index, follow",
  alternates: { canonical: "https://freelancecalculator.xyz/contact" },
  openGraph: {
    title: "Contact — Freelance Lifestyle Calculator",
    description: "Questions or suggestions? We'd love to hear from you.",
    url: "https://freelancecalculator.xyz/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">Have a question about the calculator? Found a bug? Want to suggest a feature? We'd love to hear from you.</p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Email</h2>
          <a href="mailto:hello@freelancecalculator.xyz" className="text-xl text-blue-600 hover:underline font-medium">
            hello@freelancecalculator.xyz
          </a>
          <p className="text-sm text-gray-500 mt-2">Response time: Within 48 hours, usually faster.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Questions</h2>
          <p className="text-gray-600 mb-4">Before reaching out, check if your question is answered here:</p>
          <ul className="space-y-2 text-gray-600">
            <li>• <Link href="/" className="text-blue-600 hover:underline">How the calculator works</Link> — detailed methodology on the homepage</li>
            <li>• <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link> — guides on freelance pricing, taxes, and rates</li>
            <li>• <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> — how we handle your data</li>
            <li>• <Link href="/resources" className="text-blue-600 hover:underline">Resources</Link> — recommended tools for freelancers</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Report a Bug</h2>
          <p className="text-gray-600 mb-4">Found something not working? Please include:</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 mb-4">
            <li>The URL where you found the issue</li>
            <li>What you were doing when it happened</li>
            <li>Your browser and operating system</li>
            <li>A screenshot if applicable</li>
          </ol>
          <p>Send to <a href="mailto:hello@freelancecalculator.xyz" className="text-blue-600 hover:underline">hello@freelancecalculator.xyz</a> with <strong>"Bug Report"</strong> in the subject line.</p>
        </div>

        <p className="text-xs text-gray-400 text-center"><em>We respect your privacy. We will never share your email or use it for anything other than responding to your inquiry.</em></p>
      </div>
    </main>
  );
}
