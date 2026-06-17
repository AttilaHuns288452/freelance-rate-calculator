"use client";

const RECOMMENDATIONS = [
  { name: "FreshBooks", desc: "Accounting", url: "https://www.freshbooks.com/", icon: "📊" },
  { name: "Upwork", desc: "Find work", url: "https://www.upwork.com/", icon: "💼" },
  { name: "Mercury", desc: "Banking", url: "https://mercury.com/", icon: "🏦" },
  { name: "Bonsai", desc: "Contracts", url: "https://www.hellobonsai.com/", icon: "📝" },
  { name: "QuickBooks", desc: "Taxes", url: "https://quickbooks.intuit.com/self-employed/", icon: "💰" },
  { name: "Toptal", desc: "Top talent", url: "https://www.toptal.com/", icon: "⭐" },
];

export default function AffiliateLinks() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
      <p className="text-xs text-gray-400 mb-3 text-center">
        🛠️ Tools freelancers might find useful
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {RECOMMENDATIONS.map(({ name, desc, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm transition-all"
          >
            <span>{icon}</span>
            <span className="font-medium">{name}</span>
            <span className="text-gray-400 hidden sm:inline">· {desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
