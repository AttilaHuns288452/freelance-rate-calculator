"use client";

const AFFILIATES = [
  {
    category: "Accounting & Invoicing",
    items: [
      { name: "FreshBooks", desc: "Invoicing, expenses, time tracking", url: "https://www.freshbooks.com/", commission: "$10-20/signup" },
      { name: "QuickBooks Self-Employed", desc: "Tax deductions, quarterly estimates", url: "https://quickbooks.intuit.com/self-employed/", commission: "$10-50/signup" },
      { name: "Wave", desc: "Free accounting + paid payroll", url: "https://www.waveapps.com/", commission: "Free tier / payroll rev-share" },
    ],
  },
  {
    category: "Finding Work",
    items: [
      { name: "Upwork", desc: "Largest freelance marketplace", url: "https://www.upwork.com/", commission: "$50-100/client signup" },
      { name: "Toptal", desc: "Top 3% freelancers, higher rates", url: "https://www.toptal.com/", commission: "$100-500/placement" },
      { name: "Contra", desc: "Commission-free, portfolio-focused", url: "https://contra.com/", commission: "Pro subscription rev-share" },
    ],
  },
  {
    category: "Business Banking",
    items: [
      { name: "Mercury", desc: "Startup-friendly, no fees", url: "https://mercury.com/", commission: "$200-500/funded account" },
      { name: "Novo", desc: "Built for freelancers, integrations", url: "https://novo.co/", commission: "$50-100/signup" },
      { name: "Found", desc: "Tax savings auto-set aside", url: "https://found.com/", commission: "Rev-share on paid plans" },
    ],
  },
  {
    category: "Legal & Contracts",
    items: [
      { name: "Bonsai", desc: "Contracts, proposals, invoicing", url: "https://www.hellobonsai.com/", commission: "$20-50/signup" },
      { name: "HoneyBook", desc: "Clientflow + contracts + payments", url: "https://www.honeybook.com/", commission: "$50-100/signup" },
      { name: "Docracy", desc: "Free open-source contracts", url: "https://www.docracy.com/", commission: "None (goodwill/lead gen)" },
    ],
  },
];

export default function AffiliateLinks() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Tools Freelancers Actually Use
      </h3>
      <p className="text-sm text-gray-500 mb-5">
        These are affiliate links — we earn a commission if you sign up, at no extra cost to you.
        We only recommend tools we've vetted.
      </p>
      <div className="space-y-6">
        {AFFILIATES.map(({ category, items }) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">{category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(({ name, desc, url, commission }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <p className="font-medium text-gray-900 group-hover:text-blue-600">{name}</p>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <p className="text-xs text-gray-400 mt-2">Affiliate: {commission}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}